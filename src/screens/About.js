import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

const aboutData = [
  {
    id: '1',
    title: "About Us",
  },
  {
    id: '2',
    title: 'Our Mission',
  },
  {
    id: '3',
    title: 'Contact Us',
  },
];



const About = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={aboutData}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={item => item.id}
    />
    <Text>Welcome to About Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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