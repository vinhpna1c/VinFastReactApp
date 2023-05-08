import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
      backgroundColor:'white',
    },
    commentSection: {
        borderColor:'#f5f5f5',
        borderTopWidth:1,
        backgroundColor: "white",
        padding: 10,
        
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
      },
      addComment:{
        borderRadius:16,
        backgroundColor:'#f5f5f5',
        width:'85%',
        paddingHorizontal:8,
        paddingVertical:4,


      },
});

export default styles;