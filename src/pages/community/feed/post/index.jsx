/** @format */

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../style";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import {} from "react-native-image-viewing";
import PostContent from "./PostContent";
import { useNavigation } from "@react-navigation/native";
import PostDetail from "../post-detail";
import  BottomSheet  from '@gorhom/bottom-sheet';

const Post = ({ post }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [shared, setShared] = useState(false);
  const [showComment,setShowComment]=useState(false);

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    if (newLiked) {
      setReactionCount((prev) => prev + 1);
    } else {
      setReactionCount((prev) => prev - 1);
    }
  };

  const handleComment = () => {
    navigation.navigate("post-detail", { post: post });
    // setShowComment(true);
  };

  const handleShare = () => {
    setShared(!shared);
  };

  const [reactionCount, setReactionCount] = useState(post.reactionsCount ?? 0);

  return (
    <View style={styles.container}>
      <PostContent post={post} />
      <View style={styles.actions}>
        {/* React  */}
        <TouchableOpacity onPress={handleLike}>
          <FontAwesomeIcon
            name={liked ? "heart" : "heart-o"}
            size={24}
            style={liked ? { color: "red" } : styles.reactionBtnStyle}
          />
        </TouchableOpacity>
        <Text style={styles.actionCount}>{reactionCount}</Text>

        {/* Comment */}
        <TouchableOpacity onPress={handleComment} style={styles.action}>
          <Ionicon
            name="chatbubble-ellipses-outline"
            size={24}
            style={styles.reactionBtnStyle}
          />
        </TouchableOpacity>
        <Text style={styles.actionCount}>{post.commentsCount}</Text>

        {/* Share */}
        <TouchableOpacity onPress={handleShare} style={styles.action}>
          <FontAwesomeIcon
            name="share-square-o"
            size={24}
            style={styles.reactionBtnStyle}
          />
        </TouchableOpacity>
        <Text style={styles.actionCount}>{post.sharedCount}</Text>
      </View>
    </View>
  );
};

export default Post;
