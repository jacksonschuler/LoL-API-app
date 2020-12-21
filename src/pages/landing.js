import React from 'react';
import LandingNavBar from "../components/landing/landing_navbar";
import LandingContent from "../components/landing/landing_content";
import Disclaimer from "../components/disclaimer";

function Landing() {
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
