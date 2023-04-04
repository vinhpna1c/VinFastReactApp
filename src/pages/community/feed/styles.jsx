/** @format */

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flexDirection: "column",
  },
  username: {
    fontWeight: "bold",
  },
  timestamp: {
    color: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  action: {
    marginLeft: 10,
  },
  actionIcon: {
    color: "#333",
  },
  actionCount: {
    marginLeft: 5,
    color: "#333",
  },

  shareButton: {
    backgroundColor: "#3b5998",
    borderRadius: 5,
    padding: 5,
    marginLeft: "auto",
  },
  shareButtonText: {
    color: "#fff",
  },
  commentSection: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginTop: 10,
  },
});

export default styles;
