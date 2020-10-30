import React from 'react';
import InputBase from "@material-ui/core/InputBase";

function LandingSearchBar(props) {

    let placeholder = props.placeholder;

    //TODO: component styling

    return(
        <>
            <InputBase
                placeholder={placeholder}
                onChange={(e) => props.getInput(e.target.value)}
            />
        </>
    )
}

export default LandingSearchBar;
