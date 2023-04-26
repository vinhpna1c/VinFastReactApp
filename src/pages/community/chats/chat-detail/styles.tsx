import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    headerSection: {
        elevation: 1.0,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
    messagesContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    sentMessageContainer: {
        backgroundColor: '#c5e8d8',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end',
        maxWidth: '70%',
        marginBottom: 5,
    },
    sentMessageText: {
        color: '#333',
        fontSize: 16,
    },
    receivedMessageContainer: {
        backgroundColor: '#e4e6eb',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-start',
        maxWidth: '70%',
        marginBottom: 5,
    },
    receivedMessageText: {
        color: '#333',
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#1abc9c',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    iconButton: {
        padding: 2,
        marginRight: 4,
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        color: '#292B32',
        fontSize: 17,
        fontWeight: '400',
        width: '70%'

    },
    content: {
        color: '#898E9E',
        fontSize: 15,
        fontWeight: '400',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:'80%',
        

    },

    mediaContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    miniImage:{
        height:100,
        width:100,
        marginRight:4
    }
});


export default styles;