import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import LiveStream from "../../pages/LiveStream";
import { Home } from "../../../App";
const Stack=createNativeStackNavigator();

function AppNavigator()
{return (
<Stack.Navigator screenOptions={{}} initialRouteName="Home">
    <Stack.Screen name="Home"  component={Home}/>
    <Stack.Screen name="LiveStream"  component={LiveStream}/>
</Stack.Navigator>);
}

export default AppNavigator;