import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from '../shared_module/header'
import VotesList from '../elections_module/votes/votes-list'


const StatusPage = () => { 
    return (
        <View >
            <Header navigation={'Vote'}/>
            <VotesList/>
        </View>
  );
};

const styles = StyleSheet.create({

});

export default StatusPage;