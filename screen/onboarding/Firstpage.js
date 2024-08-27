import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Firstpage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: "70%" }}>
        <Image source={require("../../assets/Images/FirstScreen.png")} />
        <Text style={{ color: "white" }}>The App that cleans your Car.</Text>
      </View>

      <Text style={styles.text}>
        Welcome to Members Only Car wash where your vehicle receives the best
        attention it deserves & where every service is an experience.
      </Text>

      <View style={styles.circle}>
        <Icon name="circle" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
      </View>

      <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('SecondScreen')}>
        <Text style={{ textAlign: "center" }}> Get Started </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Firstpage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#151b29",
    height: "100%",
  },

  text: {
    color: "white",
    marginTop: "60%",
  },

  circle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 45,
  },

  but: {
    backgroundColor: "gold",
    padding: "3%",
    marginTop: "15%",
  },
});
