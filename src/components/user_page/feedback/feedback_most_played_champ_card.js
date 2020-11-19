import React from 'react'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles((theme) => ({
    card: {
        minHeight: 450,
        maxHeight: 550,
        minWidth: 330,
        width:'95%',
        height: '95%',
        maxWidth: 475,
        borderRadius: 7,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.4)',
        margin: 7.5,

    },
    card_container: {
        display:'flex',
        justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: '62.25%',
        minHeight: '225px',
        clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
        backgroundColor:'#dadada',
        zIndex:-1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        background: '#dadada',
        borderRadius: 50,
        height: 10,
        position: 'relative',
        right: 0,
        marginLeft: 'auto',
        marginRight:25,
    },
    colorPrimary: {
        color: '#cfcfcf',
    },
}));

function FeedbackMostPlayedCard() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.card_container}>
                <Card className={classes.card}>
                    <div className={classes.img}>
                        <CircularProgress color={'primary'} style={{marginBottom: -50,}} classes={{
                            colorPrimary: classes.colorPrimary
                        }}
                        />
                    </div>
                    <div className={classes.txt} style={{width: 90,}}/>
                    <div style={{margin: 15}}/>
                    <div className={classes.txt} style={{width: 70,}}/>
                </Card>
            </div>
        </div>
    )
}

export default FeedbackMostPlayedCard;
