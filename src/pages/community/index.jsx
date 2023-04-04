/** @format */

import { SafeAreaView, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";
import AmityPostController from "../../controller/amity/amity_post_controller";
import AmityFeedStore from "../../store/feed/AmityFeedStore";
import { runQuery, createQuery, queryGlobalFeed } from "@amityco/ts-sdk";
import styles from "./style";
import { Avatar } from "@rneui/themed";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


function CommunityScreen() {
  const [posts, setPosts] = useState([]);

  const getGlobalFeed = () => {
    const query = createQuery(queryGlobalFeed);
    runQuery(query, ({ data: postList, ...options }) => {
      setPosts(postList);
      console.log(posts[0]);
    });
  };

  useEffect(() => {
    getGlobalFeed();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* {posts.map(e => (<Text>
                    {e['_id']}
                </Text>))} */}
      </ScrollView>
    </SafeAreaView>
  );
}
export default CommunityScreen;
