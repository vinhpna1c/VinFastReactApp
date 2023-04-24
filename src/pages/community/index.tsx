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
import { runQuery, createQuery, queryGlobalFeed } from "@amityco/ts-sdk";
import Post from "./feed/Post";
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
  useLocalObservable,
  useLocalStore,
} from "mobx-react";
import RootStore from "../../stores";
import { FAB, IconButton } from "@react-native-material/core";
import FloatingButton from "./components/FloatingButton";
import { set } from "react-native-reanimated";
import { Icon } from "react-native-elements";
import { format } from "date-fns";
import moment from "moment";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function CommunityScreen() {
  const { amityStore, amityFeedStore } = useContext(
    MobXProviderContext
  ) as RootStore;
  const navigation = useNavigation();
  const getGlobalFeed = () => {
    const query = createQuery(queryGlobalFeed);
    runQuery(query, ({ data: postList, ...options }) => {
      console.log("Query global");
      if (typeof postList !== "undefined") {
        // setPosts(postList);
        console.log("Post list length: " + postList.length);
        amityFeedStore.posts = [...postList];
      } else {
        amityFeedStore.posts = [];
      }
    });
  };

  useEffect(() => {
    getGlobalFeed();
    console.log("Refresh");
  }, []);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getGlobalFeed();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [currenTab, setCurrentTab] = useState("Bảng Tin");
  const DATA1 = [
    {
      id: "1",
      title: "Ngân Hàng",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "2",
      title: "Vận Tải",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },

    {
      id: "3",
      title: "Tiêu dùng",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "4",
      title: "Năng lượng",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "5",
      title: "Cổ Phiếu",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "6",
      title: "May Mặc",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "7",
      title: "Làm đẹp",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
  ];
  const DATA2 = [
    {
      id: "1",
      title: "Xe điện VinFast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,
      location: "HN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "2",
      title: "xe điện VinFast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,
      location: "HCM",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "3",
      title: "xe điện VinFast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "3",
      title: "xe điện VinFast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "3",
      title: "xe điện VinFast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "3",
      title: "xe điện VinFast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "3",
      title: "xe điện VinFast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "3",
      title: "xe điện VinFast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.headerside}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <Avatar
              size={40}
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <View>
              <Text style={{ color: "black" }}> Nguyen Ho Duy Tri</Text>
              <Text style={{ color: "black" }}>@tringuyen</Text>
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
            {currenTab === "Khám phá" ? (
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
            {currenTab === "Bảng Tin" ? (
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

      {currenTab === "Bảng Tin" ? (
        <ScrollView
          style={{ height: "80%", backgroundColor: "#EBECEF" }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <ScrollView horizontal={true} style={styles.reelContainer}>
            {amityFeedStore.posts
              .filter(
                (post) =>
                  post["dataType"] === "text" &&
                  post["data"]["text"] === "##REEL##"
              )
              .map((p, index) => {
                return <MiniReel key={index.toString()} post={p} />;
              })}
          </ScrollView>
          {amityFeedStore.posts
            .filter((p, index) => {
              if (p["dataType"] === "text") {
                if (p["data"]["text"] === "##REEL##") {
                  return false;
                }
              }
              return true;
            })
            .map((post) => (
              <Post key={post["_id"] ?? Date.now().toString} post={post} />
            ))}
        </ScrollView>
      ) : (
        // Khám phá
        <ScrollView
          style={{ height: "80%", backgroundColor: "#F5F5F5" }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* Banner */}
          <View style={styles.banner_discover}>
            <Image
              style={styles.image_banner}
              source={{
                uri: "https://vinfast.vn/wp-content/uploads/2022/09/vinfast-home.png",
              }}
            ></Image>
          </View>

          {/* Cộng đồng của tôi */}

          <View style={styles.myCommunity}>
            <View style={styles.myCommunity_top}>
              <Text style={styles.myCommunity_title}>Cộng đồng của tôi</Text>

              <MaterialIcons
                name="keyboard-arrow-right"
                style={{ marginRight: 15, fontSize: 24, fontWeight: "900" }}
              ></MaterialIcons>
            </View>
            <View style={styles.myCommunity_bottom}>
              <FlatList
                style={{ margin: 10 }}
                data={DATA1}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      marginRight: 10,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                    onPress={() => {}}
                  >
                    <Image
                      style={{ height: 60, width: 60, borderRadius: 100 }}
                      source={{
                        uri: `${item.img}`,
                      }}
                    ></Image>
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                horizontal
              ></FlatList>
            </View>
          </View>

          {/* Sự kiện */}
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.myCommunity_title}>Sự Kiện</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={{ marginRight: 10, fontSize: 24, fontWeight: "900" }}
              ></MaterialIcons>
            </View>
            <View>
              <FlatList
                style={{
                  margin: 10,
                }}
                data={DATA2}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      height: 148,
                      width: 192,
                      marginRight: 10,
                      backgroundColor: "#E7B0B04D",
                      borderRadius: 10,
                      marginBottom: 20,
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                    onPress={() => {}}
                  >
                    <View>
                      <Image
                        style={{
                          height: 95,
                          width: "100%",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                        source={{
                          uri: `${item.img}`,
                        }}
                      ></Image>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "600",
                          marginLeft: 10,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="calendar-month"
                          style={{ color: "blue", fontSize: 20 }}
                        ></MaterialCommunityIcons>
                        <Text style={{ fontSize: 12, fontWeight: "300" }}>
                          {item.date}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <IonIcon
                          name="location-sharp"
                          style={{ fontSize: 20, color: "blue" }}
                        ></IonIcon>
                        <Text style={{ fontSize: 12, fontWeight: "300" }}>
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                horizontal
              ></FlatList>
            </View>
          </View>

          {/*  Danh mục */}

          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.myCommunity_title}>Danh Mục</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={{ marginRight: 10, fontSize: 24, fontWeight: "900" }}
              ></MaterialIcons>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",

                marginTop: 20,
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://danangaz.com/wp-content/uploads/2020/02/noi-that-o-to.jpg",
                }}
                style={{
                  height: 103,
                  width: 207,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                blurRadius={5}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "600" }}
                >
                  Nội Thất xe
                </Text>
              </ImageBackground>

              <ImageBackground
                source={{
                  uri: "https://i-vnexpress.vnecdn.net/2022/10/14/-6450-1665740024.jpg",
                }}
                style={{
                  height: 103,
                  width: 120,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                blurRadius={5}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "600" }}
                >
                  Lux A2.0
                </Text>
              </ImageBackground>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",

                marginTop: 20,
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://images.autofun.vn/file1/1a67777714474bfd953bf4e257ad4f00_800.jpg",
                }}
                style={{
                  height: 103,
                  width: 120,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                blurRadius={5}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "600" }}
                >
                  Bộ sạc
                </Text>
              </ImageBackground>
              <ImageBackground
                source={{
                  uri: "https://chieuta.com/wp-content/uploads/2017/05/tho-tinh-di-phuot.jpg",
                }}
                style={{
                  height: 103,
                  width: 207,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                blurRadius={5}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "600" }}
                >
                  Lái thử
                </Text>
              </ImageBackground>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",

                marginTop: 20,
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://images2.thanhnien.com.vn/Uploaded/chicuong/2022_02_21/vinfast-vento-3-1232.jpg",
                }}
                style={{
                  height: 103,
                  width: 207,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                blurRadius={5}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "600" }}
                >
                  Xe máy điện
                </Text>
              </ImageBackground>

              <ImageBackground
                source={{
                  uri: "https://vinfastninhthuan.com.vn/wp-content/uploads/2022/02/vinfast-vietnam.jpg",
                }}
                style={{
                  height: 103,
                  width: 120,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                blurRadius={5}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "600" }}
                >
                  Xem Thêm
                </Text>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
export default observer(CommunityScreen);
