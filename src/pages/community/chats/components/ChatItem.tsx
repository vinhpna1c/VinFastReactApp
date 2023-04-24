import { useNavigation } from "@react-navigation/native";
import { channel } from "expo-updates";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Avatar, Divider } from "react-native-elements";
import NavigationType from "../../../../controller/navigator/NavigationType";
import { getUrlFromFileId } from "../../../../utils/utils";
import { useEffect, useState } from "react";
import { getTimeDiffString } from "../../../../utils/utils";
import ChatDetailScreen, { ChatDetailProps } from "../chat-detail";


type ChatItemProps = {
    channelData: Amity.Channel,
}

function ChatItem(props: ChatItemProps): JSX.Element {
    const navigation = useNavigation();
    const channel = props.channelData;
    const [avatarURL, setAvatarURL] = useState<string | undefined>(undefined);
    useEffect(() => {
        getUrlFromFileId("Url: " + channel.avatarFileId ?? "").then(
            (url) => {
                if (url.length > 0) {
                    setAvatarURL(url)   
                }else{
                    setAvatarURL(undefined);
                }                
            }
        )
    }, [])


    const lastActivity=getTimeDiffString(channel.lastActivity);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('chat-detail',{channelDetail:channel})}>
            <View style={styles.chatItem}>
                <Avatar
                    size={36}
                    rounded
                    activeOpacity={0.7}
                    source={require('../../../../../assets/images/user_placeholder.png')}
                    title={channel.displayName ? channel.displayName.substring(0, 2) : 'CG'}
                    
                // containerStyle={{backgroundColor:'grey'}} 
                />
                <View style={{ marginLeft: 8, flex: 1 }}>
                    <View style={styles.rowSection}>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.leftText,styles.title]} >{channel.displayName}</Text>
                        <Text style={styles.content}>{lastActivity}</Text>
                    </View>
                    <View style={{ ...styles.rowSection, marginBottom: 8 }}>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.leftText,styles.content]} >Danny: @Jackie OMG dude, you’re a rock star!!</Text>
                        <MessageCountItem messageCount={0} />
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

    },
    title:{
        color:'#292B32',
        fontSize:17,
        fontWeight:'400',
        
    },
    content:{
        color:'#898E9E',
        fontSize:15,
        fontWeight:'400',
    }


}
)

export default ChatItem;