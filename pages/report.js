import React, { useState } from 'react'
import { Grid, Typography, Container, TextField, Button, InputAdornment, Hidden, Alert } from '@mui/material'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import Image from 'next/image'
import axios from 'axios'


export default function report() {
    const tabClicked = (link) => {
        window.location = link;
    }
    return (
        <Grid container>
            <Grid item xs={12} md={12} m={2} sx={{marginBottom: 0}}>
                    <Typography className={styles.reportHeading} >Report (Username)</Typography>
            </Grid>

            <Grid mt={5} item xs={12} md={12}>
                <Container disableGutters={true}
                className={styles.report}>
                    <Grid item xs={12} md={12}>
                        <Typography className={styles.reportContHeading}  sx={{}}>Please help us make Nicheby a better platform.</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} mt={4}>
                            <img src="/line.svg" width="100%" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button className={styles.btnmenu}>
                        <Typography className={styles.reportContBtn}>
                        It display Nudity or Pornographic content.</Typography>
                        </Button>
                        
                        <img src="/line.svg" width="100%" />

                        <Button className={styles.btnmenu}>
                        <Typography className={styles.reportContBtn}>It represent Hate against community</Typography>
                        </Button>

                        <img src="/line.svg" width="100%" />

                        <Button className={styles.btnmenu}>
                        <Typography className={styles.reportContBtn}>It expresses intention of self-harm or sucide</Typography>
                        </Button>

                        <img src="/line.svg" width="100%" />
                        <Button className={styles.btnmenu}>
                        <Typography className={styles.reportContBtn}>It is suspicious or spam</Typography>
                        </Button>
                    </Grid>
                    

                       
                    <img src="/line.svg" width="100%" />
                       
                        <Grid item xs={12} md={12} ml={2}>
                            <Typography className={styles.label}>Issue not listed?
                                <Link className={styles.label} href="register">
                                    <a  style={{ fontWeight: 700 }}> Contact Us</a>
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} mt={7} mb={7} sx={{ textAlign: "center" }}
                            onClick={() => tabClicked('/reportSubmitButton')}    >
                       
                            <Button variant="outlined"  className={styles.btn}>Submit</Button>
                        </Grid>
                    

                </Container>
            </Grid >
        </Grid >
    )
}