import { View, Text, StyleSheet } from "react-native";
import ContactItem from "../components/ContactItem";
import TextDivider from "../components/TextDivider";
import { useEffect, useState } from "react";
import { UserRepository } from "@amityco/ts-sdk";

function DirectoryTab(): JSX.Element {
    const [users, setUsers] = useState<Amity.User[]>([]);

    const userMapping = new Map<string, Amity.User[]>();

    useEffect(() => {
        const userUnsubscribe = UserRepository.getUsers({}, ({ data, onNextPage, hasNextPage, loading, error }) => {
            console.info("Current user in list: " + data.length)
            setUsers(data)
            if (hasNextPage) {
                onNextPage();
            }
        },)
        return () => {
            console.info("Call unsubscribe user repository")
            userUnsubscribe();
        }

    }, [])


    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const firstLetter = (user.displayName ?? " ")[0];

        if (userMapping.has(firstLetter)) {
            userMapping.set(firstLetter, [user, ...userMapping.get(firstLetter)!])
        }
        else {
            userMapping.set(firstLetter, [user])
        }
    }

    console.log("User mapping: " + JSON.stringify(userMapping.get("1")))
    return (
        <View style={styles.container}>
            {Array.from(userMapping.keys()).map((key) => {
                return (
                    <>
                        <TextDivider text={key} />
                        {userMapping.get(key)?.
                            sort((a, b) => { return (a.displayName ?? "").localeCompare(b.displayName ?? "") }).
                            map((user) =>
                                (<ContactItem displayName={user.displayName} avatarURL={user.avatarCustomUrl} />))}
                    </>
                )
            })}

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBECEF',
        height: '100%'
    },
})


export default DirectoryTab;