import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "../style";
import { Avatar, Image } from "@rneui/themed";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import AmityPostController from "../../../../controller/amity/amity_post_controller";
import { getFile } from "@amityco/ts-sdk";
import { getTimeDiffString } from "../../../../utils/utils";

type PostContentProps = {
  post: Amity.Post;
};
function PostContent(props: PostContentProps): JSX.Element {
  const { post } = props;

  const [images, setImages] = useState<string[]>([]);

  const [showImage, setShowImage] = useState(false);

  const toggleDisplay = () => {
    setShowImage((prev) => !prev);
  };
  
  useEffect(() => {
    const subPosts = post["children"] ?? [];
    const getImageLinks = async () => {
      var links = [];

      for (let i = 0; i < subPosts.length; i++) {
        const p = await AmityPostController.getPostById(subPosts[i]);
        //handle types of post here

        if (p.dataType === "image") {
          const url = (await getFile((p.data as Amity.ContentDataFile)?.fileId))
            .data.fileUrl;
          //add large for render
          links.push(url + "?size=large");
        } else if (p.dataType === "video") {
          // console.log(p);
          const videoFile = await getFile(
            (p.data as Amity.ContentDataVideo)?.videoFileId?.original ?? ""
          );
          // console.log(videoFile.data.fileUrl);
        }
      }
      return links;
    };
    getImageLinks().then((value) => setImages(value));
  }, []);

  const timeDiff = getTimeDiffString(post["createdAt"] ?? "");
  const {width}=Dimensions.get('screen');
  console.log(width);
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <Avatar
            size={48}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <View style={styles.headerText}>
            <Text style={styles.username}>{post.postedUserId}</Text>
            <Text style={styles.timestamp}>{timeDiff}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={{ marginLeft: 110 }}>
            <MaterialIcons name="more-horiz" size={20}></MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.content}>
        {(post.data as Amity.ContentDataText).text}
      </Text>
      <View style={styles.mediaContainer}>
        {images.map((image, index) => /* console.log(image);*/ {
            console.debug(image)
          return (
            <Image
              key={image}
              source={ {uri: image }}
              style={

                [
                    index === 0 ? styles.topImageContent : styles.otherImageContent,
                {
                    width: index === 0?width-32:(width-40)/(images.length-1)
                }]
              }
            />
          );
        })}
      </View>
    </>
  );
}

export default PostContent;
