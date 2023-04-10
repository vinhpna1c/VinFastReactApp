import { useEffect, useState } from "react";
import { View, StyleSheet,Text,Image, TouchableOpacity } from "react-native";
import Video from 'react-native-video';
import AmityPostController from "../../../controller/amity/amity_post_controller";
import { useNavigation } from "@react-navigation/native";

function MiniReel({ post }) {
    const navigation=useNavigation();
    
    const [reelData,setReelData]=useState(["",""]);
    
    
    useEffect(()=>{
        const children=post['children']??[];
        if(children.length>0)
        {
            AmityPostController.getUrlFromPost(children[0]).then(value=>setReelData(value));
        }

    },[]);
    

    return (
       <TouchableOpacity onPress={()=>navigation.navigate('community',{'screen':'reel'})}>
        <View style={styles.container}>
            <View style={styles.topContainer}>
              {
            reelData[1]==='image'&&<Image source={{ uri: reelData[0] }} key={reelData[0]} style={{ height: '98%', width: '98%' }} />
           
              }
              {
                 reelData[1]==='video'&&<Video
                 key={reelData[0]}
                
                 source={{ uri:reelData[0] }}
                 paused={true}
                 style={{ height: '98%', width: '98%' }}
                 resizeMode="contain"
                
             />
              }
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.textStyle} numberOfLines={1} ellipsizeMode="tail">{post['postedUserId']??""}</Text>
            </View>
        </View>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 80,
        height: 125,
        position: 'relative',
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 8,
        // backgroundColor:'red',
        marginRight: 4,


    },
    image: {},
    topContainer: {
        flex:1,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        // backgroundColor:"red",
        
        

    },
    bottomContainer: {
        height:45,
        borderTopColor: '#cccccc',
        borderTopWidth: 0.5,
        
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        justifyContent:'center',
        padding:8,


    },
    textStyle:{
fontSize:12,
fontWeight:'500',

    }
});

export default MiniReel;