/** @format */

import { ScrollView, Text, Image, SafeAreaView, View } from "react-native";
export function HomeScreen() {
  return (
    <View style={{ marginTop: 40 }}>
      <ScrollView>
        <Image
          source={require("../../../assets/screens/home.png")}
          style={{ width: "100%" }}
        />
      </ScrollView>
    </View>
  );
}
