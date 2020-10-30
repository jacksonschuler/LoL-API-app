import React from 'react';
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    inputBase: {
        height: 48,
        color: '#000000',
        background: 'white',
        fontWeight:200,
        borderStyle:'none',
        borderRadius: 12,
        paddingLeft: 24,
        paddingTop: 14,
        paddingBottom: 13,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
        minWidth: '50vh',
    },
    paper_input: {
        borderRadius: 12,
        marginTop: 8,
        marginRight: theme.spacing(2),
    },
    paper: {
        borderRadius: 12,
        marginTop: 8,
    },
    button: {
        borderRadius: 12,
        height:48,
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    }

}));

function route_to_summoner_name(name) {
    window.location.href="/summoner/"+name;
}

function LandingSearchBar(props) {
    let placeholder = props.placeholder;

    const [nameInput, setNameInput] = React.useState('');

    const classes = useStyles();
    //TODO: component styling
    return(
        <>
            <div>
                <Toolbar>
                    <Paper component={'form'} className={classes.paper_input} elevation={0}>
                        <InputBase
                            fullWidth
                            className={classes.inputBase}
                            placeholder={placeholder}
                            color={'secondary'}
                            onEnded={()=>{props.getInput(placeholder)}}
                            onChange={(e) => {setNameInput(e.target.value) ;}}
                        />
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                        <Button className={classes.button} onClick={()=>{route_to_summoner_name(nameInput)}}>
                            <SearchIcon/>
                        </Button>
                    </Paper>
                </Toolbar>
            </div>
        </>
    )
}

export default LandingSearchBar;
