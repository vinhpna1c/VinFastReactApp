/** @format */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    padding:16,
    color:'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    color: "#FFFCFC",
    fontSize: 18,
    fontWeight: '600'
  },
  whiteText: {
    color: 'white'
  },
  avatarSection:{
    alignItems:'center',
    marginTop:32,
  },
  avatarName:{
    fontSize:18,
    fontWeight:'600',
    marginVertical:16,
  },
  tagName:{
    fontSize:16,
    fontWeight:'400'
  },
  optionSection:{
    marginTop:20,
  },
  optionItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // paddingBottom:4,
    // backgroundColor:'yellow',
    paddingHorizontal:8,
    marginBottom:12
  },
  optionTitle:{
    fontSize:17,
    fontWeight:'500',
  },
  iconStyle:{
    color:'white',
    marginRight:10,
  },
  signOutStyle:{
    color:'red',
    marginRight:10,
   
    
  }

});
export default styles;
