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
import { createComment, getComments, liveComments } from "@amityco/ts-sdk";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CommentComponent from "./CommentComponent";
import Divider from "../../../product/components/Divider";
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

    createComment(newComment);
  };
  const addCommentRef = useRef<TextInput>(null);
  const disposers: Amity.Unsubscriber[] = [];
  const [commentData, setCommentData] =
    useState<Amity.LiveCollection<Amity.Comment>>();

  useEffect(() => {
    getComments(post.comments).then((respond) => {
      setComments(respond.data);
    });
  }, [post.postId]);
  
  useEffect(() => {
    const commentUnscriber = liveComments(
      { referenceId: post.postId, referenceType: "post" },
      (response) => {
        console.info("dATA GET " + post.postId + ": " + response.data.length);
        setComments(response.data);
      }
    );

    return () => {
      disposers.push(commentUnscriber);
    };
  }, [post.postId]);
 
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Post post={post}  showBackBtn={true}/>
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
