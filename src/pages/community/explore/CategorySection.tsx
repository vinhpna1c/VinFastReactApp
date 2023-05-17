import { TouchableOpacity, View, Text, Dimensions } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import styles from "../style"
import { CategoryRepository } from "@amityco/ts-sdk"
import { useEffect, useState } from "react"
import CategoryItem from "../components/CategoryItem"

function CategorySection(): JSX.Element {
  const [categories, setCategories] = useState<Amity.Category[]>();
  useEffect(() => {
    const unsubscribeCategories = CategoryRepository.getCategories(
      {
        includeDeleted: false,
        limit: 20,
      },
      ({ data, onNextPage, hasNextPage, loading, error }) => {
        console.info('category get: ' + data.length)
        console.info([...data])
        setCategories(data)
      });
    return () => {
      unsubscribeCategories();
    }
  }, [])

  const { width } = Dimensions.get('window');

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

      <View style={styles.categoryContainer}>
        {categories?.slice(0, categories.length > 6 ? 6 : categories.length).map((category, index) =>{
          const CATEGORY_ITEM_GAP=4;
          let  itemWidth= (width - 32-CATEGORY_ITEM_GAP*2)
          if(index%4==0||index%4==3)
          {
            itemWidth*=0.6;
          }
          else{
            itemWidth*=0.4;
          }
          return (
          <CategoryItem category={category} key={index} styles={{ 
            width: itemWidth,
            marginRight:index%2==0?(CATEGORY_ITEM_GAP):0,
            marginLeft:index%2!=0?(CATEGORY_ITEM_GAP):0,
          }} />
        )})
        }
      </View>

    </View>
  )
}
export default CategorySection