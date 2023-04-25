import { liveChannel, liveMessages } from "@amityco/ts-sdk";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { Avatar } from "react-native-elements";


import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createTextMessage, getChannelByID, getMessagesInChannel } from "../../../../controller/amity/amity_chat_controller";
import { MobXProviderContext } from "mobx-react";
import RootStore from "../../../../stores";
import { getUrlFromFileId } from "../../../../utils/utils";
import styles from "./styles";
import { TextInputProps } from "@react-native-material/core";


export type ChatDetailProps = {
  channelDetail: Amity.Channel
}
export type ChatDetailRouteProps = RouteProp<ChatDetailProps, 'chat-detail'>

function ChatDetailScreen({ route }: { route: ChatDetailRouteProps }): JSX.Element {
  //handle route params
  const params = route.params as ChatDetailProps;
  const navigation = useNavigation();
  const channel = params.channelDetail;
  //handle mobx
  const { amityStore } = useContext(MobXProviderContext) as RootStore;
  //handle send message  
  const messageRef = useRef<TextInput>(null);
  const [message, setMessage] = useState('');
  const sendMessage = () => {
    if (message.trim() !== '') {
      createTextMessage({ channel: channel, text: message }).then(() => console.log("Message sent!"));
      setMessage('');
    }
  };

  //handle amity live message
  const [msgData, setMessageData] = useState<Amity.LiveCollection<Amity.Message>>();
  const { data: messagess = [], onNextPage, hasNextPage, loading, error } = msgData ?? {};
  useEffect(() => liveMessages({ subChannelId: channel.defaultSubChannelId, includeDeleted: false, limit: 20 }, (respond) => {
    setMessageData(respond);
  },), [channel.defaultSubChannelId]);
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>

        <FontAwesomeIcon name="chevron-left" size={16} onPress={() => navigation.goBack()} style={{ marginRight: 8 }} />

        <Avatar rounded size={40} source={require('../../../../../assets/images/user.jpg')} />
        <View style={{marginLeft:8,width:'100%'}}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{channel.displayName}</Text>
          <Text style={styles.content}>{channel.memberCount} people</Text>
        </View>
      </View>
      <ScrollView style={styles.messagesContainer}>
        {msgData?.data.reverse().map((msg) => <MessageRow message={msg} currentUserId={amityStore.currentuserID} />)}
        <View style={{ height: 20 }}></View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          // ref={messageRef}
          style={styles.input}
          // value={message}
          onChangeText={(value)=>{setMessage(value)
          console.info(value)}}
          placeholder="Type your message here"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const MessageRow = (data: { message: Amity.Message, currentUserId: string }): JSX.Element => {

  const msg = data.message;
  const msgType = msg.dataType;
  const [msgData, setMsgData] = useState('');

  if (msgType === 'text') {
    useEffect(() => {
      setMsgData((msg.data as Amity.ContentDataText).text);
    }, []);

  }
  else if (msgType === 'image') {
    const fileID = (msg.data as Amity.ContentDataImage).fileId;
    useEffect(() => {
      getUrlFromFileId(fileID).then((value) => {
        setMsgData(value + '?size=large')
        console.info("Message type: " + msgType + "-" + "Url: " + msgData)
      })
    }, [])
  }
  return (
    <View key={msg.messageId} style={msg.creatorId === data.currentUserId ? styles.sentMessageContainer : styles.receivedMessageContainer}>
      {msgType === 'text' && <Text style={msg.creatorId === '99' ? styles.sentMessageText : styles.receivedMessageText}>{msgData}</Text>}
      {msgType === 'image' &&
        <View >
          <Image source={{ uri: msgData }} style={{ height: 200, width: 200 }} />
        </View>}
      {/* {msgType==='video' && <Text style={msg.creatorId === '99' ? styles.sentMessageText : styles.receivedMessageText}>{msgData}</Text>} */}

    </View>
  );
}


export default ChatDetailScreen;