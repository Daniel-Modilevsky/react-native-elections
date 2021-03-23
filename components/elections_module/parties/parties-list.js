import React from 'react';
import { StyleSheet, View} from 'react-native';
import PartiesImages from './parties-image'
import PartieMini from './partie-mini'

const PartiesList = () => { 


    return (
        <View style={styles.partieList}>
            {PartiesImages.map((partie,index)=> { return <PartieMini key = {index} partie = {partie.name} image = {partie.picture} /> })}
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

export default PartiesList;

// proptype!!!!!!!!!!!!!!!!!!!!!!!
