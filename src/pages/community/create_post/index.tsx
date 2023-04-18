import { SafeAreaView } from "react-native-safe-area-context";
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import { Avatar, Button } from "react-native-elements";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef } from "react";
import { pickImages } from "../../../controller/images/image_picker";




function CreatePostScreen(): JSX.Element {
    const sheetRef = useRef<BottomSheet>(null);
    const navigation = useNavigation();
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

                </View>
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
                        onTap={()=>pickImages()}
                        />
                       <BottomOption title="Video trực tiếp"/>
                       <BottomOption title="Gắn thông tin xe"/>
                    </BottomSheetView>
                </BottomSheet>
        </SafeAreaView>
    )
}


type BottomOptionProps={
    title?:string,
    onTap?:((event: GestureResponderEvent) => void),
}
function BottomOption(props:BottomOptionProps):JSX.Element
{
    return (
        <TouchableOpacity onPress={props.onTap} style={styles.bottomOptionItem}>
            <Text>{props.title??""}</Text>
        </TouchableOpacity>
    )
}


export default CreatePostScreen;