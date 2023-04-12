/** @format */

import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import OctIcon from "react-native-vector-icons/Octicons";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import styles from "./styles";
import { Avatar } from "@rneui/themed";
import RowOption from "./components/RowOption";

export default function PersonalScreen() {
  const ICON_SIZE = 24;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cá nhân</Text>
        <MaterialCommunityIcon name='dots-horizontal-circle-outline' size={24} style={styles.iconStyle} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.avatarSection}>
          <Avatar
            rounded
            source={require('../../../assets/images/user.jpg')}
            size={120}

          >
            <Avatar.Accessory size={28} style={{ marginRight: 8 }} />
          </Avatar>
          <Text style={[styles.whiteText, styles.avatarName]}>Nguyen Quang Tri</Text>
          <Text style={[styles.whiteText, styles.tagName]}>@tringuyen</Text>
        </View>
        <View style={styles.optionSection}>

          <RowOption title="Chỉnh sửa thông tin cá nhân"
            icon={
              <MaterialIcon name="person-outline" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Địa chỉ"
            icon={
              <IonIcon name="md-location-outline" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Thông báo"
            icon={
              <MaterialIcon name="notifications-none" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Thanh toán"
            icon={
              <OctIcon name="credit-card" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Bảo mật"
            icon={
              <MaterialCommunityIcon name="shield-check-outline" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Ngôn ngữ"
            icon={
              <IonIcon name="globe-outline" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Chế độ tối"
            icon={
              <IonIcon name="moon-outline" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Chính sách quyền riêng tư"
            icon={
              <FontistoIcon name="locked" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Trung tâm trợ giúp"
            icon={
              <MaterialIcon name="contact-support" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <RowOption title="Mời bạn bè"
            icon={
              <MaterialCommunityIcon name="account-group" size={ICON_SIZE} style={styles.iconStyle} />
            } />
          <TouchableOpacity>
            <View style={styles.optionItem}>
              <View style={{ flexDirection: 'row' }}>
                <OctIcon name="sign-out" size={ICON_SIZE} style={[styles.signOutStyle,] } />
                <Text style={[styles.signOutStyle,styles.optionTitle]}>Đăng xuất</Text>
              </View>

            </View>
          </TouchableOpacity>
        </View>
        <View style={{height:50}}/>
      </ScrollView>

    </SafeAreaView>
  );
}
