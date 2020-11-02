import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: 35,
        minWidth: 325,
        maxWidth: 325,
        minHeight: 460,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
    card_wave_svg: {
        position: 'relative',
        display: 'block',
        width: 'calc(100% + 1.3px)',
        height: 90
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -35
    },
    avatar_container: {
        display: 'flex',
        padding: 16
    },
    avatar: {
        padding: 5,
        height: 30,
        width: 30,
        marginRight: theme.spacing(1)
    }
}));

/*
*  Series of avatars on the bottom displaying:
*  region
*
* */

function SummonerCard(props) {
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.card}>
                <div style={{height: 255, background: 'linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)', marginBottom: -90}}/>
                <div style={{marginBottom: 25}}>
                    <div className="custom-shape-divider-bottom-1604297432">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                             preserveAspectRatio="none" className={classes.card_wave_svg}>
                            <path
                                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                                fill={"#fff"}
                            />
                        </svg>
                    </div>
                </div>
                <div>
                </div>
                <div className={classes.name}><h1 style={{fontFamily: 'Baloo Tammudu 2'}}>Schulerj</h1></div>
                <div className={classes.name}><h3 style={{fontFamily: 'Baloo Tammudu 2'}}>345</h3></div>
                <Divider style={{marginTop: 30, marginLeft: 40, marginRight: 40}} variant={'middle'}/>
                <div className={classes.avatar_container}>
                    <Avatar className={classes.avatar}>NA</Avatar>
                </div>
            </Card>
        </div>
    )
}

export default SummonerCard
