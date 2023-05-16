/** @format */

import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import { useState, useEffect, useContext, useCallback } from "react";
import { UserRepository, Client, FeedRepository } from "@amityco/ts-sdk";
import Post from './feed/post';
import { Avatar, Button, Divider } from "@rneui/themed";

import styles from "./style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import ReelScreen from "./reels";
import MiniReel from "./reels/MiniReel";
import AmityStore from "../../stores/amity/AmityStore";
import {
  MobXProviderContext,
  observer,
} from "mobx-react";
import RootStore from "../../stores";

import { format } from "date-fns";
import moment from "moment";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AmityPostController from "../../controller/amity/amity_post_controller";
import FeedTab from "./feed/FeedTab";
import ExploreTab from "./explore/ExploreTab";

function CommunityScreen() {
  const navigation =useNavigation();
  const { amityStore, amityFeedStore } = useContext(
    MobXProviderContext
  ) as RootStore;

  const currentUser = Client.getActiveUser();
  const [activeUserData, setActiveUserData] = useState<Amity.User | undefined>(undefined);
  const fetchUserData = async () => {
    setActiveUserData(await AmityPostController.getUserByID(currentUser.userId));
  }
  useEffect(() => {
    fetchUserData();
  }, [])


  const [currentTab, setCurrentTab] = useState("Bảng Tin");



  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // getGlobalFeed();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.headerside}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <Avatar
              size={40}
              rounded
              source={
                (activeUserData !== undefined && activeUserData.avatarCustomUrl != null) ?

                  { uri: activeUserData.avatarCustomUrl }
                  : require('../../../assets/images/user_placeholder.png')
              }
            />
            <View style={{ marginLeft: 4 }}>
              <Text style={{ color: "black", fontWeight: '600' }}>{activeUserData?.displayName ?? "User"}</Text>
              <Text style={{ color: "black" }}>@{currentUser.userId}</Text>
            </View>
          </View>

          <View style={styles.headericon}>
            <IonIcon
              name="md-chatbubbles-outline"
              color="black"
              style={styles.iconheader}
              onPress={() =>
                navigation.navigate("community", { screen: "chat" })
              }
            />
            <IonIcon
              name="notifications-outline"
              color="black"
              style={styles.iconheader}
            />
          </View>
        </View>
        <View style={styles.header_bar}>
          <TouchableOpacity
            style={styles.header_bar_button}
            onPress={() => {
              setCurrentTab("Bảng Tin");
            }}
          >
            {currentTab === "Khám phá" ? (
              <Text style={styles.header_bar_text}>Bảng tin</Text>
            ) : (
              <Text style={[styles.header_bar_text, styles.tabSelected]}>
                Bảng Tin
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.header_bar_button}
            onPress={() => {
              setCurrentTab("Khám phá");
            }}
          >
            {currentTab === "Bảng Tin" ? (
              <Text style={styles.header_bar_text}>Khám Phá</Text>
            ) : (
              <Text style={[styles.header_bar_text, styles.tabSelected]}>
                Khám Phá
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Divider width={1} color="#EBECEF" />

      {currentTab === "Bảng Tin" ? (
        <FeedTab />
      ) : (
        // Khám phá
        <ExploreTab/>
       
      )}
    </SafeAreaView>
  );
}
export default observer(CommunityScreen);
