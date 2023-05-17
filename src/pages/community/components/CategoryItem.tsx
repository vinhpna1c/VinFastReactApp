import { StyleProp, View, ViewStyle, Text, TouchableOpacity, ImageBackground } from "react-native"
import styles from "../style"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useEffect, useState } from "react";
import { getUrlFromFileId } from "../../../utils/utils";

type CategoryItemProps = {
    styles?: StyleProp<ViewStyle>,
    category:Amity.Category,
}

function CategoryItem(props: CategoryItemProps): JSX.Element {
    console.log(props.category);
    const {category}=props;
    const [imageUrl,setImageUrl]=useState("");
    useEffect(()=>{
        getUrlFromFileId(category.avatarFileId??"").then((value)=>{
            setImageUrl(value);
        })
    },[])
    return (

        <TouchableOpacity style={[
            props.styles,
            styles.categoryItem,
        ]
        }
        >
            <ImageBackground source={{
                uri:imageUrl,
            }}
                style={styles.category_image_backgroud}
            >
                <Text style={styles.category_image_title}>{category.name}</Text>
            </ImageBackground>
        </TouchableOpacity>


    )
}

export default CategoryItem;