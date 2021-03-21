import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from '../shared_module/header'


const VotePage = () => { 
    const [parties, setParties] = useState([]);

    useEffect(()=>{
        getAllParties();
    },[])

    async function getAllParties(){
        try{
            const response = await fetch("https://isr-elections.herokuapp.com/api/parties", {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response);
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getAllUsers - ${error}`);
        }
    }

    return (
        <View >
            <Header navigation={'Status'}/>
        </View>
  );
};


const styles = StyleSheet.create({

});

export default VotePage;