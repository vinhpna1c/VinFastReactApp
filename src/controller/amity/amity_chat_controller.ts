import { MessageContentType, createMessage, createQuery, getChannel, liveMessages, queryChannels, queryMessages, runQuery } from "@amityco/ts-sdk";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import RootStore from "../../stores";
import { channel } from "expo-updates";



const getAllChannel=()=>{

   
      
   //
}
const getChannelByID=async(channelID:string)=>{
    const channel=await getChannel(channelID);
    console.log(channel);
}
const getMessagesInChannel=async(channelID:string)=>
{
  console.log("call query channel: "+channelID)
   console.log( "Message query: "+JSON.stringify( (await queryMessages({subChannelId:channelID,includeDeleted:false,})).data.length));
}
const createTextMessage=async(data:{channel:Amity.Channel,text:string})=>{
  const {text,channel}  =data;
  const textMessage = {
        subChannelId: channel.defaultSubChannelId,
        dataType: MessageContentType.TEXT,
        data: {
          text: text,
        },
        
        metadata: {
          data: 'anything',
        },
      };

     const {data:msg} =await createMessage(textMessage);
     
     console.log("Message sent: "+JSON.stringify(msg))
    
}
export {
    getAllChannel,
    getChannelByID,
    getMessagesInChannel,
    createTextMessage
}
