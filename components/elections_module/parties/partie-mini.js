import React ,{ useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert} from 'react-native';

const PartieMini = (props) => { 
    const [partieName] = useState(props.partie);
    const [partieImage] = useState(props.image);
    
    async function Vote(){
        try{
            const response = await fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${partieName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) { 
                Alert.alert('You have voted!', `Voted for ${partieName}`,[
                    { text : 'Back'}
                ]);
            } else{
                throw 'Not voted'
            }
        }
        catch(error){
            Alert.alert('Error', `${error}`,[
                { text : 'Back'}
            ]);        
        }
    }

    const voteHandler = (e) => {
        try{
            e.preventDefault();
            Vote();
        }  catch(error){
            Alert.alert('Error', `${error}`);
        }
    }

    return (
        <View style={styles.partieMini}>
            <Text style={styles.partieHeader}> {partieName} </Text>
            <Pressable onPress={voteHandler}>
                <Image source={partieImage} style={styles.partieImage}  />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    partieMini: {
        margin: 4,
        marginTop: 20
    },
    partieImage:{
        width:190,
        height: 125
    },
    partieHeader:{
        color:"#333",
        fontSize: 18,
        fontWeight:"bold",
        textAlign: 'center'
    }
});

export default PartieMini;


// proptype!!!!!!!!!!!!!!!!!!!!!!!
