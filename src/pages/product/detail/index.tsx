import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native"
import styles from "../styles"
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ColorOption from "../components/ColorOption";
import BookingButton from "../components/BookingButton";
import { Avatar } from "@rneui/base";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const colorOptions = [
    "#D9D9D9",
    "#9C3A3A",
    "#2E5CBA",
    "#684D19",
    "#000000",

];

function ProductDetail(): JSX.Element {
    const navigation=useNavigation();
    const [selectedColorIndex,setSelectedColorIndex]=useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <FontAwesomeIcon name="chevron-left" size={20} style={styles.whiteText} />
                </TouchableOpacity>
                <FontAwesomeIcon name='heart-o' size={20} style={styles.whiteText} />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.body}>
                <Image source={require('../../../../assets/images/top-detail-car.png')} style={styles.imageTop} />
                <View style={styles.colorSection}>
                    {colorOptions.map((color, index) => <ColorOption key={index} color={color} selected={selectedColorIndex==index} onTap={()=>setSelectedColorIndex(index)} />)}
                </View>
                <Text style={[styles.productTitle,styles.whiteText]}>VinFast VF 8 Plus</Text>
                <View style={{ flexDirection: 'row' ,justifyContent:'flex-start',alignItems:'center'}}>
                    <BookingButton title="Đặt hàng" />
                    <FontAwesomeIcon name="star-half-empty" size={20} color='white' style={{paddingLeft:16,paddingRight:4}}/>
                    <Text style={{...styles.whiteText,fontSize:12,fontWeight:'400'}}>4.8 (86 reviews)</Text>
                </View>
                <Text style={[styles.detailTitle,styles.whiteText]}>Mô tả</Text>
                <Text style={[styles.detailContent,styles.whiteText]}>VF 8 Plus có ngoại thất đẹp, thanh thoát nhờ sự kết hợp giữa kiểu dáng SUV và Couple. Thiết kế ấn tượng này được chắp bút bởi Studio thiết kế Pininfarina (Italia) – cha đẻ của những mẫu ngoại thất xe đẳng cấp.</Text>
                <Text style={[styles.detailTitle,styles.whiteText]}>Hình ảnh</Text>
                <ScrollView horizontal={true} style={{ flexDirection: 'row', height: 60,backgroundColor:'white' }}>
                    <Image source={require('../../../../assets/images/car-view-1.png')} />
                    <Image source={require('../../../../assets/images/car-view-2.png')} />
                    <Image source={require('../../../../assets/images/car-view-3.png')} />
                    <Image source={require('../../../../assets/images/car-view-3.png')} />
                </ScrollView>
                <View style={{...styles.shopSection,paddingVertical:8}}>
                    <View style={styles.shopSection}>
                        <Avatar rounded source={require('../../../../assets/images/vinfast-logo-vertical.jpg')}size={40} />
                        <View style={{marginLeft:10}}>
                            <Text style={{...styles.whiteText,fontSize:17,fontWeight:'400'}}>VinFast Store <MaterialCommunityIcon name="check-decagram" size={16} color='#1054DE'/></Text>
                            <Text style={{...styles.whiteText,fontSize:10,fontWeight:'400'}}>Official Account of VinFast</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <AntDesignIcon name="message1" size={24} color='white' style={{paddingRight:10}}/>
                        <FeatherIcon name="phone" size={24} color='white'/>
                    </View>
                </View>
                <View style={{...styles.shopSection}}>
                    <View >
                        <Text style={{...styles.whiteText,fontSize:15,fontWeight:'500'}}>Giá</Text>
                        <Text style={{...styles.whiteText,fontSize:17,fontWeight:'700'}}>1.057.100.000 VNĐ</Text>
                    </View>
                    <BookingButton title="Đặt hàng" />
                </View>
                <View style={{height:50}}/>

            </ScrollView>
        </View>
    )
}

export default ProductDetail