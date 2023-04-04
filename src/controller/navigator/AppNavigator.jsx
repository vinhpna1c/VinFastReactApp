/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// import LiveStream from '../../pages/LiveStream';
// import { Home } from "../../../App";
// import HomePage from "../../pages/HomePage";
import Login from "../../pages/auth";
import ReelScreen from '../../pages/community/reels';
import { BottomBarNavigation } from "./BottomBarNavigation";
// import Register from "../../pages/auth/Register";
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signned" component={BottomBarNavigation} />
      <Stack.Screen name="reels" component={ReelScreen} />

    </Stack.Navigator>
  );
}

export default AppNavigator;
