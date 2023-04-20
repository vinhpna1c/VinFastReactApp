import { createQuery, getChannel, liveMessages, queryChannels, queryMessages, runQuery } from "@amityco/ts-sdk";

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

export {
    getAllChannel,
    getChannelByID,
    getMessagesInChannel
}
