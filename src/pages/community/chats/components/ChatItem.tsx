import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Avatar, Divider } from "react-native-elements";




function ChatItem(): JSX.Element {
    const navigation=useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('chat-detail')}>
            <View style={styles.chatItem}>
                <Avatar size={40} rounded source={require('../../../../../assets/images/user.jpg')} />
                <View style={{ marginLeft: 8, flex: 1 }}>
                    <View style={styles.rowSection}>
                        <Text>Public Community</Text>
                        <Text>8:00pm</Text>
                    </View>
                    <View style={{ ...styles.rowSection, marginBottom: 8 }}>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.leftText} >Danny: @Jackie OMG dude, you’re a rock star!!</Text>
                        <MessageCountItem messageCount={32} />
                    </View>
                    <Divider color='#EBECEF' width={1} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

function MessageCountItem(props: { messageCount: number }): JSX.Element {
    const visible = props.messageCount > 0;
    return (
        <>
            {visible &&
                <View style={styles.messageCountContaier}>
                    <Text style={{ color: 'white', fontSize: 13, fontWeight: '400' }}>
                        {props.messageCount < 100 ? props.messageCount : '+99'}
                    </Text>
                </View>
            }
        </>
    )
}
const styles = StyleSheet.create({
    chatItem: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 12,
        minHeight: 80,
    },
    rowSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    leftText: {
        maxWidth: '70%',
    },
    messageCountContaier: {
        backgroundColor: 'red',
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 2,

    }

}
)

export default ChatItem;