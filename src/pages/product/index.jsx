
import { Text, View, Image, FlatList, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './styles';
import ProductTypeButton from './components/ProductTypeButton';
import { useState } from 'react';
import vehicles from './mock_data';
import Divider from './components/Divider';
export default function ProductScreen() {
    const [productType, setProductType] = useState('All');
    const productTypes = [
        "All",
        "Ô tô điện",
        "Ô tô xăng",
        "Xe máy",
    ];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.whiteText,styles.headerTitle]}>Sản phẩm</Text>
                <Icon name='search' size={20} style={styles.whiteText} />
            </View>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.productTypeContainer}>
                {productTypes.map((type) => <ProductTypeButton 
                key={type} 
                title={type}
                 isSelected={type == productType}
                 onTap={()=>setProductType(type)}
                 />)}
            </View>
            {/* <Image source={require("../../../assets/images/xe_1.png")}/> */}
            <FlatList
                style={styles.productContainer}
                data={vehicles}
                horizontal={false}
                renderItem={({item}) => {
                    // console.log(vehicle)
                    const vehicle=item;
                    return (
                    <View key={vehicle.name} style={styles.productItem}>
                        <Image key={vehicle.name} source={vehicle.uri} style={styles.productImage} />
                        <Text style={[styles.whiteText,styles.productName]}>{vehicle.name}</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon name='star-half-full' size={16} color={'white'}/>
                        <Text style={{...styles.whiteText,marginLeft:3,marginRight:3,...styles.priceText}}>{vehicle.star}</Text>
                        <Divider/>
                        <View style={{...styles.selectedProduct,paddingVertical:4,paddingHorizontal:6,borderRadius:4,marginLeft:3}}>
                            <Text style={{fontSize:8,fontWeight:'700'}}>New</Text>
                        </View>
                        </View>
                        
                        <Text style={[styles.whiteText,styles.priceText]}>{vehicle.price} VNĐ</Text>
                    </View>
                    );
                }}
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
          </ScrollView>
        </SafeAreaView>
    );
}