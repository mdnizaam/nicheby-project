import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Checkbox, Grid, TextField, Typography, Paper, FormGroup, FormControlLabel, Box, Hidden, Alert } from '@mui/material';
import styles from '../styles/Register.module.css';
import axios from 'axios'

export default function Register() {
    const [alertMsg, setAlertMsg] = useState('')
    const [user, setUser] = useState({})
    const [showPwd, setShowPwd] = useState(false)

    const passwordValidation = (password) => {
        if(!password || password.length < 8) {
            return false;
        }
        var uc=0, lc=0;
        for(var i=0; i<password.length; i++) {
            if(password[i] >= 'a' && password[i] <= 'z') {
                lc++;
            } else if(password[i] >= 'A' && password[i] <= 'Z') {
                uc++;
            }
        }
        if(uc==0 || lc==0) {
            return false;
        }
        return true;
    }

    let signup = async () => {
        if (!(user.firstName && user.lastName && user.email && user.password && user.confirmPassword)) {
            setAlertMsg('All Fields Required');
            setTimeout(() => { setAlertMsg('') }, 3000);
        } else if (user.password !== user.confirmPassword) {
            setAlertMsg(`Passwords doesn't match`);
            setTimeout(() => { setAlertMsg('') }, 3000);
        } else if(!passwordValidation(user.password)) {
            setAlertMsg('Password must have at least 8 Character with mix of upper and lowercase');
            setTimeout(() => { setAlertMsg('') }, 3000);
        } else {
            await axios.post("https://intense-savannah-50400.herokuapp.com/recruiter/signup", user)
                .then(() => {
                    axios.post("https://intense-savannah-50400.herokuapp.com/recruiter/sendOtp", user)
                        .then(() => {
                            window.location = `/verifyrecruiter/${user.email}`;
                        })
                        .catch((e) => {
                            setAlertMsg(e.response.data.message);
                            setTimeout(() => { setAlertMsg('') }, 3000);
                        })
                })
                .catch((e) => {
                    setAlertMsg(e.response.data.message);
                    setTimeout(() => { setAlertMsg('') }, 3000);
                });
        }
    }
    return (
        <Grid container>
            {
                alertMsg ?
                    <Alert sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 10px)', width: 'min(90%, 800px)' }} severity="error">{alertMsg}</Alert> :
                    null
            }
            {/* Side Image */}
            <Hidden lgDown>
                <Grid item lg={6}>
                    <Paper sx={{ width: `${6 * 100 / 12}vw`, height: "100vh" }}>
                        <img src="/employee.svg" width="100%" height="100%" className={styles.img} />
                    </Paper>
                </Grid>
            </Hidden>
            <Grid item lg={6} xs={12} sx={{ padding: "0 2% 10px" }}>
                <Grid container spacing={2}>

                    {/* Main Heading */}

                    <Grid item xs={12} mt={2}>
                        <Link href="/">
                            <Typography className={styles.heading1}>NicheBy</Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={12} mt={2}>
                        <Typography className={styles.heading2}>Create Your New Account</Typography>
                    </Grid>

                    {/* Basic Details */}

                    <Grid item xs={12} md={6}>
                        <TextField fullWidth placeholder="First Name" size="small" autoComplete="new-password"
                            onChange={(e) => {
                                user.firstName = e.target.value;
                                setUser(user);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth placeholder="Last Name" size="small" autoComplete="new-password"
                            onChange={(e) => {
                                user.lastName = e.target.value;
                                setUser(user);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} mb={1}>
                        <Typography className={styles.info}>
                            <img src="/icons8-info-100.svg" className={styles.infoicon} />
                            For Seamless verification signup with your official/registered company Email or College Email
                        </Typography>
                        <TextField fullWidth placeholder="Email Id" size="small" autoComplete="new-password"
                            onChange={(e) => {
                                user.email = e.target.value;
                                setUser(user);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth placeholder="Password" size="small" type={showPwd ? "text" : "password"} autoComplete="off"
                            onChange={(e) => {
                                user.password = e.target.value;
                                setUser(user);
                            }}
                        />
                        <Typography className={styles.warn}>Use at least 8 Character with mix of upper and lowercase</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth placeholder="Confirm Password" size="small" type={showPwd ? "text" : "password"} autoComplete="off"
                            onChange={(e) => {
                                user.confirmPassword = e.target.value;
                                setUser(user);
                            }}
                        />
                    </Grid>

                    {/* Show Password */}

                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={(e) => setShowPwd(e.target.checked)} />} label="Show Password" />
                        </FormGroup>
                    </Grid>

                    {/* Login / SignUp */}

                    <Grid item xs={6}>
                        <Box className={styles.link}>
                            <p>Already Have an account? <Link href="/login">
                                <a> Login </a>
                            </Link>
                            </p>
                        </Box>
                    </Grid>

                    <Hidden smUp>
                        <Grid item xs={6} mt={2} sx={{ textAlign: "right" }}>
                            <Typography style={{ fontWeight: 400, fontSize: "1rem" }}>Not an Employer?</Typography>
                            <Link href="/register"><a style={{ fontWeight: 700, fontSize: "0.9rem" }}>Register as Student</a></Link>
                        </Grid>
                    </Hidden>

                    <Grid item xs={12} sm={6}>
                        <Button fullWidth variant="outlined" className={styles.btn} onClick={signup}>Sign up</Button>
                        <Typography variant="body2" className={styles.info}>
                            By clicking the signup button you agree to <span style={{ fontWeight: 700 }}>Nicheby</span> Terms and conditions, Privacy Policy and cookie Policy
                        </Typography>
                    </Grid>

                    {/* Register as Student */}

                    <Hidden smDown>
                        <Grid item xs={12} mt={2}>
                            <Typography style={{ fontWeight: 400, fontSize: "1rem" }}>Not an Employer?</Typography>
                            <Link href="/register"><a style={{ fontWeight: 700, fontSize: "0.9rem" }}>Register as Student</a></Link>
                        </Grid>
                    </Hidden>

                </Grid>
            </Grid>
        </Grid >
    )
}