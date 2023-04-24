/** @format */

import { Flex } from "@react-native-material/core";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  // Header

  headerside: {
    backgroundColor: "white",
  },
  header: {
    padding: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  headericon: {
    display: "flex",
    flexDirection: "row",
  },
  iconheader: {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 24,
  },
  reelContainer: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 4,
  },

  header_bar: {
    padding: 5,
    flexDirection: "row",
  },
  header_bar_button: {
    margin: 10,
  },
  header_bar_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#A5A9B5",
  },
  tabSelected: {
    color: "#1054DE",
    borderBottomWidth: 1,
    paddingBottom: 12,
    borderBottomColor: "#1054DE",
  },

  // Khám Phá.
  banner_discover: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 9,
  },
  image_banner: {
    height: 185,
    width: "90%",
    borderRadius: 16,
  },
  myCommunity: {},
  myCommunity_top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  myCommunity_title: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 15,
  },
  myCommunity_bottom: {
    width: "100%",
  },
  myCommunity_circle: {
    height: 72,
    width: 72,
    borderRadius: 50,
    backgroundColor: "red",
  },
});

export default styles;
