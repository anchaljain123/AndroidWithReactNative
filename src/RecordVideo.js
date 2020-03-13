import React, { useState, useRef } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

// import { SafeAreaView } from 'react-navigation';

import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import { withNavigationFocus } from "react-navigation";

const ENDPOINT = "http://192.168.178.47:3000";

export default class RecordVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            processing: false
        }
    }

    startRecording = async () => {

        // this.setState({ recording: true });
        // const OPTIONS = {
        //     quality: RNCamera.Constants.VideoQuality['480p'],
        //     maxDuration: 10,
        //     orientation: 'landscapeRight'
        //     }
        // const { uri, codec = "mp4" } = await this.camera.recordAsync();
        // console.log(">>>>>-----uri", await uri, await codec)
        // if (await uri) {
        //     this.setState({
        //         videoURI: await uri
        //     });
        // }
        this.setState({ recording: true });
        // default to mp4 for android as codec is not set
        const { uri, codec = "mp4" } = await this.camera.recordAsync();
        this.setState({ recording: false, processing: true });
        const type = `video/${codec}`;

        const data = new FormData();
        data.append("video", {
            name: "mobile-video-upload",
            type,
            uri
        });

        // try {
        //     const res = await fetch(ENDPOINT, {
        //         method: "post",
        //         body: data
        //     });
        // } catch (e) {
        //     console.error(e);
        // }

        this.setState({ processing: false });
        this.props.saveURI(uri);
    }

    stopRecording = () => {
        this.camera && this.camera.stopRecording();
    }
    render() {
        const { recording, processing } = this.state;
        let button = (
            <TouchableOpacity
                onPress={this.startRecording}
            >
                <Text style={{ fontSize: 14 }}> RECORD </Text>
            </TouchableOpacity>
        );

        if (recording) {
            button = (
                <TouchableOpacity
                    onPress={this.stopRecording}
                >
                    <Text style={{ fontSize: 14 }}> STOP </Text>
                </TouchableOpacity>
            );
        }

        if (processing) {
            button = (
                <View>
                    <Text>processing</Text>
                </View>
            );
        }
        console.log(">>>this.state.videoURI", this.state.videoURI)
        const isFocused = this.props.navigation.isFocused();
        return (
            <>
                <Text>Take Video</Text>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={"Permission to use camera"}
                    permissionDialogMessage={
                        "We need your permission to use your camera phone"
                    }
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
                {
                    this.state.videoURI &&
                    <Video source={{ uri: this.state.videoURI }}
                        ref={(ref) => {
                            this.player = ref
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }} />
                }
                <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
                    {button}
                </View>
            </>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
    },
    preview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    capture: {
        flex: 0,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: "center",
        margin: 20
    }
});