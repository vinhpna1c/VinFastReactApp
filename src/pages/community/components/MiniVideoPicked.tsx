import { Dimensions, View } from "react-native"
import MiniDataProps from "./MiniDataProps"
import Video from "react-native-video"

function MiniVideoPicked(props: MiniDataProps): JSX.Element {
    const { width, height } = Dimensions.get('window');
    return (
        <Video
            source={{ uri: props.path }}
            paused={false}
            style={{
                width: '100%',
                height: width / 2
            }}
            resizeMode="contain"
        />
    )
}

export default MiniVideoPicked