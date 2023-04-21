import { MessageContentType, createMessage, createQuery, getChannel, liveMessages, queryChannels, queryMessages, runQuery } from "@amityco/ts-sdk";

const getAllChannel=()=>{
    const query = createQuery(queryChannels, {
        membership: 'member',
        types: [
            // 'live',
            'community',
            // 'conversation'
        ],
        isDeleted:false,
      });
      
      runQuery(query, ({ data: channels, ...options }) => console.log(channels, options));
}
const getChannelByID=async(channelID:string)=>{
    const channel=await getChannel(channelID);
    console.log(channel);
}
const getMessagesInChannel=async(channelID:string)=>
{
   console.log( JSON.stringify( await queryMessages({subChannelId:channelID})));
}
const createTextMessage=async()=>{
    const textMessage = {
        subChannelId: '64211e9ffe7f8d1599a5bde9',
        dataType: MessageContentType.TEXT,
        data: {
          text: 'Test From react Native',
        },
        
        metadata: {
          data: 'anything',
        },
      };

     const {data:msg} =await createMessage(textMessage);
     console.log("Message sent: "+msg)
    
}
export {
    getAllChannel,
    getChannelByID,
    getMessagesInChannel,
    createTextMessage
}
