import { TouchableOpacity, Text } from "react-native";
import styles from "../style";
import { Image } from "react-native-elements";
import { channel } from "expo-updates";

type CommunityItemProps = {
    community: Amity.Community,
}

function CommunityItem(props: CommunityItemProps): JSX.Element {
    const { community } = props;
    return (
        <TouchableOpacity

            style={styles.myCommunity_card_item}
            onPress={() => { }}
        >
            <Image
                style={styles.myCommunity_circle}
                source={{
                    uri: `${community.channelId}`,
                }}
            ></Image>
            <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.myCommunity_card_item}
            >
                {community.displayName}
            </Text>
        </TouchableOpacity>
    )
}
export default CommunityItem;
