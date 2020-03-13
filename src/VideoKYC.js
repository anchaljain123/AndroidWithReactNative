import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import RecordVideo from "./RecordVideo";
import ViewVideo from "./ViewVideo";
const { height } = Dimensions.get("window");

export default class VideoKYC extends Component {
    constructor() {
        super();
        this.state = {
            page: ""
        };
    }
    saveURI = url => {
        this.setState({
            url
        })
    }
    render() {
        const { page } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ backgroundColor: "green", padding:8}}
                    onPress={el => this.setState({ page: 'watch' })}
                >
                    <Text name="watch" style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: 'white'
                    }}>Watch</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: "blue", padding: 8 }}
                    onPress={el => this.setState({ page: 'record' })}
                >
                    <Text name="record" style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: 'white'
                    }}>Record</Text>
                </TouchableOpacity>

                {page === "record" && (
                    <View style={styles.contentContainer}>
                        <RecordVideo saveURI={this.saveURI}/>
                    </View>
                )}
                {page === "watch" && (
                    <View style={styles.contentContainer}>
                        <ViewVideo url={this.state.url}/>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    contentContainer: {
        height: height - 100
    }
});