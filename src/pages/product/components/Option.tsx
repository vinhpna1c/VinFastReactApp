/** @format */

import { TouchableOpacity, View, Image } from "react-native";
import styles from "../styles";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

type ColorOptionProps = {
  image: any;
};

function Option(props: ColorOptionProps): JSX.Element {
  // props.color??='white';
  return <Image source={props.image} style={styles.imageTop} />;
}

export default Option;
