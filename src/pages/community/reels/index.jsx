import { View, Text, StyleSheet, Dimensions,TouchableOpacity  } from "react-native"
import { MaterialIcons } from "@expo/vector-icons";

import { useRef } from "react";
import Video from 'react-native-video';
import { useNavigation } from "@react-navigation/native";
const ReelScreen = () => {
    // const DATA = [{
    //     "_id": "1",
    //     "uri": "https://api.amity.co/api/v3/files/642bc4466f323b01dd6d7765/download"
    // }];
    const videoRef = useRef(null);
    const videoUrl = "https://api.amity.co/api/v3/files/642bc4466f323b01dd6d7765/download";
    const navigation=useNavigation();

    return (
        <View style={styles.outsideContainer}>
                 
        
        <View style={styles.insideContainer}>

           
            <Video
                ref={videoRef}
                source={{ uri: videoUrl }}
                paused={false}
                style={styles.video}
                resizeMode="contain"
                onEnd={() => {
                    console.log("end of video")
                }}


            />
             <TouchableOpacity style={styles.leftOverlay} onPress={()=>{console.log("left tab")}}/ >


            <TouchableOpacity style={styles.rightOverlay} onPress={()=>{console.log("right tab")}}/>



        </View>
        <View  style={styles.header}>
        <Text style={{color:'white'}}>Name</Text>  
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <MaterialIcons name="close" size={26} color='white'></MaterialIcons>
        </TouchableOpacity>
        
        </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        position: 'absolute',
        top:0,
        left:0,
        width:'100%',
        height:100,
        // backgroundColor:"red",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:16
    },
    outsideContainer: {
        flexDirection: "column",       
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    insideContainer: {
        flexDirection: "column",
        alignItems:"center",
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