import { View, Text } from "react-native";
import ChatItem from "../components/ChatItem";
import { useContext, useEffect, useState } from "react";
import { getAllChannel } from "../../../../controller/amity/amity_chat_controller";
import { MobXProviderContext, observer } from "mobx-react";
import RootStore from "../../../../stores";
import { ChannelRepository, createQuery,  getChannelTopic,  runQuery, subscribeTopic } from "@amityco/ts-sdk";


function RecentTab(): JSX.Element {
    const chatDisposers: Amity.Unsubscriber[] = [];
    const { amityChannelStore } = useContext(MobXProviderContext) as RootStore;
    const [channels, setChannels] = useState<Amity.Channel[]>();
    const subscribedChannels: Amity.Channel['channelId'][] = [];
    useEffect(()=>{
        const unsubscribe=ChannelRepository.getChannels({}, ({ data, onNextPage, hasNextPage, loading, error }) => {
            setChannels(data);
            if(hasNextPage){
                onNextPage();
            }

            channels?.forEach((c)=>{
                if (!subscribedChannels.includes(c.channelId) && !c.isDeleted) {
                    subscribedChannels.push(c.channelId);
              
                    chatDisposers.push(subscribeTopic(getChannelTopic(c)));
                  }
            })
            
          },)

          chatDisposers.push(unsubscribe);
          return ()=>{
            chatDisposers.forEach(fn=>{
                console.info("Unsubscribe channel "+fn.name)
                fn()})
          }
    },[])
    return (
        <View>
           {channels?.map((channel)=><ChatItem key={channel.channelId} channelData={channel} />)}            
        </View>
    )
}

export default observer(RecentTab);