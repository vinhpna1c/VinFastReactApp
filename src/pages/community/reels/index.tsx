import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons";

import { useContext, useRef, useState } from "react";
import Video from 'react-native-video';
import { useNavigation } from "@react-navigation/native";
import { Avatar } from 'react-native-elements';
import ReelProgress from "./ReelProgress";
import { Image } from "react-native-elements";
import { getTimeDiffString } from '../../../utils/utils';
import { MobXProviderContext } from "mobx-react";
import RootStore from "../../../stores";
// import * as Contants from '../../../utils/constants';


const DEFAULT_REEL_DURATION=10; //in seconds
const ReelScreen = () => {
    const {amityFeedStore} =useContext(MobXProviderContext)as RootStore;
    console.log("reels: "+amityFeedStore.reels);
    console.log(amityFeedStore.reels[0]);

    const videoRef = useRef(null);
    const navigation = useNavigation();
    const [videoIndex, setVideoIndex] = useState(0);
    const metaData=amityFeedStore.reels[videoIndex].metaData;
    let duration=DEFAULT_REEL_DURATION;
    if(metaData['video']!=null)
    {
       duration= parseFloat(metaData['video']['duration']??'10');
    }
    console.log("Duration: "+duration)


    console.log();
    return (
        <View style={styles.outsideContainer}>
            <View style={styles.insideContainer}>
                {amityFeedStore.reels[videoIndex].dataType === 'video' && <Video
                    key={amityFeedStore.reels[videoIndex].id}
                    ref={videoRef}
                    source={{ uri: amityFeedStore.reels[videoIndex].uri }}
                    paused={false}
                    style={styles.video}
                    resizeMode="contain"
                    onEnd={() => {
                        console.log("end of video")
                        if (videoIndex == amityFeedStore.reels.length - 1) {
                            navigation.goBack();
                        }
                        else {
                            setVideoIndex(videoIndex < amityFeedStore.reels.length - 1 ? (videoIndex + 1) : amityFeedStore.reels.length - 1);
                        }
                    }}
                />}
                {
                    amityFeedStore.reels[videoIndex].dataType === 'image' && <Image source={{
                        uri: amityFeedStore.reels[videoIndex].uri
                    }} 
                    style={{height:200, width:300}}/>
                }
                <TouchableOpacity style={styles.leftOverlay} onPress={() => {
                    console.log("left tab");
                    setVideoIndex(videoIndex > 0 ? (videoIndex - 1) : 0);
                }} />
                <TouchableOpacity style={styles.rightOverlay} onPress={() => {
                    console.log("left tab");
                    if(videoIndex<amityFeedStore.reels.length-1)
                    {
                        setVideoIndex(videoIndex + 1);
                    }
                    else{
                        navigation.goBack();
                    }
                    
                }} />
            </View>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', padding: 4, }}>
                    <Avatar

                        size={48}
                        rounded
                        source={{ uri: amityFeedStore.reels[videoIndex].avatarUrl }}
                        containerStyle={{ marginRight: 4 }}
                    // style={styles.avatar}
                    />
                    <View style={{  }}>

                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{amityFeedStore.reels[videoIndex].displayName}</Text>
                        <Text style={{ color: 'white', fontWeight: '300' }}>{getTimeDiffString(amityFeedStore.reels[videoIndex].createdAt)}</Text>

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
                <ReelProgress key={amityFeedStore.reels[videoIndex].id} duration={duration} />
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