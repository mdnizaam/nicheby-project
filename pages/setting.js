import React, {useState, useEffect} from 'react';
import {Button, Checkbox, Grid, TextField, Typography, Paper, FormGroup, FormControlLabel, Box, Hidden, Alert, Switch, TextareaAutosize} from '@mui/material';
import Sidebar from '../components/sidebar';
import Header from '../components/headerForDashBoardHome';
import Setting from '../components/setting';
import axios from 'axios';

export default function Deshboard() {
    const [user, setUser] = useState(true);
    const [alertMsg, setAlertMsg] = useState('');

    return (
        <>
            {user ? (
                <>
                    {alertMsg ? (
                        <Alert sx={{position: 'absolute', left: '50%', transform: 'translate(-50%, 10px)', width: 'min(90%, 800px)'}} severity="error">
                            {alertMsg}
                        </Alert>
                    ) : null}
                    <Grid xs={12} container>
                        <Grid item xs={12}>
                            <Header />
                        </Grid>
                        <Grid item sm={4} lg={3} sx={{display: {xs: 'none', sm: 'fixed'}, marginTop: '8.5vh'}}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={12} sm={8} lg={9} sx={{marginTop: '8.5vh'}}>
                            <Setting />
                        </Grid>
                    </Grid>
                </>
            ) : null}
        </>
    );
}