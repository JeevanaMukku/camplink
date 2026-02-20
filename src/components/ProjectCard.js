import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProjectCard({ project }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{project.title}</Text>
      <Text>{project.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    borderWidth:1,
    borderColor:"#000",
    padding:15,
    marginBottom:10,
    borderRadius:12
  },
  title:{
    fontSize:16,
    marginBottom:5
  }
});
