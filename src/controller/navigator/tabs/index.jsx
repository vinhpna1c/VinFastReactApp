/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { Icon } from 'react-native-elements';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import  Icon  from 'react-native';

import  HomeScreen  from "../../../pages/home";
import ProductScreen from "../../../pages/product";
import PersonalScreen from "../../../pages/personal";
import CommunityScreen from "../../../pages/community";
import CommunityNavigation from "./CommunityNavigation";
import ProductNavigation from "./ProductNavigation";


export function BottomBarNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => <MaterialIcons name="home" size={20} />,
          }}
        />
        <Tab.Screen
          name="product"
          component={ProductNavigation}
          options={{
            tabBarLabel: "Product",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="shopping-cart" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="community"
          component={CommunityNavigation}
          options={{
            tabBarLabel: "Community",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="groups" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="personal"
          component={PersonalScreen}
          options={{
            tabBarLabel: "Personal",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person-outline" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    

  );
}
