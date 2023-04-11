/** @format */

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Divider } from "@rneui/themed";
import styles from "./style";
import { getTimeDiffString } from '../../../utils/utils';
import AmityPostController from "../../../controller/amity/amity_post_controller";
import { getFile } from "@amityco/ts-sdk";

const Post = ({ post }) => {

  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [shared, setShared] = useState(false);

  const [images, setImages] = useState([]);

  const handleLike = () => {
    setLiked(!liked);
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
          console.log(p);
          const videoFile = await getFile(p.data.videoFileId.original);
          console.log(videoFile.data.fileUrl);
        }
      }
      return links;

    }

    getImageLinks().then(value => setImages(value));


  }, []);


  const timeDiff = getTimeDiffString(post['createdAt'] ?? "");


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
          console.log(image);
          return (<Image source={{ uri: image }} key={image} style={index==0?styles.topImageContent:styles.otherImageContent} />)
        })}
      </View>

      {/* {post.image && (
          <Image source={{ uri: post.image }} style={styles.image} />
        )} */}


      <View style={styles.actions}>
        {/* React  */}
        <TouchableOpacity onPress={handleLike}>
          <MaterialIcons
            name={liked ? "favorite-outline" : "favorite-outline"}
            size={24}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <Text style={styles.actionCount}>{post.reactionsCount}</Text>

        {/* Comment */}
        <TouchableOpacity onPress={handleComment} style={styles.action}>
          <MaterialIcons
            name={commented ? "textsms" : "textsms"}
            size={24}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <Text style={styles.actionCount}>{post.commentsCount}</Text>

        {/* Share */}
        <TouchableOpacity onPress={handleShare} style={styles.action}>
          <MaterialIcons
            name={shared ? "share" : "share"}
            size={24}
            style={styles.actionIcon}
          />
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
