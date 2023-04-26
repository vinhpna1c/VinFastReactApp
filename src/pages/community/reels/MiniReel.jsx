/** @format */

import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Video from "react-native-video";
import AmityPostController from "../../../controller/amity/amity_post_controller";
import { useNavigation } from "@react-navigation/native";
import { MobXProviderContext } from "mobx-react";
import RootStore from "../../../stores";
import { getPost, getUser } from "@amityco/ts-sdk";

function MiniReel({ post }) {
  const navigation = useNavigation();

  const [reelData, setReelData] = useState({});
  const { amityFeedStore } = useContext(MobXProviderContext);
  // console.log(amityFeedStore.reels);
  // console.log(post['postedUserId'])

  // console.log("Post "+post);
  useEffect(() => {
    const children = post["children"] ?? [];
    const handleData = async () => {
      if (children.length > 0) {
        const user = (await getUser("99")).data;

        for (let i = 0; i < children.length; i++) {
          const childPostID = children[i];
          console.log("Child: " + childPostID);

          const post = await AmityPostController.getDataFromPost(childPostID);
          console.log(post);
          if (i == 0) {
            setReelData(post);
          }
          amityFeedStore.addReel({
            id: post.id,
            createdAt: post.createdAt,
            uri: post.fileUrl,
            postedUserId: post.postedUserId,
            dataType: post.dataType,
            displayName: post.postedUserId,
            avatarUrl: user.avatarCustomUrl,
            metaData: post.fileMetaData,
          });
        }
      }
    };
    handleData();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("community", { screen: "reel" })}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {reelData.dataType === "image" && (
            <Image
              source={{ uri: reelData.fileUrl }}
              key={reelData.fileUrl}
              style={{ height: "98%", width: "98%" }}
            />
          )}
          {reelData.dataType === "video" && (
            <Video
              key={reelData.fileUrl}
              source={{ uri: reelData.fileUrl }}
              paused={true}
              style={{ height: "98%", width: "98%" }}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.textStyle} numberOfLines={1} ellipsizeMode="tail">
            {post["postedUserId"] ?? ""}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 80,
    height: 125,
    position: "relative",
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 8,
    // backgroundColor:'red',
    marginRight: 16,
  },
  image: {},
  topContainer: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // backgroundColor:"red",
  },
  bottomContainer: {
    height: 45,
    borderTopColor: "#cccccc",
    borderTopWidth: 0.5,

    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    padding: 8,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default MiniReel;
