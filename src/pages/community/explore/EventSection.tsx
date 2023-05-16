import { FlatList, TouchableOpacity, View ,Text} from "react-native";
import { Image } from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "../style";
import { format } from "date-fns";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



const DATA2 = [
    {
      id: "1",
      title: "Nhập môn xe điện vinfast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,
      location: "HN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "2",
      title: "Nhập môn xe điện vinfast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,
      location: "HCM",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "3_",
      title: "Nhập môn xe điện vinfast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "3",
      title: "Nhập môn xe điện vinfast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "4",
      title: "Nhập môn xe điện vinfast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "5",
      title: "Nhập môn xe điện vinfast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "6",
      title: "Nhập môn xe điện vinfast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
      id: "7",
      title: "Nhập môn xe điện vinfast",
      date: `${format(new Date(), "dd.MM.yyyy")}`,

      location: "ĐN",
      img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
  ];

function EventSection():JSX.Element
{
    return (
        <View>
        <View style={styles.event}>
          <Text style={styles.event_title}>Sự Kiện</Text>
          <TouchableOpacity onPress={() => { }}>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={styles.icon_arrow}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={{
              margin: 10,
            }}
            data={DATA2}
            renderItem={({ item }) => (
              <TouchableOpacity
      
                style={styles.event_card}
                onPress={() => { }}
              >
                <View>
                  <Image
                    style={styles.event_image}
                    source={{
                      uri: `${item.img}`,
                    }}
                  ></Image>
                </View>

                <View>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styles.event_card_title}
                  >
                    {item.title}
                  </Text>
                </View>

                <View style={styles.event_card_bottom}>
                  <View style={styles.event_card_bottom_left}>
                    <MaterialCommunityIcons
                      name="calendar-month"
                      style={{ color: "blue", fontSize: 16 }}
                    ></MaterialCommunityIcons>
                    <Text style={{ fontSize: 10, fontWeight: "300" }}>
                      {item.date}
                    </Text>
                  </View>

                  <View style={styles.event_card_bottom_right}>
                    <IonIcon
                      name="location-sharp"
                      style={{ fontSize: 16, color: "blue" }}
                    ></IonIcon>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={{ fontSize: 10, fontWeight: "300" }}
                    >
                      {item.location}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          ></FlatList>
        </View>
      </View>
    )
}

export default EventSection;