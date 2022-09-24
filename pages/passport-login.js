import React, { useState } from 'react'
import { Grid, Typography, Container, TextField, Button, InputAdornment, Hidden, Box } from '@mui/material'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import styled from '@emotion/styled'



const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      background: '#fff',
      '& fieldset': {
        borderColor: 'none',
        border: 'none',
        color: '#000',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
        color: 'black',
      },
    },
  })


export default function ChangePassword() {
    const [user, setUser] = useState({})
    const [showPwd, setShowPwd] = useState(false)
    let signup = () => {
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <Link href="/">
                    <Typography className={styles.heading1}>NicheBy</Typography>
                </Link>
            </Grid>

            <Grid item xs={12} m={2} sx={{marginBottom: 0}}>
                <Container className={styles.card}>
                    <Grid item xs={12}>
                        <Typography className={styles.heading2}>Enter a new Password</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={styles.label}>Host, Share, Connect</Typography>
                    </Grid>

                    <Grid item xs={12} mt={5}>
                        <img src="/icons8-male-user-96.png" className={styles.user} width="27px" />
                        <CssTextField fullWidth placeholder="username@company/college domain" size="small" autoComplete="new-password"
                            onChange={(e) => setUser(prevState => ({
                                user: {
                                    ...prevState.user,
                                    email: e.target.value
                                }
                            }))}
                        />
                    </Grid>
                    <Grid item xs={12} mt={5}>
                        <Typography className={styles.label}>Password</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField fullWidth size="small" type={showPwd ? "text" : "password"} autoComplete='off'
                            onChange={(e) => setUser(prevState => ({
                                user: {
                                    ...prevState.user,
                                    password: e.target.value
                                }
                            }))}
                            InputProps={{
                                endAdornment: <InputAdornment sx={{ cursor: 'pointer' }} position="end" onClick={(e) => setShowPwd(!showPwd)}>Show</InputAdornment>,
                            }}
                        />
                        <Typography className={styles.warn}>Use at least 8 Character with mix of upper and lowercase</Typography>
                    </Grid>

                    <Grid item xs={12} mt={5} mb={4}>
                        <Button fullWidth variant="outlined" className={styles.btn} onClick={signup}>Sign up</Button>
                        <Typography variant="body2" className={styles.info}>
                            By clicking the signup button you agree to <span style={{ fontWeight: 700 }}>Nicheby</span> Terms and conditions, Privacy Policy and cookie Policy
                        </Typography>
                    </Grid>

                    <Hidden smDown>
                        <Box className={styles.link} mt={4} mb={4}>
                            <p>Already Have an account?</p>
                            <p>
                                <Link href="/login">
                                    <a> Login </a>
                                </Link>
                            </p>
                        </Box>
                    </Hidden>

                </Container>

                <Hidden smUp>
                    <Container sx={{ maxWidth: "500px", padding: 0 }}>
                        <Box className={styles.link} mt={4}>
                            <p>Already Have an account?</p>
                            <p>
                                <Link href="/login">
                                    <a> Login </a>
                                </Link>
                            </p>
                        </Box>
                    </Container>
                </Hidden>

            </Grid >
        </Grid >
    )
}