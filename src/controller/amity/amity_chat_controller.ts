import { MessageContentType, createMessage, createQuery, getActiveClient, getChannel, liveMessages, queryChannels, queryMessages, runQuery } from "@amityco/ts-sdk";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import RootStore from "../../stores";
import { channel } from "expo-updates";



const getAllChannel = () => {



  //
}
const getChannelByID = async (channelID: string) => {
  const channel = await getChannel(channelID);

}
const getMessagesInChannel = async (channelID: string) => {
  console.log("call query channel: " + channelID)
  console.log("Message query: " + JSON.stringify((await queryMessages({ subChannelId: channelID, includeDeleted: false, })).data.length));
}

type MessageForm = {

  dataType?: Amity.MessageContentType,

  text?: string,
  fileId?: string,


  metadata?: Object,
}
const createMsg = async (data: { channel: Amity.Channel, msgData: MessageForm }) => {
  const { msgData, channel } = data;
  const sendMsg = {
    subChannelId: channel.defaultSubChannelId,
    dataType: msgData.dataType??'text',
    data: {
      text: msgData.text,
      
    },
    fileId:msgData.fileId,
    metadata: {
      data: 'anything',
    },
  };
  console.log(JSON.stringify(sendMsg))

  const { data: msg } = await createMessage(sendMsg);

  console.log("Message sent: " + JSON.stringify(msg))

}
export {
  getAllChannel,
  getChannelByID,
  getMessagesInChannel,
  createMsg
}
