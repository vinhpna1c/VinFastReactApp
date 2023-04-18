import { TouchableOpacity,StyleSheet, GestureResponderEvent } from "react-native";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type FloatingButtonProps={
    icon?:JSX.Element,
    backgroundColor?:string,
    onTap?:((event: GestureResponderEvent) => void) ,
}

function FloatingButton(props:FloatingButtonProps):JSX.Element
{
    return (
        <TouchableOpacity style={styles.floatStyle} onPress={props.onTap}>
            {props.icon??<AntDesignIcon name="pluscircle" size={40} color={props.backgroundColor??'blue'} />}
        </TouchableOpacity>
    )

}
const styles=StyleSheet.create({
    floatStyle:{
        position:'absolute',
        right:40,
        bottom:40,
        borderRadius:60,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'white'
        
    }
})

export default FloatingButton;