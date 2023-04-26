/** @format */

import { View } from "react-native";
import { TouchableOpacity, Text, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "../styles";
type review = {
  image: string;
  fullname: string;
  countstar: string;
  description: string;
  coutheart: string;
  date_time: string;
  onTap?: Function;
};
function Review(props: review): JSX.Element {
  return (
    <View style={{ marginVertical: 10 }}>
      {/* Top Review */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 52,
              height: 52,
              borderRadius: 100,
              marginHorizontal: 10,
            }}
            source={{ uri: `${props.image}` }}
          ></Image>
          <Text style={{ color: "white", fontSize: 16 }}>{props.fullname}</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <TouchableOpacity
            style={styles.unselectedfillStar}
            onPress={() => {}}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              {props.countstar}
            </Text>
            <MaterialIcons
              name="star"
              style={{ color: "white", fontSize: 20 }}
            ></MaterialIcons>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderStyle: "solid",
              borderRadius: 100,
              borderWidth: 0.5,
              borderColor: "white",
            }}
          >
            <MaterialIcons
              style={{ color: "white", fontSize: 20 }}
              name="more-horiz"
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>
      {/* Mid Review */}
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 16, color: "white", fontWeight: "400" }}>
          {props.description}
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <IonIcon
              name="heart-outline"
              style={{ fontSize: 16, color: "white" }}
            ></IonIcon>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "white" }}>
            {props.coutheart}
          </Text>
        </View>
        <Text style={{ fontSize: 16, color: "white" }}>{props.date_time}</Text>
      </View>
    </View>
  );
}
export default Review;
