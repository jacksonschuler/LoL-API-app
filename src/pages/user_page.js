import React from 'react';

function UserPage(props) {

    // TODO API GET summoner info
    // if they exist -> display information
    // else --> 404 not found

    return(
        <>
            <p>User Page</p>
            <p>{props.match.params.name}</p>
        </>
    );
}

export default UserPage;
