/**
 * @format
 */

import { API_REGIONS, createClient, enableCache } from '@amityco/ts-sdk';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './src/controllers/navigator/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

async function setUpAmity()
{
   const REGION='sg';
   const API_KEY='b0efeb5869dba13145378a1a040d16888400d8e1b23c3c2a';
    // require('dotenv').config();
  

    console.log("Api-key: "+API_KEY)

const client =await createClient(API_KEY, REGION);
console.log(client);
enableCache();
}

setUpAmity();
AppRegistry.registerComponent(appName, () =>App);
