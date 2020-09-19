import React, {useState, useEffect} from 'react';
import SymptomLog from '../components/medical/SymptomLog';
import {Grid,Typography, makeStyles, Box, Divider, GridList, Card, CardContent} from '@material-ui/core';
import { useCookies } from 'react-cookie';
import axios from 'axios'

import Image from '../assets/background.svg';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '230vh',
        maxWidth: '100vw',
        padding: '2rem 2rem 2rem 2rem',
        [theme.breakpoints.down('lg')]: {
        padding: '1rem 1rem 1rem 1rem'
        },
        backgroundImage: `url(${Image})`,
    },
    greetingsContainer: {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        background: '#9066FF',
        padding: '1rem 3rem',
        borderRadius: '4px',
        color: '#fff',
    },
}));

const Medical = (props) => {
    const classes = useStyles();

    //eample to use auth
    const [token, setToken] = useCookies(['auth_token']);
    useEffect(() => {
        axios.get('http://localhost:3000/communities', {
            headers: {
                Authorization: token.auth_token
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' spacing = {2} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
                <Grid item xs = {12} md = {6} lg = {7} xl = {7} style = {{marginLeft: '1ren', marginTop: '1rem', height: '80vmin'}}>
                    <Grid container direction = 'column' spacing = {3}>
                        <Grid item>
                            <div className = {classes.greetingsContainer}>
                                <Typography variant = 'h5'><Box fontWeight = 'bold'>Welcome to Meddit, Name </Box></Typography>
                                <Typography variant = 'subtitle2' style = {{opacity: '.7'}}>Please enter how you are feeling so we can add you to a community of people who feel the same way</Typography>
                            </div>
                        </Grid> 
                        <Grid item>
                            <SymptomLog></SymptomLog>
                        </Grid>
                        <Grid item>
                            <Typography variant = 'h6'><Box fontWeight = 'bold'>Some Communities You might want to Join</Box></Typography>
                        </Grid>
                        <Grid item>
                            <GridList cols = {3} spacing = {1} cellHeight = 'auto'>

                            </GridList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Medical;