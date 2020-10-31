import React from 'react';
import {getSummonerProfile} from '../scripts/getUserProfile'

function UserPage(props) {

    // TODO API GET summoner info
    // if they exist -> display information
    // else --> 404 not found

    return(
        <>
            <p>User Page</p>
            <p>{props.match.params.name}</p>
            {(props.match.params.name !== undefined ? (getSummonerProfile(props.match.params.name)) : ('gamer'))}
        </>
    );
}

export default UserPage;
