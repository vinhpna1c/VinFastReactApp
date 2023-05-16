import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "../style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native-elements";
import { useEffect, useState } from "react";
import { CommunityRepository } from "@amityco/ts-sdk";
import CommunityItem from "../components/CommunityItem";

const DATA1 = [
    {
        id: "1",
        title: "Ngân hàng",
        img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
        id: "2",
        title: "Vận tải",
        img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },

    {
        id: "3",
        title: "Tiêu dùng",
        img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
        id: "4",
        title: "Năng lượng",
        img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
        id: "5",
        title: "Cổ Phiếu",
        img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
        id: "6",
        title: "May mặc",
        img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
    {
        id: "7",
        title: "Làm đẹp",
        img: "https://vcdn-vnexpress.vnecdn.net/2021/03/24/1920x1080-02-3443-1616544131.jpg",
    },
];

function CommunitySection(): JSX.Element {
    const [communities, setCommunities] = useState<Amity.Community[]>();
    useEffect(() => {
        const unsubscribeCommunites = CommunityRepository.getCommunities(
            {
                membership:'member',
                includeDeleted:false,
            },
            ({ data, onNextPage, hasNextPage, loading, error }) => {
                console.info("Community get: "+data.length)
                if(data.length>0)
                {
                    console.info("First community: "+JSON.stringify([...data]))
                }
                setCommunities(data);
            });

        return ()=>{
            unsubscribeCommunites();
        }
    }, []);

    return (
        <View style={styles.myCommunity}>
            <View style={styles.myCommunity_top}>
                <Text style={styles.myCommunity_title}>Cộng đồng của tôi</Text>

                <TouchableOpacity onPress={() => { }}>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        style={styles.icon_arrow}
                    ></MaterialIcons>
                </TouchableOpacity>
            </View>
            <View style={styles.myCommunity_bottom}>
                <FlatList
                    style={{ margin: 10 }}
                    data={communities}
                    renderItem={({ item ,index},) => <CommunityItem community={item}/>}
                    keyExtractor={(item)=>item.communityId}
                    horizontal
                ></FlatList>
            </View>
        </View>
    )

}

export default CommunitySection;