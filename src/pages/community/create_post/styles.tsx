import { StyleSheet } from "react-native"
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%',
        width:'100%',
        padding:16,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userSection:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    textSection:{
        // height:60,
        // backgroundColor:'yellow',
    },
    contentSection:{
        // backgroundColor:'yellow',
        flexDirection:'row',
        flexWrap:'wrap',
        width:'100%',
        height:'100%',
        justifyContent:'space-between'
    },
    bottomSection:{
        marginTop:8,
        // backgroundColor:'yellow',
        shadowOffset: {width:0,height:1},
        shadowRadius:8,
        shadowColor:'black',
        shadowOpacity:1,
        elevation: 5,
    },
    bottomOptionItem:{
        paddingHorizontal:20,
        paddingVertical:12,
    },
    miniImagePicked:{
    //  flex:1,


        

    },

})
export default styles;