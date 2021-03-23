import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from '../shared_module/header'
import PartiesList from '../elections_module/parties/parties-list'

const VotePage = () => { 

    return (
        <View >
            <Header navigation={'Status'}/>
            <PartiesList/>
        </View>
  );
};


const styles = StyleSheet.create({

});

export default VotePage;


// proptype!!!!!!!!!!!!!!!!!!!!!!!
