import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
import { useState } from "react";
import RecentTab from "./recent";
import DirectoryTab from "./directory";
import *  as ChatController from '../../../controller/amity/amity_chat_controller'

const tabs = ["Recent", "Directory"];
const tabScreens = [<RecentTab />, <DirectoryTab />];
function ChatScreen() {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    // ChatController.getAllChannel();
    // ChatController.getMessagesInChannel('64211e9ffe7f8d1599a5bde9');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>Chats</Text>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcon size={24} name="search" style={{ marginRight: 16 }} />
                    <MaterialCommunityIcon size={24} name="message-plus-outline" />
                </View>
            </View>
            <View style={styles.tabSection}>
                {tabs.map((tab, index) => (<TabItem key={index} title={tab} isSelected={index==selectedTabIndex} onTap={()=>setSelectedTabIndex(index)}/>))}
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {tabScreens[selectedTabIndex]}
            </ScrollView>
        </SafeAreaView>
    )
}



function TabItem(props: { title: string, isSelected?: boolean, onTap?: Function }): JSX.Element {
    return (
        <TouchableOpacity style={[styles.tabItem,props.isSelected?styles.selected:{}]} onPress={() => {
            if (props.onTap) {
                props.onTap();
            }
        }}>
            <Text style={props.isSelected?styles.selectedText:styles.unSelectedText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ChatScreen;