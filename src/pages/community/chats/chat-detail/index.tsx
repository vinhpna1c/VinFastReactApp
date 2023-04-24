import { liveChannel, liveMessages } from "@amityco/ts-sdk";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";


import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createTextMessage, getChannelByID, getMessagesInChannel } from "../../../../controller/amity/amity_chat_controller";
import { MobXProviderContext } from "mobx-react";
import RootStore from "../../../../stores";


export type ChatDetailProps = {
  channelDetail: Amity.Channel
}
export type ChatDetailRouteProps = RouteProp<ChatDetailProps, 'chat-detail'>

function ChatDetailScreen({ route }: { route: ChatDetailRouteProps }): JSX.Element {
  const params = route.params as ChatDetailProps;
  const channel = params.channelDetail;
  console.info("Channel: " + JSON.stringify(channel.displayName))
  const [message, setMessage] = useState('');
  const {amityStore}=useContext(MobXProviderContext)as RootStore;
  

  const navigation = useNavigation();

  const sendMessage = () => {
    if (message.trim() !== '') {
      // setMessages([...messages, { id: messages.length + 1, sender: 'Me', text: message.trim() }]);
      createTextMessage({channel:channel,text:message}).then(() => console.log("Message sent!"));
      setMessage('');
    }
  };

  const [msgData, setMessageData] = useState<Amity.LiveCollection<Amity.Message>>();
  const { data: messagess = [], onNextPage, hasNextPage, loading, error } = msgData ?? {};
  console.info("Curren message length: " + msgData?.data.length)
  
  

  useEffect(() => liveMessages({ subChannelId: channel.defaultSubChannelId, includeDeleted:false,limit:20}, (respond)=>{
    console.log("Respond get: "+JSON.stringify(respond.data.length))
    setMessageData(respond);
    // getMessagesInChannel(channel.channelId);
  },), [channel.defaultSubChannelId]);
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>

        <FontAwesomeIcon name="chevron-left" size={16} onPress={() => navigation.goBack()} />

        <Avatar rounded size={40} source={require('../../../../../assets/images/user.jpg')} />
        <View>
          <Text>{channel.displayName}</Text>
          <Text>{channel.memberCount} people</Text>
        </View>
      </View>
      <ScrollView style={styles.messagesContainer}>
        {msgData?.data.reverse().map((msg) => <MessageRow message={msg} currentUserId={amityStore.currentUser} />)}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MessageRow(data: { message: Amity.Message ,currentUserId:string}): JSX.Element {
  const msg = data.message;
  let msgData = '';
  if (msg.dataType === 'text') {
    msgData = (msg.data as Amity.ContentDataText).text;
  }
  else if (msg.dataType === 'image') {
    msgData = (msg.data as Amity.ContentDataImage).fileId;
  }
  return (
    <View key={msg.messageId} style={msg.creatorId === '99' ? styles.sentMessageContainer : styles.receivedMessageContainer}>
      <Text style={msg.creatorId === '99' ? styles.sentMessageText : styles.receivedMessageText}>{msgData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerSection: {

    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  sentMessageContainer: {
    backgroundColor: '#c5e8d8',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    maxWidth: '70%',
    marginBottom: 5,
  },
  sentMessageText: {
    color: '#333',
    fontSize: 16,
  },
  receivedMessageContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    maxWidth: '70%',
    marginBottom: 5,
  },
  receivedMessageText: {
    color: '#333',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#1abc9c',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default ChatDetailScreen;