/** @format */

import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "../styles";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import ColorOption from "../components/ColorOption";
import BookingButton from "../components/BookingButton";
import { Avatar } from "@rneui/base";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import StarButton from "../components/starButton";
import Option from "../components/Option";

// const colorOptions = ["#D9D9D9", "#9C3A3A", "#2E5CBA", "#684D19", "#000000"];
const colorOptions = [
  {
    id: 0,
    color: "white",
    image: require("../../../../assets/images/vf8white.png"),
  },
  {
    id: 1,
    color: "red",
    image: require("../../../../assets/images/vf8red.png"),
  },
  {
    id: 2,
    color: "green",
    image: require("../../../../assets/images/vf8green.png"),
  },
  {
    id: 3,
    color: "#D3D3D3",
    image: require("../../../../assets/images/vf8siliver.png"),
  },
  {
    id: 4,
    color: "blue",
    image: require("../../../../assets/images/vf8blue.png"),
  },
  {
    id: 5,
    color: "grey",
    image: require("../../../../assets/images/vf8grey.png"),
  },
  {
    id: 6,
    color: "black",
    image: require("../../../../assets/images/vf8black.png"),
  },
];
function ProductDetail(): JSX.Element {
  const navigation = useNavigation();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedColorcar, setselectedColorcar] = useState(
    colorOptions[0].image
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            name="chevron-left"
            size={20}
            style={styles.whiteText}
          />
        </TouchableOpacity>
        <FontAwesomeIcon name="heart-o" size={20} style={styles.whiteText} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.body}>
        <View>
          <Option image={colorOptions[selectedColorIndex].image} />
          <View style={styles.colorSection}>
            {colorOptions.map((item) => (
              <View>
                <ColorOption
                  key={item.id}
                  color={item.color}
                  selected={selectedColorIndex == item.id}
                  image={item.image}
                  onTap={() => {
                    setSelectedColorIndex(item.id);
                  }}
                />
              </View>
            ))}
          </View>
        </View>
        <Text style={[styles.productTitle, styles.whiteText]}>
          VinFast VF 8 Plus
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <BookingButton title="Đặt hàng" />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("product", { screen: "product-reviews" });
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <FontAwesomeIcon
              name="star-half-empty"
              size={20}
              color="white"
              style={{ paddingLeft: 16, paddingRight: 4 }}
            />
            <Text
              style={{ ...styles.whiteText, fontSize: 12, fontWeight: "400" }}
            >
              4.8 (86 reviews)
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.detailTitle, styles.whiteText]}>Mô tả</Text>
        <Text style={[styles.detailContent, styles.whiteText]}>
          VF 8 Plus có ngoại thất đẹp, thanh thoát nhờ sự kết hợp giữa kiểu dáng
          SUV và Couple. Thiết kế ấn tượng này được chắp bút bởi Studio thiết kế
          Pininfarina (Italia) – cha đẻ của những mẫu ngoại thất xe đẳng cấp.
        </Text>
        <Text style={[styles.detailTitle, styles.whiteText]}>Hình ảnh</Text>
        <ScrollView
          horizontal={true}
          style={{ flexDirection: "row", height: 60, backgroundColor: "white" }}
        >
          <Image source={require("../../../../assets/images/car-view-1.png")} />
          <Image source={require("../../../../assets/images/car-view-2.png")} />
          <Image source={require("../../../../assets/images/car-view-3.png")} />
          <Image source={require("../../../../assets/images/car-view-3.png")} />
        </ScrollView>
        <View style={{ ...styles.shopSection, paddingVertical: 8 }}>
          <View style={styles.shopSection}>
            <Avatar
              rounded
              source={require("../../../../assets/images/vinfast-logo-vertical.jpg")}
              size={40}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ ...styles.whiteText, fontSize: 17, fontWeight: "400" }}
              >
                VinFast Store{" "}
                <MaterialCommunityIcon
                  name="check-decagram"
                  size={16}
                  color="#1054DE"
                />
              </Text>
              <Text
                style={{ ...styles.whiteText, fontSize: 10, fontWeight: "400" }}
              >
                Official Account of VinFast
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <AntDesignIcon
              name="message1"
              size={24}
              color="white"
              style={{ paddingRight: 10 }}
            />
            <FeatherIcon name="phone" size={24} color="white" />
          </View>
        </View>
        <View style={{ ...styles.shopSection }}>
          <View>
            <Text
              style={{ ...styles.whiteText, fontSize: 15, fontWeight: "500" }}
            >
              Giá
            </Text>
            <Text
              style={{ ...styles.whiteText, fontSize: 17, fontWeight: "700" }}
            >
              1.057.100.000 VNĐ
            </Text>
          </View>
          <BookingButton title="Đặt hàng" />
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
  );
}

export default ProductDetail;
