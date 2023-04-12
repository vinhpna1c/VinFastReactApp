/** @format */

import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";
import { useState, useEffect, useContext, useCallback } from "react";
import { runQuery, createQuery, queryGlobalFeed } from "@amityco/ts-sdk";
import Post from "./feed/Post";
import { Avatar, Button, Divider } from "@rneui/themed";

import styles from "./style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import ReelScreen from "./reels";
import MiniReel from "./reels/MiniReel";
import AmityStore from "../../stores/amity/AmityStore";
import { MobXProviderContext, observer, useLocalObservable, useLocalStore } from "mobx-react";
import RootStore from "../../stores";
import { observe } from "mobx";
function CommunityScreen() {
  const { amityStore, amityFeedStore } = useContext(MobXProviderContext) as RootStore;

  const getGlobalFeed = () => {
    const query = createQuery(queryGlobalFeed);
    runQuery(query, ({ data: postList, ...options }) => {
      console.log("Query global");
      if (typeof postList !== "undefined") {
        // setPosts(postList);
        console.log("Post list length: " + postList.length);
        amityFeedStore.posts = [...postList];
      } else {
        amityFeedStore.posts = [];
      }
    });
  };


  useEffect(() => {
    getGlobalFeed();
    console.log("Refresh");
  }, []);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getGlobalFeed();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [currenTab, setCurrentTab] = useState('Bảng tin');

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
            <Text style={[styles.header_bar_text, styles.tabSelected]} >Bảng Tin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header_bar_button}>
            <Text style={styles.header_bar_text}>Khám Phá</Text>
          </TouchableOpacity>
        </View>


      </View>
      <Divider width={1} color="#EBECEF" />

      <ScrollView style={{ height: '80%', backgroundColor: '#EBECEF' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ScrollView horizontal={true} style={styles.reelContainer}>
          {amityFeedStore.posts.filter((post) => post["dataType"] === 'text' && post['data']['text'] === '##REEL##').map((p, index) => {

            return (<MiniReel key={index.toString()} post={p} />);
          })}
        </ScrollView>
        {amityFeedStore.posts.filter((p, index) => {
          if (p["dataType"] === 'text') {
            if (p['data']['text'] === '##REEL##') {
              return false;
            }
          }
          return true;
        }).map((post) => (
          <Post key={post["_id"] ?? Date.now().toString} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
export default observer(CommunityScreen);