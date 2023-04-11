/** @format */

import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect, useContext } from "react";
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
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const {amityStore,amityFeedStore}=useContext(MobXProviderContext)as RootStore ;
  console.log("Amity store in comuunity");
  console.log(amityStore);

    
  const getGlobalFeed = () => {
    const query = createQuery(queryGlobalFeed);
    runQuery(query, ({ data: postList, ...options }) => {
      if (typeof postList !== "undefined") {
        // setPosts(postList);
        amityFeedStore.posts=[...postList];
      } else {
        amityFeedStore.posts=[];
      }

      // console.log(posts[0]);
      // console.log("Post result:");
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
      <Divider width={1} color="#EBECEF" />
     
      <ScrollView style={{ height: '80%' ,backgroundColor:'#EBECEF'}}>
      <ScrollView horizontal={true}  style={styles.reelContainer}>
          {amityFeedStore.posts.filter((post) => post["dataType"] === 'text' && post['data']['text'] === '##REEL##').map((p,index) => {
            
          return (<MiniReel key={index.toString()}  post={p} />);
          })}
        </ScrollView>
        {amityFeedStore.posts.filter((p,index)=>{
          if(p["dataType"] === 'text')
          {            
            if(p['data']['text'] === '##REEL##'){
              return false;
            }
          }
          return true;}).map((post) => (
          <Post  key={post["_id"] ?? Date.now().toString} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
export default observer(CommunityScreen);