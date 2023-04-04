/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Divider } from "@rneui/themed";
import styles from "./style";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [shared, setShared] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = () => {
    setCommented(!commented);
  };

  const handleShare = () => {
    setShared(!shared);
  };

  return (
    <View>
      <View style={styles.header}>
        <Avatar
          size={48}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <View style={styles.headerText}>
          <Text style={styles.username}>{post.postedUserId}</Text>
          <Text style={styles.timestamp}>{post.updatedAt}</Text>
        </View>

        <View>
          <TouchableOpacity style={{ marginLeft: 110 }}>
            <MaterialIcons name="more" size={20}></MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>
      {/* {post.image && (
          <Image source={{ uri: post.image }} style={styles.image} />
        )} */}
      <Text style={styles.content}>{post.data.text}</Text>

      <View style={styles.actions}>
        {/* React  */}
        <TouchableOpacity onPress={handleLike}>
          <MaterialIcons
            name={liked ? "favorite" : "favorite"}
            size={24}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <Text style={styles.actionCount}>{post.reactionsCount}</Text>

        {/* Comment */}
        <TouchableOpacity onPress={handleComment} style={styles.action}>
          <MaterialIcons
            name={commented ? "comment" : "comment"}
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
      <Divider width={1} color="black"></Divider>

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
