import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  InputAdornment,
  Hidden,
  Alert,
} from '@mui/material'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import Image from 'next/image'
import axios from 'axios'
import styled from '@emotion/styled'

// const baseUrl = `http://localhost:4000`
// const baseUrl2 = 'http://13.233.252.26'
const baseUrl2 = 'https://staging.nicheby.com'

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

export default function Login() {
  const [alertMsg, setAlertMsg] = useState('')
  const [user, setUser] = useState({})
  const [showPwd, setShowPwd] = useState(false)
  let signup = async () => {
    if (!(user.email && user.password)) {
      setAlertMsg('All Fields Required')
      setTimeout(() => {
        setAlertMsg('')
      }, 3000)
    } else {
      await axios
        .post(`${baseUrl2}/login`, user)
        .then((result) => {
          console.log('result:-', result)
          // var user = result.data;
          // if (res.data.user) {
          //   window.location = `/verifyseeker/${res.data.user.email}`
          // } else {
          //   console.log('already registered')
          // }
          result.data &&
            localStorage.setItem('user', JSON.stringify(result.data.token))
          window.location = `/homepage`
        })
        .catch((e) => {
          console.log('events:-', e)
          // setAlertMsg(e.response.data.message);
          setTimeout(() => {
            setAlertMsg('')
          }, 3000)
        })
    }
  }
  return (
    <Grid container>
      {alertMsg ? (
        <Alert
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 10px)',
            width: 'min(90%, 800px)',
          }}
          severity="error"
        >
          {alertMsg}
        </Alert>
      ) : null}
      <Grid item xs={12} m={2} sx={{ marginBottom: 0 }}>
        <Link href="/">
          <Typography className={styles.heading1}>NicheBy</Typography>
        </Link>
      </Grid>

      <Grid
        item
        xs={12}
        m={2}
        sx={{
          height: '80vh',
          margin: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <Grid>
          <Container maxWidth="xs" className={styles.card}>
            <Grid item xs={12}>
              <Typography className={styles.heading2}>Login</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={styles.label}>
                Host, Share, Connect
              </Typography>
            </Grid>

            <Grid item xs={12} mt={5}>
              <Typography className={styles.label}>Email</Typography>
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                id="custom-css-outlined-input"
                fullWidth
                placeholder="username@company/college domain"
                size="small"
                autoComplete="new-password"
                onChange={(e) => {
                  user.email = e.target.value
                  setUser(user)
                }}
              />
            </Grid>
            <Grid item xs={12} mt={5}>
              <Typography className={styles.label}>Password</Typography>
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                id="custom-css-outlined-input"
                fullWidth
                size="small"
                type={showPwd ? 'text' : 'password'}
                autoComplete="off"
                onChange={(e) => {
                  user.password = e.target.value
                  setUser(user)
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{ cursor: 'pointer' }}
                      position="end"
                      onClick={(e) => setShowPwd(!showPwd)}
                    >
                      Show
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} mt={4}>
              <Grid container>
                <Grid item xs={8}>
                  <Typography className={`${styles.label} ${styles.pwd}`}>
                    <Link href="#forgotpassword">Forgot Password?</Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    // variant="outlined"
                    sx={{
                      boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
                      background: '#fff',
                      color: '#000000',
                    }}
                    className={styles.btn}
                    onClick={signup}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Hidden smDown>
              {/*<Grid item xs={12} mt={4}>
                                <img src="/or-login.svg" width="100%" />
                            </Grid>
                            <Grid item xs={12} mt={4} sx={{ textAlign: "center" }}>
                                <Button variant="outlined" startIcon={<Image src="/icons8-apple-logo-100.svg" width="20px" height="20px" />} className={styles.btn} >Sign in with apple </Button>
                            </Grid>*/}
              <Grid item xs={12} mt={8}>
                <Typography className={styles.label}>
                  Don't have an account?
                  <Link href="/">
                    <a style={{ fontWeight: 700 }}> Signup</a>
                  </Link>
                </Typography>
              </Grid>
            </Hidden>
          </Container>

          <Hidden smUp>
            {/*<Grid item xs={12} mt={3}>
                            <img src="/or-login.svg" width="100%" />
                        </Grid>
                        <Grid item xs={12} mt={4} sx={{ textAlign: "center" }}>
                            <Button variant="outlined" startIcon={<Image src="/icons8-apple-logo-100.svg" width="20px" height="20px" />} className={styles.btn} >Sign in with apple </Button>
                        </Grid>*/}
            <Grid item xs={12} mt={5} sx={{ textAlign: 'center' }}>
              <Typography className={styles.label}>
                Don't have an account?
                <Link href="register">
                  <a style={{ fontWeight: 700 }}> Signup</a>
                </Link>
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  )
}
