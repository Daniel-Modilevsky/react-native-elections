import React from 'react';
import StatusPage from './statusPage';
import VotePage from './votePage';
import { Router, Scene } from 'react-native-router-flux'

const ReactRouter =() =>{ 
    return(
        <Router>
            <Scene key = "root">
                <Scene key = "vote" component = {VotePage} initial = {true} />
                <Scene key = "status" component = {StatusPage} />
            </Scene>
        </Router>
    )
}

export default ReactRouter;