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
import { useEffect, useState } from "react";
import { createComment, getComments, liveComments } from "@amityco/ts-sdk";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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

    createComment(newComment);
  };
  const disposers: Amity.Unsubscriber[] = [];
  const [commentData, setCommentData] =
    useState<Amity.LiveCollection<Amity.Comment>>();

  useEffect(() => {
    getComments(post.comments).then((respond) => {
      setComments(respond.data);
    });
  }, [post.postId]);
  console.info(post.comments);
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
  console.debug(
    "Current comment in post " + post.postId + ": " + commentData?.data
  );
  return (
    <View style={styles.container}>
      <Post post={post} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {comments.map((comment, index) => (
          <Text key={index}>{JSON.stringify(comment.commentId)}</Text>
        ))}
      </ScrollView>
      <View style={styles.commentSection}>
        <TextInput
          placeholder="what think?"
          onChangeText={(value) => (myComment = value)}
        ></TextInput>

        <TouchableOpacity onPress={sendComment}>
          <MaterialIcons name="send" size={20}></MaterialIcons>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default PostDetail;
