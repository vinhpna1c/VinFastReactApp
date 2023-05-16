import { StyleSheet, View,Text } from "react-native";
import { Avatar } from "react-native-elements";


type ContactItemProps = {
    avatarURL?: string,
    displayName?: string,
}

function ContactItem(props: ContactItemProps): JSX.Element {
    return (
        <View style={styles.contactContainer}>
            <Avatar rounded size={40} 
            // source={require('../../../../../assets/images/user.jpg')}
            title={props.displayName!=undefined?props.displayName[0]:"0"}
            containerStyle={{backgroundColor:'grey',justifyContent:'center',}}
            titleStyle={{color:'white'}}
             />
            <Text style={styles.nameText}>{props.displayName??"Display name"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contactContainer: {
        flexDirection:'row',
        paddingHorizontal:16,
        paddingVertical:8,
        alignItems:'center',
        backgroundColor:'white'
    },
    avatarStyle:{

    },
    nameText:{
        marginLeft:8,
    }
}
)

export default ContactItem;