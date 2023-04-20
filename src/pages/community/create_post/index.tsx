import { SafeAreaView } from "react-native-safe-area-context";
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import { Avatar, Button } from "react-native-elements";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef, useState } from "react";
import { MediaData, pickImages } from "../../../controller/images/image_picker";
import MiniImagePicked from "../components/MiniImagePicked";
import MiniVideoPicked from "../components/MiniVideoPicked";


function CreatePostScreen(): JSX.Element {
    const [mediaDatas, setMediaDatas] = useState<MediaData[]>([]);
    const sheetRef = useRef<BottomSheet>(null);
    const navigation = useNavigation();
    console.log(mediaDatas);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <EntypoIcon name="chevron-left" size={24} color='black' />

                </TouchableOpacity>
                <Text>Tạo bài viết</Text>
                <Text>Đăng</Text>
            </View>

            <View style={styles.userSection}>
                <Avatar source={{ uri: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Fusers%2Fsimple-user-icon&psig=AOvVaw1Uq2UC_4D_EIrUwzcVAzik&ust=1681808994946000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDWlPDIsP4CFQAAAAAdAAAAABAJ' }} />
                <Text>Trí Nguyễn</Text>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TextInput style={styles.textSection} multiline={true} placeholder="Bạn đang nghĩ gì?" />
                <View style={styles.contentSection}>
                    {mediaDatas.filter((media) => media.mime.indexOf("image") >= 0).map((media, index) => {
                        return (
                            <MiniImagePicked key={index} path={media.path} />
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
                            setMediaDatas(dataPicked);
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