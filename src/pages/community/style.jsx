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
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 15,
  },
  myCommunity_bottom: {
    width: "100%",
  },
  myCommunity_circle: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  icon_arrow: {
    marginRight: 15,
    fontSize: 32,
    fontWeight: "900",
  },
  myCommunity_card_item: {
    marginRight: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 64,
  },
  myCommunity_card_title: {
    width: 64,
    height: 18,
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: -0.1,
    color: "#292B32",
  },

  // Sự Kiện
  event: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  event_title: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 15,
  },
  event_card: {
    height: 148,
    width: 192,
    marginRight: 10,
    backgroundColor: "#e8e6df",

    borderRadius: 10,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-around",
  },
  event_image: {
    height: 95,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  event_card_title: {
    width: 177,
    height: 20,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
    alignItems: "center",
    letterSpacing: -0.1,
    display: "flex",
    marginLeft: 10,
  },
  event_card_bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  event_card_bottom_left: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 10,
  },
  event_card_bottom_right: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 10,
  },
  // Danh Mục
  category: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category_title: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 15,
  },
  category_image_title: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  category_image_backgroud: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 16,
  },
  categoryItem: {
    borderRadius: 10,
    height: 100,
    overflow: "hidden",
    borderRadius: 16,
    marginBottom:4,
  },
});

export default styles;
