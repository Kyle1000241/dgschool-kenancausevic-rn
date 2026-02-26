import React from "react";
import { Text, View, StyleSheet, Button, FlatList, Image  } from "react-native";
import Swiper from "react-native-swiper";


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
    
    
    <Swiper
          autoplay
          activeDotColor="#ff7322"
          autoplayTimeout={5}
        >
          <View style={styles.slide}>
            <Image source={require('../assets/banner4')}
              style={styles.imgItem}
              resizeMode="cover" />
          </View>
          <View >
            <Image source={require('../assets/banner5')}
              style={styles.imgItem}
              resizeMode="cover" />
          </View>
          <View>
            <Image source={require('../assets/banner6')}
              style={styles.imgItem}
              resizeMode="cover" />
          </View>
        </Swiper>

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
    imgItem: {
    width: "100%",
    height: "100%",
  },
  slide: {
    flex: 1,

  },
});

export default About;