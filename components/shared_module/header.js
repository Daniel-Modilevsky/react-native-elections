import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,Pressable } from 'react-native';


const Header = (props) => { 
  const [title, setTitle] = useState('בחירות ישראל 2021');
  const [buttonText, setButtonText] = useState(props.navigation);

  const navigatorHandler = () => {
    if(buttonText === 'Vote'){
      window.location.replace('/')
    }else{
      window.location.replace('/status')
    }
  }

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
        <Pressable style={styles.button} onPress={navigatorHandler}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    header: {
    height: 65,
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'red'
  },
  text: {
    marginTop: 12,
    color: '#333',
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#2196F3',
    borderWidth: 1,
    borderColor: 'white',
    width: 50,
    height: 45,
    borderRadius: 5,
    position:'absolute',
    right: 10,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    paddingTop: 12,
    textAlign:'center'
  }
});

export default Header;