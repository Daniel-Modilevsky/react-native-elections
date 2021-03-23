import React, {useState} from 'react';
import { StyleSheet, Text, View,Pressable, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Header = (props) => { 
  const [title] = useState('בחירות ישראל 2021');
  const [buttonText] = useState(props.navigation);

  const navigatorHandler = (e) => {
    try{
      e.preventDefault();
      if(buttonText === 'Vote'){
        Actions.vote()      
      }else{
        Actions.status()
      }
    } catch(error){
       Alert.alert('Error', `${error}`,[
      { text : 'Back'}
  ]);
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
    marginTop: 35,
    height: 65,
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'red'
  },
  text: {
    marginTop: 15,
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
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