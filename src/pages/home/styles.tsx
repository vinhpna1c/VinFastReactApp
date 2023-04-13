/** @format */

import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};
const styles = StyleSheet.create({
  textinput: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  container: {
    backgroundColor: "black",
    
    // height: 60,
  },
  header: {
    padding: 10,
    display: "flex",
    
    flexDirection: "row",
    
    justifyContent:"space-between",
  },
  headericon: {
    // paddingLeft: 140,
    display: "flex",
    flexDirection: "row",
  },
  body: {
    backgroundColor: '#181A20',
  },
  iconheader: {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 24,
  },

  searchContainer: {
    flexDirection: "row",
    height: 64,

    color: "grey",
    padding: 10,
    alignItems: "center",
  },
  searchWrapper: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    flexDirection: "row",
    backgroundColor: "#5f5f5f",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    color: "#89befe",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 14,
    color: "white",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#1c1c1c",
    // backgroundColor: "red",
    marginBottom: 10,
    marginLeft: "2%",
    height: 100,
    width: 83,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "flex-start",

    margin: 10,
  },
  card_2: {
    backgroundColor: "#1c1c1c",

    marginBottom: 10,
    marginLeft: "2%",
    height: 180,
    width: 170,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "flex-start",

    margin: 10,
  },
  cardImage_2: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 1000,
    marginTop: 5,
  },
  cardText_2: {
    fontSize: 14,
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },

  cardImage: {
    width: "100%",
    height: 50,
    resizeMode: "cover",
    borderRadius: 1000,
    marginTop: 5,
  },
  headerTitle: {
    fontSize: 16,
    color: "white",
  },
  headerBtn: {
    fontSize: 16,
    color: "white",
  },
});

export default styles;
