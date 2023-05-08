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
import { getActiveClient, getUser } from "@amityco/ts-sdk";
import AmityPostController from "../../../controller/amity/amity_post_controller";

const AVATAR_SIZE = 24;
function CreatePostScreen(): JSX.Element {
    const [mediaDatas, setMediaDatas] = useState<MediaData[]>([]);

    const sheetRef = useRef<BottomSheet>(null);
    const navigation = useNavigation();
    const activeClient = getActiveClient();
    const [currentUser, setUser] = useState<Amity.User | undefined>(undefined);
    let postText='';
    useEffect(() => {
        getUser(activeClient.userId ?? "").then((user) => {
            setUser(user.data);
        });
    }, [])
    console.log(mediaDatas);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <EntypoIcon name="chevron-left" size={24} color='black' />

                </TouchableOpacity>
                <Text>Tạo bài viết</Text>
                <TouchableOpacity onPress={()=>{
                    console.info({
                            textData:postText,
                            targetType:'user',
                        });
                    AmityPostController.createPost({
                        textData:postText,
                        targetType:'user',
                    }).then((post)=>{
                        console.info("Success create post with id: "+post?.postId);
                    });
                }}>
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
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TextInput style={styles.textSection} multiline={true} placeholder="Bạn đang nghĩ gì?" onChangeText={(value)=>postText=value} />
                <View style={styles.contentSection}>
                    {mediaDatas.filter((media) => media.mime.indexOf("image") >= 0).map((media, index) => {

                        return (
                            <View>
                                <IonIcon name="close-circle" />
                                <MiniImagePicked key={index} path={media.path} />
                            </View>

                        )
                    }
                    )}
                    {mediaDatas.filter((media) => media.mime.indexOf("video") >= 0).map((media, index) => {
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
                            const dataPicked = await pickImages();
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