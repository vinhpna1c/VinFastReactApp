import { SafeAreaView } from "react-native-safe-area-context";
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import { Avatar, Button } from "react-native-elements";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useEffect, useRef, useState } from "react";
import { MediaData, pickImages } from "../../../controller/images/image_picker";
import MiniImagePicked from "../components/MiniImagePicked";
import MiniVideoPicked from "../components/MiniVideoPicked";
import { Client, FileRepository, UserRepository, createQuery, runQuery } from "@amityco/ts-sdk";
import AmityPostController from "../../../controller/amity/amity_post_controller";
import DropDownPicker from "react-native-dropdown-picker";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { uriToBlob } from "../../../utils/utils";

const sendTestImage=async()=>{
    const filePath="file:///data/user/0/com.innovation.vinfast.demo/cache/react-native-image-crop-picker/IMG_20230127_170553.jpg";
    console.log("file path "+filePath)
    const blob=await uriToBlob(filePath);
    console.info("Blob name: "+blob.name);
    const data=new FormData();

    console.info("Set up here");
    
    const file=new File([blob],"FB_IMG_1675552673416.jpg",{type:blob.type});
    data.append("files",file);
    console.info("Data: "+JSON.stringify(data));
    try{
        FileRepository.createImage(data).then((response)=>{
            console.info("Respond: "+JSON.stringify(response))
        })
    }
    catch (e)
    {
            console.info("Error create image")
            console.error(e);
    }
  
    // const query=createQuery(FileRepository.createImage,data,);
    // runQuery(query,(response)=>{
    //     console.info("Respond: "+JSON.stringify(response))
     
    // })
}

const AVATAR_SIZE = 24;
function CreatePostScreen(): JSX.Element {
    const [mediaDatas, setMediaDatas] = useState<MediaData[]>([]);

    //handle dropdown
    // const [open, setOpen] = useState(false);

    // const [targetOption, setTargetOption] = useState([
    //     { label: 'Private', value: 'apple', icon:(()=><MaterialIcon name="public"/>)},
    //     { label: 'Public', value: 'banana', icon:(()=><MaterialIcon name="lock"/>) }

    // ]);
    // const [postTarget, setPostTarget] = useState(targetOption[1]);
    const sheetRef = useRef<BottomSheet>(null);
    const navigation = useNavigation();
    const activeClient = Client.getActiveClient();
    const [currentUser, setUser] = useState<Amity.User | undefined>(undefined);
    let postText = '';
    useEffect(() => {
        UserRepository.getUserByIds([activeClient.userId ?? ""]).then((user) => {
            setUser(user?.data[0]);
        });
    }, [])

    const createNewPost = () => {
        //check data send to amity
        const images = mediaDatas.filter((media) => media.mime.indexOf('image') >= 0).map((image => image.path));
        const videos = mediaDatas.filter((media) => media.mime.indexOf('video') >= 0).map((video => video.path));

        const newPostData = {
            textData: postText,
            targetType: 'user',
            images: images,
            // videos:videos,
        };
        console.info(newPostData);

        //send data to amity

        AmityPostController.createPost(newPostData).then((post) => {
            // console.info("Success create post with id: " + post?.postId);
        });
        //back to other screen
        // navigation.goBack();
    }
    console.log(mediaDatas);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <EntypoIcon name="chevron-left" size={24} color='black' />

                </TouchableOpacity>
                <Text>Tạo bài viết</Text>
                <TouchableOpacity onPress={()=>{createNewPost}}>
                    <Text>Đăng</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.userSection}>
                {currentUser != undefined ?
                    (currentUser.avatarCustomUrl == null ? (<Avatar rounded title={currentUser.displayName![0]} size={AVATAR_SIZE} />)
                        : (<Avatar rounded source={{ uri: currentUser.avatarCustomUrl }} size={AVATAR_SIZE} titleStyle={{ color: 'white' }} />))
                    : (<Avatar rounded size={AVATAR_SIZE} titleStyle={{ color: 'white' }} />)}
                <Text>{currentUser != undefined && currentUser.displayName}</Text>
            </View>
            <Button title={"Send test image"} onPress={async()=>{
                console.info("CALL TEST FUNCTION")
                await sendTestImage()
                console.info("Done calll test function")
                }}/>
            <View>
                {/* <DropDownPicker
                placeholder="Option"
                
                    open={open}
                    value={postTarget}
                    items={targetOption}
                    setOpen={setOpen}
                    setValue={setPostTarget}
                    setItems={setTargetOption}
                    style={{
                        borderRadius: 0,
                        borderColor: '#9e9e9e',
                        width: 150,
                        height: 40,
                    }}
                    dropDownContainerStyle={{
                        width: 150
                    }}
                /> */}
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TextInput style={styles.textSection} multiline={true} placeholder="Bạn đang nghĩ gì?" onChangeText={(value) => postText = value} />
                <View style={styles.contentSection}>
                    {mediaDatas.filter((media) => media.mime.indexOf("image") >= 0).map((media, index) => {

                        return (
                            <View key={index}>
                                <IonIcon name="close-circle" />
                                <MiniImagePicked key={index} path={media.path} />
                            </View>

                        )
                    }
                    )}
                    {mediaDatas.filter((media) => media.mime.indexOf("video") >= 0).map((media, index) => {
                        c
                        return (
                            <MiniVideoPicked key={index} path={media.path} />
                        )
                    }
                    )}
                </View>
                <View style={{ height: 200 }} />
            </ScrollView>

            <View>
                <Text>Bottom</Text>
                <Text>Create Post</Text>

            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[200]}
                style={styles.bottomSection}
            >
                <BottomSheetView>
                    <BottomOption title="Thêm hình ảnh/ video"
                        onTap={async () => {
                            const dataPicked = await pickImages({ mediaType: 'any' });
                            console.log(dataPicked);
                            setMediaDatas([...mediaDatas, ...dataPicked]);
                        }}
                    />
                    <BottomOption title="Video trực tiếp" />
                    <BottomOption title="Gắn thông tin xe" />
                </BottomSheetView>
            </BottomSheet>
        </SafeAreaView>
    )
}


type BottomOptionProps = {
    title?: string,
    onTap?: ((event: GestureResponderEvent) => void),
}
function BottomOption(props: BottomOptionProps): JSX.Element {
    return (
        <TouchableOpacity onPress={props.onTap} style={styles.bottomOptionItem}>
            <Text>{props.title ?? ""}</Text>
        </TouchableOpacity>
    )
}


export default CreatePostScreen;