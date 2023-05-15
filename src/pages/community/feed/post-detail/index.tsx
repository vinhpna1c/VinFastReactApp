import { RouteProp, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PostContent from "../post/PostContent";
import Post from "../post";
import { useEffect, useRef, useState } from "react";
import { CommentRepository, PostRepository, SubscriptionLevels, getCommunityTopic, getPostTopic, getUserTopic, subscribeTopic } from "@amityco/ts-sdk";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CommentComponent from "./CommentComponent";
import Divider from "../../../product/components/Divider";
import disposers from "../../../../controller/amity/amity_subscribe_controller";
type PostDetailProps = {
  post: Amity.Post;
};
type PostDetailRouteProps = RouteProp<PostDetailProps, "post-detail">;
function PostDetail({ route }: { route: PostDetailRouteProps }): JSX.Element {
  const navigation = useNavigation();
  const { post } = route.params as PostDetailProps;
  //handle comments
  let myComment = "";
  const [comments, setComments] = useState<Amity.Comment[]>([]);
  const sendComment = () => {
    myComment = myComment.trim();

    const newComment = {
      data: {
        text: myComment,
      },
      referenceId: post.postId,
      referenceType: "post" as Amity.CommentReferenceType,
    };
    addCommentRef.current?.clear();
    addCommentRef.current?.blur();

    CommentRepository.createComment(newComment);
  };
  const addCommentRef = useRef<TextInput>(null);
  
  const [commentData, setCommentData] =
    useState<Amity.LiveCollection<Amity.Comment>>();

  const textOnlyParam: Amity.CommentLiveCollection = {
    referenceType: 'post',
    referenceId: post.postId,
    dataTypes: {
      values: ['text'],
      matchType: 'exact',
    },
    
  };
  
  


  useEffect(() => {
    const postUnSubscribe=subscribeTopic(getPostTopic(post));
    disposers.push(postUnSubscribe);
    const unsubscribe = CommentRepository.getComments(
      textOnlyParam,
      ({ data, onNextPage, hasNextPage, loading, error }) => {
        console.info("Comment get: "+data.length)
        console.info("Has next page: "+hasNextPage)
        if(hasNextPage){
          onNextPage()
        }
        setComments(data);       

      },
    );
    return ()=>{
      console.info("Unscribe topic call");
      postUnSubscribe();
      unsubscribe();
    }
  }, [])



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Post post={post} showBackBtn={true} />
        <View style={{ height: 5, backgroundColor: '#EBECEF' }}></View>
        {comments.map((comment, index) => (
          <CommentComponent key={index} comment={comment} />
        ))}
        <View style={{ height: 50 }} />

      </ScrollView>
      <View style={styles.commentSection}>
        <View style={styles.addComment}>
          <TextInput
            ref={addCommentRef}
            placeholder="what think?"
            onChangeText={(value) => (myComment = value)}
          /
          >
        </View>


        <TouchableOpacity onPress={sendComment}>
          <MaterialIcons name="send" size={20}></MaterialIcons>
        </TouchableOpacity>
      </View>

    </View>
  );
}
export default PostDetail;
