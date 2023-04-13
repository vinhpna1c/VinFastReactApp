import { View ,Text, TouchableOpacity} from "react-native";
import styles from "../styles";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type ColorOptionProps={
    color?:string,
    selected?:boolean,
    onTap?: Function,
}

function ColorOption(props:ColorOptionProps):JSX.Element
{
    // props.color??='white';
    return (
        <TouchableOpacity style={{...styles.colorOption,backgroundColor:props.color??'white'}} onPress={()=>{
            if(props.onTap!=undefined)
            {
                props.onTap();
            }
        }}> 
            {props.selected&&<AntDesignIcon size={22} name='check' />}
        </TouchableOpacity>
    )
}

export default ColorOption