/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white'
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    flex: 1,

  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 4,
    alignItems: 'center'
  },
  avatar: {
    height: 48,
    width: 48,
    marginRight: 8,
  },

  headerText: {
    flexDirection: "column",
    justifyContent: 'center',
    marginBottom:16
  },
  mediaContainer:{
    // backgroundColor:'yellow',
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  username: {
    fontWeight: "bold",
    marginBottom: 2
  },
  timestamp: {
    color: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  topImageContent:{
    
    
    height:300,
    marginBottom:4,
    resizeMode:'cover',
    
  },
  otherImageContent:{
      flex:1,
    marginRight:2,
    height:100,
    
    
  
  },
  content: {
    // backgroundColor:'red',
    fontSize: 16,
    fontFamily: 'sans-serif',
    marginBottom: 4,
    // margin: 20,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",

    margin: 10,
  },
  actionContainer: {
    marginRight: 32,
  },
  action: {
    marginLeft: 10,
  },
  actionIcon: {
    color: "#333",
  },
  actionCount: {
    marginLeft: 5,
    marginRight: 32,
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
 
  reactionBtnStyle:{
    color:'#404040'
  }
});

export default styles;
