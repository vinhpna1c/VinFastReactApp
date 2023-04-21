import { liveMessages } from "@amityco/ts-sdk";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View,Text, TextInput, TouchableOpacity,StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";


import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createTextMessage } from "../../../../controller/amity/amity_chat_controller";

type ChatDetailProps={
    channelID:string
}

function ChatDetailScreen(props:ChatDetailProps):JSX.Element
{
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
      { id: 1, sender: 'Me', text: 'Hey, how are you?' },
      { id: 2, sender: 'Friend', text: 'I\'m good, thanks. How about you?' },
      { id: 3, sender: 'Me', text: 'I\'m doing well, thanks for asking.' },
      { id: 4, sender: 'Me', text: 'Hey, how are you?' },
      { id: 5, sender: 'Friend', text: 'I\'m good, thanks. How about you?' },
      { id: 6, sender: 'Me', text: 'I\'m doing well, thanks for asking.' },
      { id: 7, sender: 'Me', text: 'Hey, how are you?' },
      { id: 8, sender: 'Friend', text: 'I\'m good, thanks. How about you?' },
      { id: 9, sender: 'Me', text: 'I\'m doing well, thanks for asking.' },
      { id: 10, sender: 'Me', text: 'Hey, how are you?' },
      { id: 11, sender: 'Friend', text: 'I\'m good, thanks. How about you?' },
      { id: 12, sender: 'Me', text: 'I\'m doing well, thanks for asking.' },
      { id: 13, sender: 'Me', text: 'Hey, how are you?' },
      { id: 14, sender: 'Friend', text: 'I\'m good, thanks. How about you?' },
      { id: 15, sender: 'Me', text: 'I\'m doing well, thanks for asking.' },

    ]);
    const navigation=useNavigation();
  
    const sendMessage = () => {
      if (message.trim() !== '') {
        setMessages([...messages, { id: messages.length + 1, sender: 'Me', text: message.trim() }]);
        createTextMessage().then(()=>console.log("Message sent!"));
        setMessage('');
      }
    };
    const [msgData, setMessageData] = useState<Amity.LiveCollection<Amity.Message>>();
  const { data: messagess = [], onNextPage, hasNextPage, loading, error } = msgData ?? {};
  console.log("Curren message length: "+msgData?.data.length)

  useEffect(() => liveMessages({ subChannelId:'64211e9ffe7f8d1599a5bde9' }, setMessageData), ['64211e9ffe7f8d1599a5bde9']);
    return (
      <View style={styles.container}>
        <View style={styles.headerSection}>
  
            <FontAwesomeIcon name="chevron-left" size={16}onPress={()=>navigation.goBack()} />

            <Avatar rounded size={40} source={require('../../../../../assets/images/user.jpg')}/>
            <View>
                <Text>Chat name</Text>
                <Text>8 people</Text>
            </View>
        </View>
        <ScrollView style={styles.messagesContainer}>
          {messages.map((msg) => (
            <View key={msg.id} style={msg.sender === 'Me' ? styles.sentMessageContainer : styles.receivedMessageContainer}>
              <Text style={msg.sender === 'Me' ? styles.sentMessageText : styles.receivedMessageText}>{msg.text}</Text>
            </View>
          ))}
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
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    headerSection:{
        
        backgroundColor:'white',
        flexDirection:'row',
        paddingHorizontal:16,
        paddingVertical:8,
        alignItems:'center',
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