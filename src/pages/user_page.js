import React, {useEffect} from 'react';

function UserPage(props) {

    // TODO API GET summoner info
    useEffect(() => {
    });

    return(
        <>
            <p>User Page</p>
            <p>{props.match.params.name}</p>
        </>
    );
}

export default UserPage;
