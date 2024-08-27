import { StyleSheet, Image, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import  Icon  from "react-native-vector-icons/FontAwesome";

const Secondpage = ({navigation}) => {
  return (
    <View style={styles.container}>

<Text style={styles.text}>
Change the Outlook of your+
Car through Us.
    </Text>

    <View style={{width:"30%", width: "70%"}}>
      <Image source={require("../../assets/Images/SecondScreen.png")} />
    </View>

    <Text style={styles.text}>
    We offer the best services in helping you clean up
    your car in the best possible way.
    </Text>

<View style={styles.circle}>
<Icon name="circle-thin" color={"gold"} size={20} />
<Icon name="circle" color={"gold"} size={20} />
<Icon name="circle-thin" color={"gold"} size={20} />
<Icon name="circle-thin" color={"gold"} size={20} />
</View>

<TouchableOpacity style={styles.but} onPress={() => navigation.navigate('MainScreen')}>
<Text style={{ textAlign: "center"}}> Get Started </Text>
</TouchableOpacity>

  </View>
);
};


export default Secondpage

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      backgroundColor: "#151b29",
      height: "100%",
    },
  
    text: {
      color: "white",
      marginTop: "60%"
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

     img: {
width: "70px",
     }

  });
  