import React, { useState } from 'react'
import { Grid, Typography, Container, TextField, Button, Alert } from '@mui/material'
import styles from '../../styles/Login.module.css'
import axios from 'axios'

export default function ChangePassword() {
    const [alertMsg, setAlertMsg] = useState('');
    const [otp, setOtp] = useState('');
    let verify = () => {
        var email = window.location.pathname.split('/')[2];
        if (!email) {
            setAlertMsg("Invalid URL");
            setTimeout(() => { setAlertMsg('') }, 3000);

        } else if (!otp) {
            setAlertMsg("Please enter OTP");
            setTimeout(() => { setAlertMsg('') }, 3000);
        } else {
            axios.post("http://localhost:4000/checkOtp", { email, otp })
                .then(() => {
                    window.location = '/';
                })
                .catch((e) => {
                    setAlertMsg(e.response.data.message);
                    setTimeout(() => { setAlertMsg('') }, 3000);
                })
        }
    }
    return (
        <Grid container>
            {
                alertMsg ?
                    <Alert sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 10px)', width: 'min(90%, 800px)' }} severity="error">{alertMsg}</Alert> :
                    null
            }
            <Grid item xs={12} m={2} sx={{marginBottom: 0}}>
                <Typography className={styles.heading1}>NicheBy</Typography>
            </Grid>

            <Grid item xs={12} m={2}>
                <Container className={styles.card}>
                    <Grid item xs={12}>
                        <Typography className={styles.heading2}>Enter Your OTP</Typography>
                    </Grid>

                    <Grid item xs={12} mt={5}>
                        <TextField fullWidth placeholder="Enter your OTP" size="small" autoComplete='off'
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} mt={5} mb={4}>
                        <Button fullWidth variant="outlined" className={styles.btn} onClick={verify}>Verify</Button>
                    </Grid>

                </Container>

            </Grid >
        </Grid >
    )
}