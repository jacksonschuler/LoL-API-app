import React from 'react';
import LandingSearchBar from "./landing_search";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    searchBarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 50px)',
    }
}));

function LandingContent() {

    //TODO: for now, relatively large search bar and center on screen

    const [nameInput, setNameInput] = React.useState('');

    const classes = useStyles();

    return(
        <div>
            <div className={classes.searchBarContainer}>
                <LandingSearchBar
                    placeholder={"Enter Summoner Name"}
                    getInput={(value) => setNameInput(value)}
                />
            </div>
        </div>
    )
}

export default LandingContent;
