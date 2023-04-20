import { View, Text, StyleSheet } from "react-native";

type TextDividerProps = {
    text: string,
}
function TextDivider(props: TextDividerProps): JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{props.text}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingVertical:4,
        backgroundColor:'#00000000',
    },
    textStyle:{
        color:'#898E9E',
        fontSize:15,
        fontWeight:'400',
    }
})

export default TextDivider;