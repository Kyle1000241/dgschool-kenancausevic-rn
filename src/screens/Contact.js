import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Contact = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Welcome to Contact Screen</Text>
    <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default About;