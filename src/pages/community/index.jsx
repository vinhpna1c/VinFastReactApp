/** @format */

import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import { runQuery, createQuery, queryGlobalFeed } from "@amityco/ts-sdk";
import Post from "./feed/Post";
import { Avatar, Divider } from "@rneui/themed";

import styles from "./style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function CommunityScreen() {
  const [posts, setPosts] = useState([]);

  const getGlobalFeed = () => {
    const query = createQuery(queryGlobalFeed);
    runQuery(query, ({ data: postList, ...options }) => {
      if (typeof postList !== "undefined") {
        setPosts(postList);
      } else {
        setPosts([]);
      }

      // console.log(posts[0]);
      console.log("Post result:");
      // console.log(postList[0]);
    });
  };

  useEffect(() => {
    getGlobalFeed();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.headerside}>
        <View style={styles.header}>
          <Avatar
            size={40}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <View>
            <Text style={{ color: "black" }}> Nguyen Ho Duy Tri</Text>
            <Text style={{ color: "black" }}>@tringuyen</Text>
          </View>
          <View style={styles.headericon}>
            <MaterialIcons
              name="favorite-outline"
              color="black"
              style={styles.iconheader}
            />
            <MaterialIcons
              name="notifications"
              color="black"
              style={styles.iconheader}
            />
          </View>
        </View>

        <View style={styles.header_bar}>
          <TouchableOpacity style={styles.header_bar_button}>
            <Text style={styles.header_bar_text}>Bảng Tin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header_bar_button}>
            <Text style={styles.header_bar_text}>Khám Phá</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Divider width={0.5} color="black" />
      <ScrollView>
        {posts.map((post) => (
          <Post key={post["_id"] ?? Date.now().toString} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
