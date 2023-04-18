/** @format */

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Divider } from "@rneui/themed";
import styles from "./style";
import { getTimeDiffString } from '../../../utils/utils';
import AmityPostController from "../../../controller/amity/amity_post_controller";
import { getFile } from "@amityco/ts-sdk";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {} from 'react-native-image-viewing';
import ImageViewer from "react-native-image-zoom-viewer";

const Post = ({ post }) => {

  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [shared, setShared] = useState(false);

  const [images, setImages] = useState([]);
  const [reactionCount,setReactionCount]=useState(post.reactionCount??0);

  const [showImage,setShowImage]=useState(false);
  
  const toggleDisplay=()=>{
    setShowImage(prev=>!prev)
  };

  const handleLike = () => {
    const newLiked=!liked;
    setLiked(newLiked);
    if(newLiked){
      setReactionCount(prev=>prev+1)

    }
    else{
      setReactionCount(prev=>prev-1)
    }
  };

  const handleComment = () => {
    setCommented(!commented);
  };

  const handleShare = () => {
    setShared(!shared);
  };

  useEffect(() => {
    const subPosts = post['children'] ?? [];
    const getImageLinks = async () => {
      var links = [];

      for (let i = 0; i < subPosts.length; i++) {
        const p = await AmityPostController.getPostById(subPosts[i]);
        //handle types of post here

        if (p.dataType === 'image') {
          const url = (await getFile(p.data.fileId)).data.fileUrl;
          //add large for render
          links.push(url + "?size=large")
        }
        else if (p.dataType === 'video') {
          // console.log(p);
          const videoFile = await getFile(p.data.videoFileId.original);
          // console.log(videoFile.data.fileUrl);
        }
      }
      return links;

    }
    getImageLinks().then(value => setImages(value));
  }, []);


  const timeDiff = getTimeDiffString(post['createdAt'] ?? "");
console.log("Post: "+JSON.stringify(post))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Avatar
            size={48}
            rounded
            style={styles.avatar}
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <View style={styles.headerText}>
            <Text style={styles.username}>{post.postedUserId}</Text>
            <Text style={styles.timestamp}>{timeDiff}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={{ marginLeft: 110 }}>
            <MaterialIcons name="more-horiz" size={20}></MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.content}>{post.data.text}</Text>
      <View style={styles.mediaContainer}>
        {images.map((image,index) => {
          // console.log(image);
          return (
            // <TouchableOpacity key={image}  onPress={()=>setShowImage(true)}>
               
            // </TouchableOpacity>
             <Image key={image}  source={{ uri: image }} style={index==0?styles.topImageContent:styles.otherImageContent} />
          
          )
        })}
      </View>
      
      {/* {
        showImage && 
        <Modal 
        visible={showImage} 
        transparent={true} 
        onRequestClose={()=>setShowImage(false)}>
        <ImageViewer imageUrls={images.map((imageUrl)=>{{url:imageUrl}})}/>
        
        </Modal>  
        
      } */}



      <View style={styles.actions}>
        {/* React  */}
        <TouchableOpacity onPress={handleLike}>
          <FontAwesomeIcon
            name={liked?'heart':'heart-o'}
            size={24}
            style={liked?{color:'red'}:styles.reactionBtnStyle}
          />
        </TouchableOpacity>
        <Text style={styles.actionCount}>{reactionCount}</Text>

        {/* Comment */}
        <TouchableOpacity onPress={handleComment} style={styles.action}>
          <Ionicon
            name='chatbubble-ellipses-outline'
            size={24}
            style={styles.reactionBtnStyle}
          />
        </TouchableOpacity>
        <Text style={styles.actionCount}>{post.commentsCount}</Text>

        {/* Share */}
        <TouchableOpacity onPress={handleShare} style={styles.action}>
         <FontAwesomeIcon name="share-square-o" size={24} style={styles.reactionBtnStyle}/>
        </TouchableOpacity>
        <Text style={styles.actionCount}>{post.sharedCount}</Text>
      </View>
      {/* <Divider width={1} color="black"></Divider> */}

      {commented && (
        <View style={styles.commentSection}>
          <TextInput placeholder="what think?"></TextInput>

          <TouchableOpacity>
            <MaterialIcons name="send" size={20}></MaterialIcons>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Post;
