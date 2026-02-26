import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Swiper from "react-native-swiper";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    
    <Swiper
      autoplay
      activeDotColor="#22D4FF"
      autoplayTimeout={5}
    >
      <View style={styles.slide}>
        <Image source={require('../assets/banner1')}
          style={styles.imgItem}
          resizeMode="cover" />
      </View>
      <View >
        <Image source={require('../assets/banner2')}
          style={styles.imgItem}
          resizeMode="cover" />
      </View>
      <View>
        <Image source={require('../assets/banner3')}
          style={styles.imgItem}
          resizeMode="cover" />
      </View>
    </Swiper>

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
  imgItem: {
    width: "100%",
    height: "100%",
  },
  slide: {
    flex: 1,

  },
});

export default Home;