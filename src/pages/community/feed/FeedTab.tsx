import { MobXProviderContext } from "mobx-react";
import { RefreshControl, ScrollView } from "react-native";
import RootStore from "../../../stores";
import { useCallback, useContext, useEffect, useState } from "react";
import { FeedRepository } from "@amityco/ts-sdk";
import MiniReel from "../reels/MiniReel";
import FloatingButton from "../components/FloatingButton";
import AmityPostController from "../../../controller/amity/amity_post_controller";
import { useNavigation } from "@react-navigation/native";
import Post from "./post";
import styles from "../style";

function FeedTab():JSX.Element
{
    const navigation = useNavigation();
    const { amityStore, amityFeedStore } = useContext(
        MobXProviderContext
      ) as RootStore;

      const getGlobalFeed =async () => {
        const {data:posts}=await FeedRepository.queryGlobalFeed();
        console.debug("Post get: "+posts.length)
        amityFeedStore.posts=[...posts];
      
      };

      const [refreshing, setRefreshing] = useState(false);
      const onRefresh = useCallback(() => {
        setRefreshing(true);
        getGlobalFeed();
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

 
      useEffect(() => {
        // fetchUserData();
        getGlobalFeed();
        
      }, []);
    return (
        <>
        <ScrollView
          style={{ height: "80%", backgroundColor: "#EBECEF" }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <ScrollView horizontal={true} style={styles.reelContainer}>
            {amityFeedStore.posts
              .filter(
                (post) =>
                  post["dataType"] === "text" &&
                  ((post["data"] as Amity.ContentDataText)["text"] )=== "##REEL##"
              )
              .map((p, index) => {
                return <MiniReel key={index.toString()} post={p} />;
              })}
          </ScrollView>
          {amityFeedStore.posts
            .filter((p, index) => {
              if (p["dataType"] === "text") {
                if (((p["data"] as Amity.ContentDataText)["text"] ) === "##REEL##") {
                  return false;
                }
              }
              return true;
            })
            .map((post,index) => (
                <Post key={index}  post={post} />             
            ))}
        </ScrollView>
        <FloatingButton onTap={()=>navigation.navigate('community',{screen:'create-post'})}/>
        </>
    )
}

export default FeedTab;