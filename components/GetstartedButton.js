import {
  Button,
  StyleSheet,
  Text,
  View,
  onPress,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const GetstartedButton = () => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={{backgroundColor: 'Gold'}}>
    <Text>GetstartedButton</Text>
</TouchableOpacity>
  
    </View>
  );
}

export default GetstartedButton;

const styles = StyleSheet.create({
        buttonContainer: {
          width: 320,
          height: 68,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
        },
        button: {
          borderRadius: 10,
          width: '370px',
          height: '57px',
          top: '797px',
          left: '30px',
                    alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
},
});
