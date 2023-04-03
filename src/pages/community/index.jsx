import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useState,useEffect}from 'react'
import AmityPostController from '../../controller/amity/amity_post_controller';
import AmityFeedStore from '../../store/feed/AmityFeedStore';
export default function CommunityScreen(){
    useEffect(()=>{
        const controller=new AmityPostController();
        controller.queryGlobalFeed();
    });
 const store=new AmityFeedStore();
 console.log("Load frome community");
 console.log(store.posts);
    return(
   <SafeAreaView>
    <ScrollView>
        {store.posts.map(e=>(<Text>
            e
        </Text>))}
    </ScrollView>
   </SafeAreaView>
    );
}