import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons";

import { useRef, useState } from "react";
import Video from 'react-native-video';
import { useNavigation } from "@react-navigation/native";
import { Avatar } from 'react-native-elements';
import ReelProgress from "./ReelProgress";
import { Image } from "react-native-elements";
import { getTimeDiffString } from '../../../utils/utils';
// import * as Contants from '../../../utils/constants';
const ReelScreen = () => {

    const DATA = [
        {
            "_id": "1",
            "uri": "https://api.amity.co/api/v3/files/642bc4466f323b01dd6d7765/download",
            "createdAt": "2023-04-04T06:31:40.654Z",
            "displayName": "99",
            "avatarUrl": "https://pbs.twimg.com/profile_images/1102856169088053249/7iZzU6J0_400x400.png",
            "dataType": "video",
        },
        {
            "_id": "2",
            "uri": "https://api.amity.co/api/v3/files/642bc4466f323b01dd6d7765/download",
            "createdAt": "2023-04-04T06:31:40.654Z",
            "displayName": "99",
            "avatarUrl": "https://pbs.twimg.com/profile_images/1102856169088053249/7iZzU6J0_400x400.png",
            "dataType": "video",
        },
        {
            "_id": "2",
            "uri": "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwc1a7c1f3/images/Lux-A/hinh-anh-gia-xe-VinFast-Lux-A2.0-ban-tieu-chuan-mau-do-mystique-red.png",
            "createdAt": "2023-04-04T06:31:40.654Z",
            "displayName": "99",
            "avatarUrl": "https://pbs.twimg.com/profile_images/1102856169088053249/7iZzU6J0_400x400.png",
            "dataType": "image",
        },
    ];
    const videoRef = useRef(null);
    const navigation = useNavigation();
    const [videoIndex, setVideoIndex] = useState(0);

    console.log(DATA[videoIndex]);
    return (
        <View style={styles.outsideContainer}>
            <View style={styles.insideContainer}>
                {DATA[videoIndex].dataType === 'video' && <Video
                    key={DATA[videoIndex]._id}
                    ref={videoRef}
                    source={{ uri: DATA[videoIndex].uri }}
                    paused={false}
                    style={styles.video}
                    resizeMode="contain"
                    onEnd={() => {
                        console.log("end of video")
                        if (videoIndex == DATA.length - 1) {
                            navigation.goBack();
                        }
                        else {
                            setVideoIndex(videoIndex < DATA.length - 1 ? (videoIndex + 1) : DATA.length - 1);
                        }
                    }}
                />}
                {
                    DATA[videoIndex].dataType === 'image' && <Image source={{
                        uri: DATA[videoIndex].uri
                    }} 
                    style={{height:200, width:300}}/>
                }
                <TouchableOpacity style={styles.leftOverlay} onPress={() => {
                    console.log("left tab");
                    setVideoIndex(videoIndex > 0 ? (videoIndex - 1) : 0);
                }} />
                <TouchableOpacity style={styles.rightOverlay} onPress={() => {
                    console.log("left tab");
                    setVideoIndex(videoIndex < DATA.length - 1 ? (videoIndex + 1) : DATA.length - 1);
                }} />
            </View>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', padding: 4, }}>
                    <Avatar

                        size={48}
                        rounded
                        source={{ uri: DATA[videoIndex].avatarUrl }}
                        containerStyle={{ marginRight: 4 }}
                    // style={styles.avatar}
                    />
                    <View style={{  }}>

                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{DATA[videoIndex].displayName}</Text>
                        <Text style={{ color: 'white', fontWeight: '300' }}>{getTimeDiffString(DATA[videoIndex].createdAt)}</Text>

                    </View>
                </View >
                <View style={{ flexDirection: "row-reverse" }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <MaterialIcons name="close" size={26} color='white'></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <MaterialIcons name="more-horiz" size={26} color="white" />

                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ height: 20, width: '100%' }}>
                <ReelProgress key={DATA[videoIndex]._id} duration={10} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 100,
        
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16
    },
    outsideContainer: {
        flexDirection: "column",
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    insideContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    video: {
        width: '100%',
        flex: 1,


    },
    leftOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        // backgroundColor:"red"
    },
    rightOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        // backgroundColor:"green"
    },

});

export default ReelScreen;