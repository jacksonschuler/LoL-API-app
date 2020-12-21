import React from 'react';
import LandingNavBar from "../components/landing/landing_navbar";
import LandingContent from "../components/landing/landing_content";
import Disclaimer from "../components/disclaimer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
}));

function Landing() {
    const classes = useStyles();
    return(
        <div>
            <LandingNavBar/>
            <div>
                <LandingContent/>
            </div>
            <Disclaimer/>
        </div>
    )
}

export default Landing;
