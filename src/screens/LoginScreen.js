import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import API from "../services/api";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      alert("Login success");
      navigation.navigate("Main");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusLink</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input}/>
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input}/>
      <Button title="Login" onPress={login} />
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", padding:20, backgroundColor:"#fff"},
  title: { fontSize:24, marginBottom:20, textAlign:"center" },
  input: { borderWidth:1, borderColor:"#000", padding:10, marginBottom:10 }
});
