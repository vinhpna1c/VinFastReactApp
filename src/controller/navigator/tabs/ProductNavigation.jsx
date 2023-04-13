import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../../../pages/product";
import ProductDetail from "../../../pages/product/detail";

function ProductNavigation()
{
    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator  initialRouteName="products" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="products" component={ProductScreen}/>
            <Stack.Screen name="product-detail" component={ProductDetail}/>
        </Stack.Navigator>
    )

}
export default ProductNavigation;