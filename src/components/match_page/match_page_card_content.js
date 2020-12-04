import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title_txt: {
        marginLeft: 5,
        marginTop: -2,
        marginBottom: 50,
        fontFamily: 'Quicksand'
    },
    txt: {
        marginLeft: 20,
        fontFamily: 'Quicksand'
    },
    container: {
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: '80px 200px',
        columnGap: '40px',
    },

    champ_icon_container: {
        width: 120,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    champ_img: {
        width: 110,
        height: 110,
        borderRadius: 7,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
    items_container: {
        padding: 5,
        display: 'grid',
        gridTemplateColumns: '50px 50px 50px',
        gridTemplateRows: '50px 50px',
        columnGap: '8px',
        rowGap: '8px',
    },
    item: {
        backgroundColor: '#a9a9a9',
        borderRadius: 5,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },

}));

function MatchPageCardContent(props) {
    const match_functions = require('../../scripts/match_functions');
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.title_txt}>{props.name}</h2>
            <div className={classes.container}>
                <div className={classes.champ_icon_container}>
                    {props.champs ? (
                        <div className={classes.champ_img} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/champs_icons/' + match_functions.getChampNameFromChampID(props.timeline.championId, props.champs) + '.png'})`}}/>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div>
                    <h3 className={classes.txt}>{props.timeline.stats.kills} / {props.timeline.stats.deaths} / {props.timeline.stats.assists} ({match_functions.computeKDA(props.timeline.stats.kills, props.timeline.stats.deaths, props.timeline.stats.assists)} KDA)</h3>
                    <h3 className={classes.txt}> Level 13</h3>
                    <h3 style={{color: match_functions.bgColor(props.timeline.stats.win), marginLeft: 20,}}>{props.timeline.stats.win === true ? '[VICTORY]': '[DEFEAT]'}</h3>
                </div>
            </div>
        </div>
    )
}

export default MatchPageCardContent;
