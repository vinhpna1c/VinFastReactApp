/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext } from "react";
import 'core-js/features/object/from-entries';
import { Provider,inject,observer } from 'mobx-react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import {
  NavigationAction,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";

import AppNavigator from "./src/controller/navigator/AppNavigator";
import { API_REGIONS, createClient, enableCache } from '@amityco/ts-sdk';
import AmityStore from "./src/stores/amity/AmityStore";
import RootStore from "./src/stores";
import { observe } from "mobx";


export function initAmity() {

  const apiKey = 'b0e8e90b6edfa56018638c490300428a820cdde1ba363c7e';

  const client = createClient(apiKey, API_REGIONS.SG);


  enableCache();
  return client;
}

function Section({ children, title }) {

  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

function App() {
  
  const rootStore=new RootStore();
  
  
    
  return (  
<Provider {...rootStore}>


      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </Provider>   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default observer(App);
