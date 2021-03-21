import React from 'react';
import { Route } from 'react-router';
import StatusPage from './statusPage';
import VotePage from './votePage';


const ReactRouter =() =>{ 
    return(
        <React.Fragment>
            <Route exact path ="/" component = {VotePage}/>
            <Route path ="/status" component = {StatusPage}/>
            {/* <Route path ="/404" component = {ErrorPage}/> */}
        </React.Fragment>
    )
}

export default ReactRouter;