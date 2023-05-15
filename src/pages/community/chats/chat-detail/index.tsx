import { RouteProp, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Modal } from "react-native";
import { Avatar, Button } from "react-native-elements";


import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { createMsg } from "../../../../controller/amity/amity_chat_controller";
import { MobXProviderContext } from "mobx-react";
import RootStore from "../../../../stores";
import { getUrlFromFileId, uriToBlob } from "../../../../utils/utils";
import styles from "./styles";

import { MediaData, pickImages } from "../../../../controller/images/image_picker";
import MiniImagePicked from "../../components/MiniImagePicked";
import { FileRepository, MessageRepository, UserRepository, getChannelTopic, subscribeTopic } from "@amityco/ts-sdk";
import disposers from "../../../../controller/amity/amity_subscribe_controller";



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
  let textMessage = '';
  const messageRef = useRef<TextInput>(null);
  const scrollRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    console.log("send message " + textMessage)
    if (textMessage.trim() !== '') {
      createMsg({
        channel: channel,
        msgData:
        {
          text: textMessage
        }
      }).then(() => console.log("Message sent!"));
      console.info("Current message " + textMessage);
      messageRef.current?.clear();
      scrollRef.current?.scrollToEnd();
    }
  };

  //handle modal
  const [modalVisible, setModalVisible] = useState(false);
  const [pickedMedia, setPickedMedia] = useState<MediaData[]>([]);


  //handle amity live message
  const [messages, setMessages] = useState<Amity.Message[]>();

  useEffect(() => {
    const unsubscribe = MessageRepository.getMessages(
      { subChannelId: channel.defaultSubChannelId },
      ({ data, onNextPage, hasNextPage, loading, error }) => {
        setMessages(data);
        /*
         * this is only required if you want real time updates for messages
         * in the collection
         *
         */
        const channelUnsub=subscribeTopic(getChannelTopic(channel));
        disposers.push(channelUnsub);
      },
    );

    disposers.push(unsubscribe);

    return ()=>{
      unsubscribe();
    }
  }, [])


  return (
    
    <View style={styles.container}>
      <View style={styles.headerSection}>

        <FontAwesomeIcon name="chevron-left" size={16} onPress={() => navigation.goBack()} style={{ marginRight: 8 }} />

        <Avatar rounded size={40} source={require('../../../../../assets/images/user.jpg')} />
        <View style={{ marginLeft: 8, width: '100%' }}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{channel.displayName}</Text>
          <Text style={styles.content}>{channel.memberCount} people</Text>
        </View>
      </View>

      <ScrollView style={styles.messagesContainer} ref={scrollRef}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({ animated: true })
        }>
        {messages?.map((msg) => <MessageRow key={msg.messageId} message={msg} currentUserId={amityStore.currentuserID} />)}
        <View style={{ height: 20 }}></View>
      </ScrollView>
      <View style={styles.inputContainer}>

        <EntypoIcon name='folder-images' size={24} color='grey' style={styles.iconButton} onPress={async () => {
          const pickedImages = await pickImages({ mediaType: 'photo' });


          setPickedMedia(pickedImages);
          setModalVisible(true);

        }} />
        <EntypoIcon name='folder-video' size={24} color='grey' style={styles.iconButton} onPress={async () => {
          const pickedImages = await pickImages({ mediaType: 'video' });
          console.info(JSON.stringify(pickedImages));
        }} />
        <EntypoIcon name='attachment' size={24} color='grey' style={styles.iconButton} onPress={async () => {
          const pickedImages = await pickImages({ mediaType: 'any' });
          console.info(JSON.stringify(pickedImages));
        }} />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}

        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.mediaContainer}>
                {pickedMedia.map((e, index) => <MiniImagePicked key={index} path={e.path} columns={4} />)}
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Button title='Cancel' onPress={() => setModalVisible(false)} />

                <Button title='Send' onPress={() => {

                  // pickedMedia.map(e=>imagesData.append('files',new File( e.path)))

                  const uploadImage = async () => {
                    const imagesData = new FormData();
                    for (const file in pickedMedia) {
                      imagesData.append('files', await uriToBlob(file))
                    }
                    console.info("Form data: " + JSON.stringify(imagesData))
                    FileRepository.createImage(imagesData).then((value) => {
                      console.log("File url receive: " + value.data[0].fileUrl)

                    })
                  }
                  uploadImage()
                  // createMsg({channel:channel,msgData:{

                  // }})
                  setModalVisible(false)
                }} />
              </View>
            </View>

          </View>

        </Modal>
        <TextInput
          ref={messageRef}
          style={styles.input}
          onFocus={() => {

            scrollRef.current?.scrollToEnd();
          }}
          onChangeText={(value) => {
            textMessage = value;
          }}
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
      {msgType === 'video' && <Text style={msg.creatorId === '99' ? styles.sentMessageText : styles.receivedMessageText}>{msgData}</Text>}

    </View>
  );
}


export default ChatDetailScreen;