import MiniDataProps from "./MiniDataProps";
import styles from "../create_post/styles";
import { Image } from "react-native-elements";
import { Dimensions, View } from "react-native";


function MiniImagePicked(props: MiniDataProps): JSX.Element {
    const { width, height } = Dimensions.get('window');
    const columns=props.columns??2;
    const IMAGE_SIZE = (width - 32 - 4) / columns;
    return (
        <Image source={{ uri: props.path }} style={{ ...styles.miniImagePicked, height: IMAGE_SIZE, width: IMAGE_SIZE, marginBottom: 4, marginRight:4 }} />
    );
}

export default MiniImagePicked