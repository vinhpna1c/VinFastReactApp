/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container:{
  marginTop:16,
  padding:8,
  backgroundColor:'white'
},
container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'white',
},
imageThumbnail: {
  justifyContent: 'center',
  alignItems: 'center',
  height: 100,
  width:100,
flex:1,
  
},
  header: {
    flexDirection: "row",
    // alignItems: "space-between",
    justifyContent:'space-between',
    // backgroundColor:'red',
        
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    
  },
  headerText: {
    flexDirection: "column",
    justifyContent:'center',
    
    margin: 16,
  },
  username: {
    fontWeight: "bold",
  },
  timestamp: {
    color: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    // backgroundColor:'red',
    fontSize:16,
    fontFamily:'sans-serif',
    marginBottom:4,
    // margin: 20,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",

    margin: 10,
  },
  actionContainer:{
    marginRight:32,
  },
  action: {
    marginLeft: 10,
  },
  actionIcon: {
    color: "#333",
  },
  actionCount: {
    marginLeft: 5,
    marginRight:32,
    color: "#333",
  },

  shareButton: {
    backgroundColor: "#3b5998",
    borderRadius: 5,
    padding: 5,
    marginLeft: "auto",
  },
  shareButtonText: {
    color: "#fff",
  },
  commentSection: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
