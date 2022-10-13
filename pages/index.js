import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Paper,
  FormGroup,
  FormControlLabel,
  Box,
  Hidden,
  Alert,
} from "@mui/material";
import styles from "../styles/Register.module.css";
import axios from "axios";
import GoogleOauth from "../components/googleoauth";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";
import Script from "next/script";

// const baseUrl = `http://localhost:4000`
// const baseUrl2 = 'http://13.233.252.26'
const baseUrl2 = "https://staging.nicheby.com";

export default function Register() {
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSucMsg, setAlertSucMsg] = useState("");
  const [user, setUser] = useState({});
  const [showPwd, setShowPwd] = useState(false);
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const passwordValidation = (password) => {
    if (!password || password.length < 8) {
      return false;
    }
    var uc = 0,
      lc = 0;
    for (var i = 0; i < password.length; i++) {
      if (password[i] >= "a" && password[i] <= "z") {
        lc++;
      } else if (password[i] >= "A" && password[i] <= "Z") {
        uc++;
      }
    }
    if (uc == 0 || lc == 0) {
      return false;
    }
    return true;
  };

  let signup = async () => {
    if (
      !(
        user.first_name &&
        user.last_name &&
        user.email &&
        user.password &&
        user.confirm_password
      )
    ) {
      setAlertMsg("All Fields Required");
      setTimeout(() => {
        setAlertMsg("");
      }, 3000);
    } else if (!passwordValidation(user.password)) {
      setAlertMsg(
        "Password must have at least 8 Character with mix of upper and lowercase"
      );
      setTimeout(() => {
        setAlertMsg("");
      }, 3000);
    } else if (user.password !== user.confirm_password) {
      setAlertMsg(`Passwords doesn't match`);
      setTimeout(() => {
        setAlertMsg("");
      }, 3000);
    } else {
      axios
        .post(`${baseUrl2}/register`, user)
        .then(async (res) => {
          console.log("res", res);
          //   setAlertSucMsg(
          //     `${res.data.user.first_name} you have registered successfully`,
          //   )
          if (res.data.user) {
            window.location = `/verifyseeker/${res.data.user.email}`;
          } else {
            console.log("already registered");
          }
        })
        .catch((e) => {
          console.log("e", e);
          //   setAlertMsg(e.response.data.message)
          setTimeout(() => {
            setAlertMsg("");
          }, 3000);
        });
    }
  };
  return (
    <>
      <Head>
        <title>Reister</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <Script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          async
          defer
        ></Script>
      </Head>

      <Grid container>
        {alertMsg ? (
          <Alert
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 10px)",
              width: "min(90%, 800px)",
            }}
            severity="error"
          >
            {alertMsg}
          </Alert>
        ) : null}
        {alertSucMsg ? (
          <Alert
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 10px)",
              width: "min(90%, 800px)",
            }}
            severity="success"
          >
            {alertSucMsg}
          </Alert>
        ) : null}
        {/* Side Image */}
        <Hidden lgDown>
          <Grid item lg={6}>
            <Paper sx={{ width: `${(6 * 100) / 12}vw`, height: "100vh" }}>
              <img
                src="/student.svg"
                width="100%"
                height="100%"
                className={`${styles.img} `}
              />
            </Paper>
          </Grid>
        </Hidden>
        <Grid
          item
          lg={6}
          xs={12}
          sx={{ padding: "0 2% 10px", borderLeft: "1px solid #fff" }}
        >
          <Grid container spacing={2}>
            {/* Main Heading */}

            <Grid item xs={12} mt={2}>
              <Link href="/">
                <Typography
                  className={styles.heading1}
                  inputprops={{ form: { autocomplete: "off" } }}
                >
                  NicheBy
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={12} mt={2}>
              <Typography className={styles.heading2}>
                Create Your New Account
              </Typography>
            </Grid>

            {/* Basic Details */}

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="First Name"
                size="small"
                className={styles.input}
                autoComplete="new-password"
                onChange={(e) => {
                  user.first_name = e.target.value;
                  setUser(user);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Last Name"
                size="small"
                autoComplete="new-password"
                onChange={(e) => {
                  user.last_name = e.target.value;
                  setUser(user);
                }}
              />
            </Grid>
            <Grid item xs={12} mb={1}>
              <Typography className={styles.info}>
                <img src="/icons8-info-100.svg" className={styles.infoicon} />
                For Seamless verification signup with your official/registered
                company Email or College Email
              </Typography>
              <TextField
                fullWidth
                placeholder="Email Id"
                size="small"
                autoComplete="new-password"
                onChange={(e) => {
                  user.email = e.target.value;
                  setUser(user);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Password"
                size="small"
                type={showPwd ? "text" : "password"}
                autoComplete="off"
                onChange={(e) => {
                  user.password = e.target.value;
                  setUser(user);
                }}
              />
              <Typography className={styles.warn}>
                Use at least 8 Character with mix of upper and lowercase
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Confirm Password"
                size="small"
                type={showPwd ? "text" : "password"}
                autoComplete="off"
                onChange={(e) => {
                  user.confirm_password = e.target.value;
                  setUser(user);
                }}
              />
            </Grid>

            {/* Show Password */}

            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox onChange={(e) => setShowPwd(e.target.checked)} />
                  }
                  label="Show Password"
                />
              </FormGroup>
              <Grid item xs={6}>
                <ReCAPTCHA
                  sitekey="6Le9PHkiAAAAAMCiXHgHBHtQWuqGWhNyZIy7MLfu"
                  render="explicit"
                  onChange={onChange}
                />
              </Grid>
            </Grid>

            {/* Login / SignUp */}

            <Grid item xs={6}>
              <Box className={styles.link}>
                <p>
                  Already Have an account?{" "}
                  <Link href="/login">
                    <a> Login </a>
                  </Link>
                </p>
              </Box>
            </Grid>

            <Hidden smUp>
              <Grid item xs={6} mt={2} sx={{ textAlign: "right" }}>
                <Typography style={{ fontWeight: 400, fontSize: "1rem" }}>
                  Not an Student?
                </Typography>
                <Link href="/register-employee">
                  <a style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                    Register as Employer
                  </a>
                </Link>
              </Grid>
            </Hidden>

            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                // variant="outlined"
                className={styles.btn}
                onClick={signup}
                disabled={!verified}
              >
                Sign up
              </Button>
              <Link href="/privacypolicy">
                <a sx={{ cursor: "pointer" }}>
                  <Typography variant="body2" className={styles.info}>
                    By clicking the signup button you agree to{" "}
                    <span style={{ fontWeight: 700 }}>Nicheby</span> Terms and
                    conditions, Privacy Policy and cookie Policy
                  </Typography>
                </a>
              </Link>
            </Grid>

            {/* Other Signup options */}
            {/*           
                    <Grid item xs={12} sm={7} lg={8} sx={{ margin: " 24px auto 0px", textAlign: "center" }}>
                        <img src="/or.svg" width="100%" />
                        <Typography mt={1}>Login Using</Typography>
                    </Grid> 
                    <Grid item xs={12} sm={7} sx={{ margin: "auto", justifyContent: "space-around", display: "flex" }}>
                        <Link href="#1">
                            <img src="/icons8-google-100.svg" className={styles.mediaicons} />
                        </Link>
                        <Link href="#2">
                            <img src="/icons8-facebook-f-100.svg" className={styles.mediaicons} />
                        </Link>
                        <Link href="#3">
                            <img src="/icons8-linkedin-2-100.svg" className={styles.mediaicons} />
                        </Link>
                        <Link href="#4">
                            <img src="/icons8-twitter-100.svg" className={styles.mediaicons} />
                        </Link>
                    </Grid>
                    */}
            {/* Register as employee */}

            <Hidden smDown>
              <Grid item xs={12} mt={2}>
                <Typography style={{ fontWeight: 400, fontSize: "1rem" }}>
                  Not an Student?
                </Typography>
                <Link href="/register-employee">
                  <a style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                    Register as Employer
                  </a>
                </Link>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
