import { ImageBackground, TouchableOpacity, View ,Text} from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import styles from "../style"
import { CategoryRepository } from "@amityco/ts-sdk"

function CategorySection():JSX.Element
{
  
    return (
        <View>
        <View style={styles.category}>
          <Text style={styles.category_title}>Danh Mục</Text>
          <TouchableOpacity onPress={() => { }}>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={styles.icon_arrow}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>

        {/* Category 1 */}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              height: 103,
              width: 207,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <ImageBackground
              resizeMode="cover"
              source={{
                uri: "https://danangaz.com/wp-content/uploads/2020/02/noi-that-o-to.jpg",
              }}
              style={styles.category_image_backgroud}
            >
              <Text style={styles.category_image_title}>Nội Thất xe</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 103,
              width: 120,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <ImageBackground
              source={{
                uri: "https://i-vnexpress.vnecdn.net/2022/10/14/-6450-1665740024.jpg",
              }}
              style={styles.category_image_backgroud}
            >
              <Text style={styles.category_image_title}>Lux A2.0</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Category 2 */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              height: 103,
              width: 120,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <ImageBackground
              source={{
                uri: "https://images.autofun.vn/file1/1a67777714474bfd953bf4e257ad4f00_800.jpg",
              }}
              style={styles.category_image_backgroud}
            >
              <Text style={styles.category_image_title}>Bộ sạc</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 103,
              width: 207,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <ImageBackground
              source={{
                uri: "https://chieuta.com/wp-content/uploads/2017/05/tho-tinh-di-phuot.jpg",
              }}
              style={styles.category_image_backgroud}
            >
              <Text style={styles.category_image_title}>Lái thử</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        {/* Category 3 */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              height: 103,
              width: 207,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <ImageBackground
              resizeMode="cover"
              source={{
                uri: "https://images2.thanhnien.com.vn/Uploaded/chicuong/2022_02_21/vinfast-vento-3-1232.jpg",
              }}
              style={styles.category_image_backgroud}
            >
              <Text style={styles.category_image_title}>Xe máy điện</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 103,
              width: 120,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <ImageBackground
              source={{
                uri: "https://vinfastninhthuan.com.vn/wp-content/uploads/2022/02/vinfast-vietnam.jpg",
              }}
              style={styles.category_image_backgroud}
            >
              <Text style={styles.category_image_title}>Xem Thêm</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    )
}
export default CategorySection