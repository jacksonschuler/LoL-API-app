import React, {useEffect} from 'react';
import getSummonerProfile from "../scripts/getUserProfile";

function UserPage(props) {

    const [summonerName, setSummonerName] = React.useState('');
    
    // TODO: only run a single time when the name has been received rather than running where the name is an empty string

    useEffect(() => {
        setSummonerName(props.match.params.name);
        if (summonerName !== '' || props.match.params.name !== undefined) {
            getSummonerProfile(summonerName)
        }
    });

    return(
        <>
            <p>User Page</p>
            <p>{props.match.params.name}</p>
        </>
    );
}

export default UserPage;
