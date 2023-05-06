import { RouteProp, useNavigation } from "@react-navigation/native";
import { View,Text } from "react-native";
import PostContent from "../post/PostContent";
import Post from "../post";
import { useEffect, useState } from "react";
import { getComments, liveComments } from "@amityco/ts-sdk";
type PostDetailProps = {
  post: Amity.Post;
};
type PostDetailRouteProps = RouteProp<PostDetailProps, "post-detail">;
function PostDetail({ route }: { route: PostDetailRouteProps }): JSX.Element {
  const navigation = useNavigation();
  const { post } = route.params as PostDetailProps;
  //handle comments
  const [commentData, setCommentData] =
    useState<Amity.LiveCollection<Amity.Comment>>();
  const {
    data: comments = [],
    onNextPage,
    hasNextPage,
    loading,
    error,
  } = commentData ?? {};
  useEffect(
    () =>
      liveComments(
        { referenceId: post.postId, referenceType: "post" },
        setCommentData
      ),
    [post.postId]
  );
  
  return (
    <View>
      <Post post={post} />
      {comments.map((comment,index)=><Text key={index}>{JSON.stringify(comment)}</Text>)}
    </View>
  );
}
export default PostDetail;
