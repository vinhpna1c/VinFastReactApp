/** @format */

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TextInput,
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

 function HomeScreen() {
 const {amityStore}=useContext(MobXProviderContext);
 console.log(amityStore);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* herder side */}
      <Text>Test data: {amityStore.testData} //</Text>
      <View style={styles.headerside}>
        <View style={styles.header}>
          <Avatar
            size={40}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <View>
            <Text style={{ color: "white" }}> Nguyen Ho Duy Tri</Text>
            <Text style={{ color: "white" }}>@tringuyen</Text>
          </View>
          <View style={styles.headericon}>
            <MaterialIcons
              name="favorite-outline"
              color="white"
              style={styles.iconheader}
            />
            <MaterialIcons
              name="notifications"
              color="white"
              style={styles.iconheader}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        {/* Search Bar */}

        <View style={styles.body}>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TouchableOpacity>
                <MaterialIcons
                  name="search"
                  color="#898e9e"
                  style={{ marginLeft: 40, fontWeight: "bold" }}
                  size={28}
                />
              </TouchableOpacity>

              <TextInput
                style={styles.searchInput}
                value=""
                onChange={() => {}}
                placeholder="Tìm Kiếm"
              />
            </View>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Icon name="list" type="font-awesome" color="#898e9e" />
            </TouchableOpacity>
          </View>
          <View style={{ margin: 20 }}>
            <Image
              style={{ height: 200, borderRadius: 20 }}
              source={{
                uri: "https://vinfast.vn/wp-content/uploads/2022/09/vinfast-home.png",
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/xe_1.png")}
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
          </View>

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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "flex-start",
            }}
          >
            <TouchableOpacity style={styles.card_2}>
              <Image
                style={styles.cardImage_2}
                source={require("../../../assets/images/xe_1.png")}
              />
              <View>
                <Text style={styles.cardText_2}>Vinfast VF 5 flus</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <MaterialIcons
                    name="star-outline"
                    color="white"
                    style={{ fontSize: 20 }}
                  ></MaterialIcons>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "white",
                      marginLeft: 5,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    4.5 |
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 28,
                      backgroundColor: "white",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    <Text style={{ fontSize: 8, fontWeight: "bold" }}>New</Text>
                  </View>
                </View>
                <Text style={styles.cardText_2}>1.057.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card_2}>
              <Image
                style={styles.cardImage_2}
                source={require("../../../assets/images/xe_2.png")}
              />
              <View>
                <Text style={styles.cardText_2}>Vinfast FELIZ flus</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <MaterialIcons
                    name="star-outline"
                    color="white"
                    style={{ fontSize: 20 }}
                  ></MaterialIcons>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "white",
                      marginLeft: 5,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    4.5 |
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 28,
                      backgroundColor: "white",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    <Text style={{ fontSize: 8, fontWeight: "bold" }}>New</Text>
                  </View>
                </View>
                <Text style={styles.cardText_2}>1.057.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "flex-start",
            }}
          >
            <TouchableOpacity style={styles.card_2}>
              <Image
                style={styles.cardImage_2}
                source={require("../../../assets/images/xe_4.png")}
              />
              <View>
                <Text style={styles.cardText_2}>vinfast KALARA A2 flus</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <MaterialIcons
                    name="star-outline"
                    color="white"
                    style={{ fontSize: 20 }}
                  ></MaterialIcons>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "white",
                      marginLeft: 5,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    4.5 |
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 28,
                      backgroundColor: "white",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    <Text style={{ fontSize: 8, fontWeight: "bold" }}>New</Text>
                  </View>
                </View>
                <Text style={styles.cardText_2}>1.057.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card_2}>
              <Image
                style={styles.cardImage_2}
                source={require("../../../assets/images/xe_5.png")}
              />
              <View>
                <Text style={styles.cardText_2}>Vinfast VF 8 flus</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <MaterialIcons
                    name="star-outline"
                    color="white"
                    style={{ fontSize: 20 }}
                  ></MaterialIcons>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "white",
                      marginLeft: 5,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    4.5 |
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 28,
                      backgroundColor: "white",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    <Text style={{ fontSize: 8, fontWeight: "bold" }}>New</Text>
                  </View>
                </View>
                <Text style={styles.cardText_2}>1.057.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "flex-start",
            }}
          >
            <TouchableOpacity style={styles.card_2}>
              <Image
                style={styles.cardImage_2}
                source={require("../../../assets/images/xe_1.png")}
              />
              <View>
                <Text style={styles.cardText_2}>Vinfast VF 8 flus</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <MaterialIcons
                    name="star-outline"
                    color="white"
                    style={{ fontSize: 20 }}
                  ></MaterialIcons>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "white",
                      marginLeft: 5,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    4.5 |
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 28,
                      backgroundColor: "white",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    <Text style={{ fontSize: 8, fontWeight: "bold" }}>New</Text>
                  </View>
                </View>
                <Text style={styles.cardText_2}>1.057.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card_2}>
              <Image
                style={styles.cardImage_2}
                source={require("../../../assets/images/xe_2.png")}
              />
              <View>
                <Text style={styles.cardText_2}>Vinfast VF 8 flus</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <MaterialIcons
                    name="star-outline"
                    color="white"
                    style={{ fontSize: 20 }}
                  ></MaterialIcons>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "white",
                      marginLeft: 5,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    4.5 |
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 28,
                      backgroundColor: "white",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  >
                    <Text style={{ fontSize: 8, fontWeight: "bold" }}>New</Text>
                  </View>
                </View>
                <Text style={styles.cardText_2}>1.057.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Button title={"Change data"}onPress={()=>{
          console.log("Old data: "+amityStore.testData);
          const newData="Hello"+(Math.random()*100).toString()
          console.log(newData)
          amityStore.setTestData("Hello"+(Math.random()*100).toString())
          }}/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default observer(HomeScreen)