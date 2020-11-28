import React from 'react'


function MatchPage(props) {
    return(
        <div>
            Match PAge
            <div>
                Player: {props.match.params.name}
                 Match: {props.match.params.match_id}
            </div>
        </div>
    )
}

export default MatchPage;
