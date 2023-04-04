/** @format */

import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import { Avatar } from "@rneui/themed";

export default function PersonalScreen() {
  return (
    <SafeAreaView>
      <View style={styles.headerside}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginLeft: 10,
          }}
        >
          Cá nhân
        </Text>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <MaterialIcons
            name="pending"
            size={36}
            color={"white"}
          ></MaterialIcons>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ backgroundColor: "#181A20", height: 800 }}>
        <View style={styles.avatar}>
          <Avatar
            size={150}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
