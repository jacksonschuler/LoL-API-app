import React from 'react';
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    inputBase: {
        height: 48,
        color: '#000000',
        background: 'white',
        fontFamily: 'Quicksand',
        borderStyle:'none',
        borderRadius: 12,
        paddingLeft: 24,
        paddingTop: 14,
        paddingBottom: 13,
        minWidth: '50vh',
        flex:1,
    },
    paper_input: {
        display:'flex',
        borderRadius: 12,
        marginTop: 8,
        marginRight: theme.spacing(1),
        boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    },
}));

function route_to_summoner_name(name) {
    if (name !== ''){
        window.location.href="/summoner/"+name;
    }
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
                    <Paper className={classes.paper_input} elevation={0}>
                        <InputBase
                            fullWidth
                            className={classes.inputBase}
                            placeholder={placeholder}
                            color={'secondary'}
                            onChange={(e) => {setNameInput(e.target.value) ;}}
                            onKeyDown={(e) => {
                                if (e.code === 'Enter'){
                                    route_to_summoner_name(nameInput)
                                }
                            }}
                        />
                        <IconButton onClick={()=>{route_to_summoner_name(nameInput)}}>
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </Toolbar>
            </div>
        </>
    )
}

export default LandingSearchBar;
