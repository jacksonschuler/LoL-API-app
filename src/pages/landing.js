import React from 'react';
import LandingSearchBar from "../components/landing/landing_search";

function Landing() {

    //TODO: for now, relatively large search bar and center on screen

    const [nameInput, setNameInput] = React.useState('');

    return(
        <>
            <LandingSearchBar
                placeholder={"Enter Summoner Name"}
                getInput={(value) => setNameInput(value)}
            />
        </>
    )
}

export default Landing;
