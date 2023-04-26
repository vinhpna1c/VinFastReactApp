/** @format */

import { TouchableOpacity, Text } from "react-native";
import styles from "../styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type StarType = {
  title: string;
  isSelected: boolean;
  onTap?: Function;
};
function StarButton(props: StarType): JSX.Element {
  return (
    <TouchableOpacity
      style={
        props.isSelected ? styles.selectedfillStar : styles.unselectedfillStar
      }
      onPress={() => {
        if (typeof props.onTap === "function") {
          props.onTap();
        }
      }}
    >
      <MaterialIcons
        name="star"
        style={{ color: "white", fontSize: 20 }}
      ></MaterialIcons>
      <Text style={{ color: "white", fontSize: 20 }}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default StarButton;
