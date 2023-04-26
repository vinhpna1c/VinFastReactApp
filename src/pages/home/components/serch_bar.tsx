/** @format */

import { View, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Icon } from "react-native-elements";


function SerchBar() {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TouchableOpacity>
          <MaterialIcons
            name="search"
            color="#898e9e"
            style={{ marginLeft: 40, fontWeight: "bold" }}
            size={28}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder="Tìm Kiếm"
        />
      </View>
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Icon name="list" type="font-awesome" color="#898e9e" />
      </TouchableOpacity>
    </View>
  );
}
export default SerchBar;
