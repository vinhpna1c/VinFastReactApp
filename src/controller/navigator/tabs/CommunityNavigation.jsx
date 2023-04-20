import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunityScreen from "../../../pages/community";
import ReelScreen from "../../../pages/community/reels";
import CreatePostScreen from "../../../pages/community/create_post";
import ChatScreen from "../../../pages/community/chats";

function CommunityNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="feed" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="feed" component={CommunityScreen} />
            <Stack.Screen name="reel" component={ReelScreen} />
            <Stack.Screen name="create-post" component={CreatePostScreen} />
            <Stack.Screen name="chat" component={ChatScreen} />
        </Stack.Navigator>
    );
}
export default CommunityNavigation;