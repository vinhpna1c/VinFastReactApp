import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunityScreen from "../../../pages/community";
import ReelScreen from "../../../pages/community/reels";

 function CommunityNavigation()
{
    const Stack=createNativeStackNavigator();
   return <Stack.Navigator initialRouteName="feed" screenOptions={{headerShown:false}}>
        <Stack.Screen name="feed" component={CommunityScreen}/>
        <Stack.Screen name="reel" component={ReelScreen}/>

    </Stack.Navigator>
}
export default CommunityNavigation;