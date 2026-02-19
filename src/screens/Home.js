import React from "react";
import { Text, View, StyleSheet, Button} from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Welcome to Home Screen</Text>
    <Button title="Go to About" onPress={() => navigation.navigate('About')} />
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