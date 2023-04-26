/** @format */

import { TouchableOpacity, Image, Text, View } from "react-native";
import styles from "../styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Icon } from "react-native-elements";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

type ProductProps = {
  uri: any;
  name: string;
  star: number;
  price: string;
  status: string;
};

function CardProduct(props: ProductProps): JSX.Element {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card_2}
      onPress={() =>
        navigation.navigate("product", { screen: "product-detail" })
      }
    >
      <TouchableOpacity>
        <MaterialIcons
          name="favorite-outline"
          color="white"
          style={{ fontSize: 20, marginTop: 10, marginLeft: "80%" }}
        />
      </TouchableOpacity>

      <Image style={styles.cardImage_2} source={props.uri} />

      <View>
        <Text style={styles.cardText_2}>{props.name}</Text>
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
            {props.star.toString()} |
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
            <Text style={{ fontSize: 8, fontWeight: "bold" }}>
              {props.status}
            </Text>
          </View>
        </View>
        <Text style={styles.cardText_2}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default CardProduct;
