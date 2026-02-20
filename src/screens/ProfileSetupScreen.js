import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import API from "../services/api";

export default function ProfileSetupScreen({ navigation }) {
  const [skills, setSkills] = useState("");

  const saveProfile = async () => {
    await API.patch("/users/me", {
      skills: skills.split(",")
    });
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter skills (comma separated)"
        onChangeText={setSkills}
        style={styles.input}
      />
      <Button title="Save Profile" onPress={saveProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:"center", padding:20, backgroundColor:"#fff"},
  input:{ borderWidth:1, borderColor:"#000", padding:10, marginBottom:10 }
});
