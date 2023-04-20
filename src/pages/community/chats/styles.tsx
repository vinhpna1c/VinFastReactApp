import { StyleSheet } from "react-native"
const styles=StyleSheet.create({
    headerText:{
        color: '#292B32',
        fontSize:20,
        fontWeight:'600',
    },
    container:{
        backgroundColor:'white',
        height:'100%',
    },
    headerSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:16,
    },
    tabSection:{
        paddingHorizontal:16,
        flexDirection:'row',
    },
    tabItem:{
        marginRight:16,
        paddingBottom:16,
    },
    selected:{
        borderBottomColor:'blue',
        borderBottomWidth:1,
        
    },
    selectedText:{
        color:'blue',
        fontSize:17,
        fontWeight:'400',
    },
    unSelectedText:{
        color:'grey',
        fontSize:17,
        fontWeight:'400',
    },
    chatSection:{

    },
 
})
export default styles;