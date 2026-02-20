import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SwipeCard({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.codename}>{user.codename}</Text>
      <Text>Skills: {user.skills?.join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    flex:1,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:12,
    padding:20,
    backgroundColor:"#fff"
  },
  codename:{
    fontSize:18,
    marginBottom:10
  }
});
