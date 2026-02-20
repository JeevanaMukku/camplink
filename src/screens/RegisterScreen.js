import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import API from "../services/api";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await API.post("/auth/register", { email, password });
      alert("Registered! Please login.");
      navigation.navigate("Login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="College Email" onChangeText={setEmail} style={styles.input}/>
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input}/>
      <Button title="Register" onPress={register} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", padding:20, backgroundColor:"#fff"},
  input: { borderWidth:1, borderColor:"#000", padding:10, marginBottom:10 }
});
