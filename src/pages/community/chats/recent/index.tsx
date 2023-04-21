import { View, Text } from "react-native";
import ChatItem from "../components/ChatItem";
import { useContext, useEffect } from "react";
import { getAllChannel } from "../../../../controller/amity/amity_chat_controller";
import { MobXProviderContext, observer } from "mobx-react";
import RootStore from "../../../../stores";
import { createQuery, queryChannels, runQuery } from "@amityco/ts-sdk";

function RecentTab(): JSX.Element {
    const { amityChannelStore } = useContext(MobXProviderContext) as RootStore;
    useEffect(()=>{
        const query = createQuery(queryChannels, {
            membership: 'member',
            types: [
                'community',
                'conversation'
            ],
            isDeleted:false,
          });
          runQuery(query,({data,...option})=>{
            if(data!==undefined)
            {
                amityChannelStore.channels=[...data];
            }
            
          })
        
    },[])
    
    return (
        <View>
           {amityChannelStore.channels.map((channel)=><ChatItem key={channel.channelId} channelData={channel}/>)}            
        </View>
    )
}

export default observer(RecentTab);