import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text} from 'react-native';
function LiveStream(props){
    const {navigation}=props;
    
    return (
        <SafeAreaView>
            <View>
                <Text>
                    Live Stream Page
                </Text>
            </View>
            
        </SafeAreaView>
    );
}

export default LiveStream;