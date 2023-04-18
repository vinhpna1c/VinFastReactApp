/** @format */

import React, { useState, useContext } from "react";
import { inject, observer, useLocalStore,MobXProviderContext } from "mobx-react";

import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import AmityStore from "../../stores/amity/AmityStore";
import RootStore from "../../stores";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {amityStore}=useContext(MobXProviderContext);
  

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://vinfast.vn/wp-content/uploads/2022/09/vinfast-home.png",
        }}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          //replce with username later
          await amityStore.login(email.length>0?email:'99');
          navigation.navigate("signned");
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* <Button title="Go to reeel" onPress={()=>{console.log(email)}}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});

export default (observer(LoginScreen));
