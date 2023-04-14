import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#181A20',
            height: '100%',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
        },
        body: {
            padding: 16,
        },
        imageTop: {
            width: '100%',
            height: 200,
            resizeMode: 'contain'
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
        rightItem: {
            paddingLeft: 32,
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
        productName: {
            fontSize: 13,
            fontWeight: '800',
        },
        priceText: {
            fontSize: 10,
            fontWeight: '800'
        },
        colorSection: {
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 16,
        },
        colorOption: {
            height: 32,
            width: 32,
            borderRadius: 32,
            backgroundColor: 'white',
            marginRight: 12,
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row',
            padding: 4

        },
        bookingButton: {
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: 'white',
            borderRadius: 10,
        },

        shopSection: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        productTitle: {
            fontSize: 30,
            fontWeight: '700',
            paddingVertical: 8,
        },
        detailTitle: {
            fontSize: 17,
            fontWeight: '800',
            paddingVertical: 8,
        },
        detailContent: {
            fontSize: 15,
            fontWeight: '500',
            padding: 8,
        }




    }


);

export default styles;
