/** @format */

import { TouchableOpacity, Image, Text } from "react-native";
import styles from "../styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Icon } from "react-native-elements";

type categoriesProps = {
  image: any;
  nameCategories: string;
};

function CardCategory(props: categoriesProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.cardImage} source={props.image} />
      <Text style={styles.cardText}>{props.nameCategories}</Text>
    </TouchableOpacity>
  );
}
export default CardCategory;
