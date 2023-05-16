import React, { useCallback, useState } from "react";
import styles from "../style";
import CommunitySection from "./CommunitySection";
import EventSection from "./EventSection";
import CategorySection from "./CategorySection";
import { Dimensions, RefreshControl, ScrollView, View } from "react-native";
import { Image } from "react-native-elements";

function ExploreTab(): JSX.Element {

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // getGlobalFeed();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const {width,height}=Dimensions.get('window');
  return (
    <>
      <ScrollView
        style={{ height: "80%", backgroundColor: "#F5F5F5" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Banner */}
        <View style={styles.banner_discover}>
          <Image
            style={{...styles.image_banner,width:width-32}}
            source={{
              uri: "https://vinfast.vn/wp-content/uploads/2022/09/vinfast-home.png",
            }}/
          >
        </View>

        {/* Cộng đồng của tôi */}
        <CommunitySection />
        {/* Sự kiện */}
        <EventSection />
        {/*  Danh mục */}
        <CategorySection />
      </ScrollView>
    </>
  )
}

export default ExploreTab;