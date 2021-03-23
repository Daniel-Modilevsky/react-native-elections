import React, {useState, useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import VoteMini from './vote-mini'

const VotesList = () => { 
    const [parties, setParties] = useState([]);
    const [pollStatus, setPollStatus] = useState([]);
    const [totalVotes, seTotalVotes] = useState(0);

    useEffect(()=>{
        getAllParties();
        getPollStatus();

        pollStatus.map((partie,index)=> {
            console.log(index);
            console.log(partie.partie);
            console.log( (partie.votes / totalVotes) * 100 );
         })
    },[])

    async function getAllParties(){
        try{
            const response = await fetch("https://isr-elections.herokuapp.com/api/parties")            
            if (response.ok) { 
                let json = await response.json();
                setParties(json.parties)
            }
        }
        catch(error){
            console.log(`error - getAllParties - ${error}`);
        }
    }

    async function getPollStatus(){
        try{
            const response = await fetch("https://isr-elections.herokuapp.com/api/parties/poll-status")            
            if (response.ok) { 
                let json = await response.json();
                let array = [];
                let sum = 0;

                parties.map((partie,index) => {
                    array.push({
                        id: index,
                        partie: partie.id,
                        votes: json[parties[index].id].currentVotes
                    }) 
                    sum += array[index].votes;
                });

                array.sort(function(a, b) {
                    return b.votes - a.votes;
                });
                setPollStatus(array.slice(0,5));
                seTotalVotes(sum);
            }
        }
        catch(error){
            console.log(`error - getPollStatus - ${error}`);
        }
    }

    return (
        <View style={styles.partieList}>
            {pollStatus.map((partie,index)=> { return <VoteMini key = {index} partie = {partie.partie} votes = {partie.votes / totalVotes * 100} /> })}
        </View>
  );
};


const styles = StyleSheet.create({
    partieList: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
});

export default VotesList;

// proptype!!!!!!!!!!!!!!!!!!!!!!!
