import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "../style";
import { Avatar, Image } from "@rneui/themed";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import AmityPostController from "../../../../controller/amity/amity_post_controller";

import { getTimeDiffString } from "../../../../utils/utils";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { FileRepository } from "@amityco/ts-sdk";
type PostContentProps = {
  post: Amity.Post,
  showBackBtn?:boolean,

};
function PostContent(props: PostContentProps): JSX.Element {
  const { post } = props;
  const showBackBtn=props.showBackBtn??false;

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
          const url = (await FileRepository.getFile((p.data as Amity.ContentDataFile)?.fileId))
            .data.fileUrl;
          //add large for render
          links.push(url + "?size=large");
        } else if (p.dataType === "video") {
          // console.log(p);
          const videoFile = await FileRepository.getFile(
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
  const navigation=useNavigation();
  console.log(width);
  return (
    <>
    <View>
      {showBackBtn&& <IonIcon name="chevron-back" size={24} color='black' onPress={()=>navigation.goBack()} style={{marginBottom:8}}/>}
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
      </View>
    </>
  );
}

export default PostContent;
