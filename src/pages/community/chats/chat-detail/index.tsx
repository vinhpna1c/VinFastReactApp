import { View,Text } from "react-native";

type ChatDetailProps={
    channelID:string
}

function ChatDetailScreen(props:ChatDetailProps):JSX.Element
{
    return (
        <View>
            <Text>Chat detail</Text>
        </View>
    )
}