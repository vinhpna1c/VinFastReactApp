import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
type RowOptionProps = {
    icon: JSX.Element,
    title: string,
    tailIcon?: JSX.Element,
};

function RowOption(props: RowOptionProps) {
    return (
        <TouchableOpacity>
        <View style={styles.optionItem}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                {props.icon}<Text style={[styles.whiteText,styles.optionTitle]}>{props.title}</Text>
            </View>
            
            {props.tailIcon ??
                <FontAwesomeIcon name="chevron-right" style={{ color: 'white' }} size={16}/>}
        </View>
        </TouchableOpacity>
    )
}

export default RowOption;