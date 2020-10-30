import React from 'react';
import LandingSearchBar from "./landing_search";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    searchBarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '75vh',
    }
}));

function LandingContent() {

    //TODO: for now, relatively large search bar and center on screen

    const classes = useStyles();

    return(
        <div>
            <div className={classes.searchBarContainer}>
                <LandingSearchBar
                    placeholder={"Enter Summoner Name"}
                />
            </div>
        </div>
    )
}

export default LandingContent;
