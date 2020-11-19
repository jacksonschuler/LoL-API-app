import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    card: {
        width: '855px',
        height: '15vh',
        borderRadius: 7,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    card_container: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 9
    },
    champ_icon_container: {
        width: 95,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    champ_img: {
        width: 80,
        height: 80,
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        backgroundColor: '#dedede'
    },
    colorPrimary: {
        color: '#cfcfcf',
    },
    items_container: {
        display: 'grid',
        gridTemplateColumns: '35px 35px 35px',
        gridTemplateRows: '35px 35px',
        columnGap: '5px',
        rowGap: '5px',
        marginRight: 30,
    },
    item: {
        backgroundColor: '#dedede',
        borderRadius: 5,
    },
    txt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#dadada',
        borderRadius: 50,
        height: 10,
    },
    container: {
        margin: 'auto',
    },
}));

function FeedbackMatchCard() {
    const classes = useStyles();
    return(
        <div className={classes.card_container}>
            <Card className={classes.card}>
                <div className={classes.champ_icon_container}>
                    <div className={classes.champ_img}>
                        <CircularProgress color={'primary'} classes={{
                            colorPrimary: classes.colorPrimary
                        }}
                        />
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.txt} style={{width: 50}}/>
                    <div style={{margin: 15}}/>
                    <div className={classes.txt} style={{width: 20}}/>
                </div>
                <div className={classes.container}>
                    <div className={classes.txt} style={{width: 60}}/>
                    <div style={{margin: 15}}/>
                    <div className={classes.txt} style={{width: 40}}/>
                    <div style={{margin: 15}}/>
                    <div className={classes.txt} style={{width: 40}}/>
                </div>
                <div className={classes.items_container}>
                    <div className={classes.item}>
                    </div>
                    <div className={classes.item}>
                    </div>
                    <div className={classes.item}>
                    </div>
                    <div className={classes.item}>
                    </div>
                    <div className={classes.item}>
                    </div>
                    <div className={classes.item}>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default FeedbackMatchCard;
