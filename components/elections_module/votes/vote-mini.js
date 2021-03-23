import React ,{ useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import PartiesImages from '../parties/parties-image'

const VoteMini = (props) => { 
    const [partieName] = useState(props.partie);
    const [partieImage, setPartyImage] = useState('');
    const [partieVotes] = useState(props.votes);

    console.log(partieName);
    console.log(partieVotes);
    
    const partie = PartiesImages.find({name:partieName });
    console.log(partie);
    setPartyImage(partie.picture);


    return (
        <View style={styles.voteMini}>
            <Image source={partieImage} style={styles.voteImage} />
            <Text style={styles.votePartieHeader}> {partieName} </Text>
            <Text style={styles.partieVotes}> {partieVotes} </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    voteMini: {
        margin: 4,
        marginTop: 20
    },
   voteImage:{
        width:55,
        height: 40
    },
    votePartieHeader:{
        color:"#333",
        fontSize: 18,
        fontWeight:"bold",
        textAlign: 'left'
    },
    partieVotes:{
        color:"#666",
        fontSize: 14,
        textAlign: 'left'
    }
});

export default VoteMini;


// proptype!!!!!!!!!!!!!!!!!!!!!!!
