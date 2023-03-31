/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// import LiveStream from '../../pages/LiveStream';
// import { Home } from "../../../App";
// import HomePage from "../../pages/HomePage";
import Login from "../../pages/auth/Login";
// import Register from "../../pages/auth/Register";
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName="Home">
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="LiveStream" component={LiveStream} /> */}
      {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
