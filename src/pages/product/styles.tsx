import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'black',
            height: '100%',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
        },
        whiteText: {
            color: 'white'
        },
        buttonStyle: {
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingVertical: 8,
            marginRight: 8
        },
        selectedProduct: {
            backgroundColor: 'white',
            color: 'black',
            fontWeight: '700',
        },
        unSelectedProduct: {
            color: '#2E323D',
            backgroundColor: '#BFBFBF'
        },
        productTypeContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        productContainer: {
            paddingHorizontal: 16,
        },
        productItem: {
            // backgroundColor:'yellow',
            flex: 1,
            // borderColor:'red'
            // marginRight:8
        },
        rightItem:{
            paddingLeft:32,
        }
        ,
        productImage: {

            height: 100,
            width: 150,
            resizeMode: 'contain'
        },
        headerTitle: {
            color: "#FFFCFC",
            fontSize: 18,
            fontWeight: '600'
        },
        productTypeText: {
            fontSize: 12,
            fontWeight: '700',
        },
        productName:{
            fontSize:13,
            fontWeight:'800',
        },
        priceText:{
            fontSize:10,
            fontWeight:'800'
        }




    }


);

export default styles;
