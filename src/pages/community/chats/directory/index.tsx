import { View, Text, StyleSheet } from "react-native";
import ContactItem from "../components/ContactItem";
import TextDivider from "../components/TextDivider";

function DirectoryTab(): JSX.Element {
    return (
        <View style={styles.container}>
            
            <TextDivider text="A"/>
            <ContactItem/>
            <TextDivider text="A"/>
            <ContactItem/>
            <ContactItem/>
            <ContactItem/>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:'#EBECEF',
        height:'100%'
    },
})


export default DirectoryTab;