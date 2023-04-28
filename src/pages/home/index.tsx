/** @format */

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Avatar } from "@rneui/themed";
import { Button, Icon } from "react-native-elements";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AmityStore from "../../stores/amity/AmityStore";
import { observable, observe } from "mobx";
import { MobXProviderContext, observer, useLocalStore } from "mobx-react";
import RootStore from "../../stores";
import { useContext } from "react";
import SerchBar from "./components/serch_bar";
import CardCategory from "./components/card_category";
import vehicles from "../product/mock_data";
import CardProduct from "./components/card_product";

const categoryData = [
  {
    id: "1",
    image: require("../../../assets/images/otodien.png"),
    nameCategories: "Ô tô điện",
  },
  {
    id: "2",
    image: require("../../../assets/images/otoxang.png"),
    nameCategories: "Ô tô xăng",
  },
  {
    id: "3",
    image: require("../../../assets/images/xemaycaocap.png"),
    nameCategories: "Xe máy cao cấp",
  },
  {
    id: "4",
    image: require("../../../assets/images/xemaytrungcap.png"),
    nameCategories: "Xe máy trung cấp",
  },
  {
    id: "5",
    image: require("../../../assets/images/xemayphothong.png"),
    nameCategories: "Xe máy phổ thông",
  },
  {
    id: "6",
    image: require("../../../assets/images/pinvatramsacoto.png"),
    nameCategories: "Pin & trạm sạc ô tô",
  },
  {
    id: "7",
    image: require("../../../assets/images/pinvatramsacxemay.png"),
    nameCategories: "Pin & trạm sạc xe máy",
  },
  {
    id: "8",
    image: require("../../../assets/images/dichvuhaumai.png"),
    nameCategories: "Dịch vụ hậu mãi",
  },
];

console.log(categoryData[0].image);
function HomeScreen() {
  const { amityStore } = useContext(MobXProviderContext) as RootStore;
  //  console.log(amityStore);
  console.log(amityStore.testData);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* herder side */}

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <Avatar
              size={40}
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <View>
              <Text style={{ color: "white" }}> Nguyen Ho Duy Tri</Text>
              <Text style={{ color: "white" }}>@tringuyen</Text>
            </View>
          </View>

          <View style={styles.headericon}>
            <TouchableOpacity>
              <MaterialIcons
                name="favorite-outline"
                color="white"
                style={styles.iconheader}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="notifications"
                color="white"
                style={styles.iconheader}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Content */}
      <ScrollView>
        <View style={styles.body}>
          {/* Search Bar */}
          <SerchBar />

          {/* Banner */}
          <View style={{ margin: 20 }}>
            <Image
              style={{ height: 200, borderRadius: 20 }}
              source={{
                uri: "https://vinfast.vn/wp-content/uploads/2022/09/vinfast-home.png",
              }}
            />
          </View>

          {/* Categories */}
          <FlatList
            data={categoryData}
            horizontal={false}
            renderItem={({ item }) => {
              return (
                <CardCategory
                  image={item.image}
                  nameCategories={item.nameCategories}
                />
              );
            }}
            numColumns={4}
            keyExtractor={(item) => item.id}
          />

          {/* <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/otodien.png")}
              />
              <Text style={styles.cardText}>ô tô điện</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/xe_2.png")}
              />
              <Text style={styles.cardText}>ô tô Xăng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/xe_3.png")}
              />
              <Text style={styles.cardText}>Xe máy cao cấp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/xe_4.png")}
              />
              <Text style={styles.cardText}>Xe máy trung cấp</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/xe_5.png")}
              />
              <Text style={styles.cardText}>ô tô điện</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/xe_1.png")}
              />
              <Text style={styles.cardText}>Xe máy phổ thông</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/xe_2.png")}
              />
              <Text style={styles.cardText}>Pin & Trạm sạc ô tô</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/xe_3.png")}
              />
              <Text style={styles.cardText}>Dịch vụ hậu mãi</Text>
            </TouchableOpacity>
          </View> */}

          {/* Bán chạy nhất */}
          {/* Bán chạy nhất Top */}

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
              }}
            >
              <Text style={styles.headerTitle}>Bán chạy nhất</Text>
              <TouchableOpacity>
                <Text style={styles.headerTitle}>Xem tất cả</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Bán chạy nhất bottom */}
          <FlatList
            data={vehicles}
            horizontal={false}
            renderItem={({ item }) => {
              return (
                <CardProduct
                  uri={item.uri}
                  name={item.name}
                  star={item.star}
                  price={item.price}
                  status={item.status}
                />
              );
            }}
            numColumns={2}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default observer(HomeScreen);
