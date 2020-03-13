
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Linking,
} from "react-native";

const ENDPOINT = "http://192.168.178.47:3000";

import Video from 'react-native-video';
const { width } = Dimensions.get("window");


export default class VideoOverview extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        };
    }
    // async componentWillMount() {
    // try {
    //     const videos = await fetch(ENDPOINT).then(res => res.json());
    //     this.setState({
    //         videos: videos
    //     });
    // } catch (e) {
    //     console.error("error loading videos", e);
    // }
    // }

    // openVideo(id) {
    //     const url = `${ENDPOINT}/${id}`;

    //     Linking.openURL(url).catch(err =>
    //         console.error("An error occurred opening the link", err)
    //     );
    // }

    render() {
        console.log(">>>>>>", this.props)
        return (
            <View style={{
                flex: 1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9,
                position: 'absolute'
            }}>
                {/* {this.state.videos.map(({ id }) => (
                    <TouchableHighlight
                        key={id}
                        underlayColor="rgba(200,200,200,0.6)"
                        onPress={this.openVideo.bind(this, id)}
                    >
                        <Text style={styles.videoTile}>Watch #{id}</Text>
                    </TouchableHighlight>
                ))} */}

                <Video
                    ref={(ref) => {
                        this.video = ref
                    }}
                    source={{ uri: this.props.url }}
                    // source={require('./background.mp4')}
                    style={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute'
                    }}
                    rate={1}
                    volume={1}
                    muted={false}
                    resizeMode="contain"
                    repeat={false}
                    hideControls={false}
                    key="video1" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    headline: {
        alignSelf: "center",
        fontSize: 18,
        marginTop: 10,
        marginBottom: 30
    },
    videoTile: {
        alignSelf: "center",
        fontSize: 16,
        marginTop: 15
    }
});
