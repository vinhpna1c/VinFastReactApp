/** @format */

import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import StarButton from "../components/starButton";
import Review from "../components/review";

const DATA = [
  {
    id: "0",
    count: "All",
  },
  {
    id: "1",
    count: "1",
  },
  {
    id: "2",
    count: "2",
  },
  {
    id: "3",
    count: "3",
  },
  {
    id: "4",
    count: "4",
  },
  {
    id: "5",
    count: "5",
  },
];
const DATA1 = [
  {
    id: "0",
    fullname: "Kiều Trang",
    countstar: "5",
    description: "Mấy chị em mà đi VF8 thì tuyệt",

    coutheart: "34",
    date_time: "2 ngày trước",
    image:
      "https://i.vietgiaitri.com/2018/6/10/nguoi-mau-tay-tang-so-huu-ve-dep-la-duoc-vi-nhu-phien-ban-doi-th-99daa7.jpg",
  },
  {
    id: "1",
    fullname: "Trang Thu",
    countstar: "4",
    description: "Trải nghiệm rất tuyệt",
    coutheart: "26",
    date_time: "5 ngày trước",
    image:
      "https://meliawedding.com.vn/wp-content/uploads/2022/03/hinh-anh-nguoi-mau-lam-hinh-nen-dien-thoai-26-552x1024.jpg",
  },
  {
    id: "2",
    fullname: "Đình Huy",
    countstar: "4",
    description: "Mẫu mã xe đa dạng, đẹp mắt",
    count: "All",
    coutheart: "3",
    date_time: "1 tuần trước",
    image:
      "https://anhdep123.com/wp-content/uploads/2021/03/Tong-hop-nhung-hinh-anh-sieu-mau-nam-dep-2.jpg",
  },
  {
    id: "3",
    fullname: "Phú Trọng",
    countstar: "5",
    description: "Rất sang",
    count: "All",
    coutheart: "3",
    date_time: "1 tuần trước",
    image:
      "https://www.elleman.vn/wp-content/uploads/2018/05/31/nguoi-mau-nam-co-anh-huong-2a-elleman.jpg",
  },
];

function ReviewProductScreen(): JSX.Element {
  const navigation = useNavigation();
  const [currentStar, setcurrentStar] = useState("All");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 16,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            name="chevron-left"
            size={20}
            style={styles.whiteText}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "600",
            marginLeft: 20,
          }}
        >
          4.8 (86 Reviews)
        </Text>
      </View>
      <ScrollView>
        <View>
          <FlatList
            style={{
              margin: 10,
            }}
            data={DATA}
            renderItem={({ item }) => (
              <StarButton
                title={item.count}
                isSelected={item.count == currentStar}
                onTap={() => {
                  setcurrentStar(item.count);
                  console.log(currentStar);
                }}
              ></StarButton>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          ></FlatList>
        </View>
        <View>
          <FlatList
            style={{
              margin: 10,
            }}
            data={DATA1}
            renderItem={({ item }) => (
              <Review
                fullname={item.fullname}
                image={item.image}
                countstar={item.countstar}
                description={item.description}
                coutheart={item.coutheart}
                date_time={item.date_time}
              ></Review>
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default ReviewProductScreen;
