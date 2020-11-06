import React from 'react';
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    inputBase: {
        height: 48,
        color: '#000000',
        background: 'white',
        fontFamily: 'Quicksand',
        borderStyle:'none',
        borderRadius: 5,
        paddingLeft: 24,
        paddingTop: 14,
        paddingBottom: 13,
        minWidth: '60vh',
        flex: 1,
        marginLeft: theme.spacing(1),
    },
    paper_input: {
        display:'flex',
        borderRadius: 5,
        marginRight: theme.spacing(1),
    },
    button: {
        borderRadius: 12,
        height:48,
    },

}));

function route_to_summoner_name(name) {
    if (name !== ''){
        window.location.href="/summoner/"+name;
    }
}

function UserSearchNav(props) {
    let placeholder = props.placeholder;

    const [nameInput, setNameInput] = React.useState('');

    const classes = useStyles();
    return(
        <>
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
        </>
    )
}

export default UserSearchNav;
