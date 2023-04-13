import { TouchableOpacity ,Text} from "react-native";
import styles from "../styles";

type BookingButtonProps={
    title?:string,
    onTap?: Function,
}

function BookingButton(props:BookingButtonProps):JSX.Element
{
    return (
        <TouchableOpacity onPress={()=>{
            if(props.onTap!=undefined)
            {
                props.onTap();
            }
        }}
        style={styles.bookingButton}
        >
            <Text style={{fontSize:12,fontWeight:'700'}}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default BookingButton