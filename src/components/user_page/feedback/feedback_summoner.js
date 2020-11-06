import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: 7,
        minWidth: 275,
        maxWidth: 275,
        minHeight: 420, //nice
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        backgroundColor: '#fff',
        marginLeft: 15,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card_wave_svg: {
        position: 'relative',
        display: 'block',
        width: 'calc(100% + 1.3px)',
        height: 91
    },
    txt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#dadada',
        borderRadius: 50,
        height: 10,
    },
    img : {
        width:200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 35,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: '5px',
        zIndex: 2,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -225,
    },
    colorPrimary: {
        color: '#cfcfcf',
    },
}));

function FeedbackSummoner() {
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.card}>
                <div style={{height: 255, marginBottom: -90}}/>
                <div style={{marginBottom: 25}}/>
                <div className={classes.img_container}>
                    <div className={classes.img}>
                        <CircularProgress color={'primary'} classes={{
                            colorPrimary: classes.colorPrimary
                        }}
                        />
                    </div>
                </div>
                <div style={{margin: 50}}/>
                <div className={classes.container}>
                    <div className={classes.txt} style={{width: 100}}/>
                </div>
                <div style={{margin: 15}}/>
                <div className={classes.container}>
                    <div className={classes.txt} style={{width: 60}}/>
                </div>
            </Card>
        </div>
    )
}

export default FeedbackSummoner;
