import { View,Text } from "react-native"
import Reels from 'react-native-instagram-reels';

const ReelScreen=()=>{
    const DATA=[{
        "_id":"1",
        "uri":"https://api.amity.co/api/v3/files/642bc4466f323b01dd6d7765/download"
    }];
    return (
        <View>
            <Text>Reel Screen</Text>
            <Reels videos={DATA}></Reels>
        </View>
    )
}

export default ReelScreen;