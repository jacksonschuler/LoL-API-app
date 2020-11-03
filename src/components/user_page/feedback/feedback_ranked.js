import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: 35,
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
    txt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#dadada',
        borderRadius: 50,
        height: 10,
    },
    img_container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 45,
    },
    img: {
        width:171,
        height: 195,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorPrimary: {
        color: '#cfcfcf',
    },
}));

function FeedbackRanked() {
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.card}>
                <div style={{margin: 30}}/>
                <div className={classes.container}>
                    <div className={classes.txt} style={{width: 70, marginBottom: 15}}>
                    </div>
                </div>
                <div className={classes.img_container}>
                    <div className={classes.img}>
                        <CircularProgress color={'primary'} classes={{
                            colorPrimary: classes.colorPrimary
                        }}/></div>
                </div>
                <div className={classes.container}>
                    <div className={classes.txt} style={{width: 150, marginBottom: 30}}/>
                </div>
                <div className={classes.container}>
                    <div className={classes.txt} style={{width: 55, marginBottom: 10}}/>
                </div>
                <div className={classes.container}>
                    <div className={classes.txt} style={{width: 55}}/>
                </div>
            </Card>
        </div>
    )
}

export default FeedbackRanked;
