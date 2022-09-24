import React, { useState } from 'react';
import { Grid, Typography, Container, Button,Link} from '@mui/material';
import TitleScrollcolor from "../components/titlescrolltocolor";
import styles from '../styles/Login.module.css'

export default function supportSubmitButton() {
    return (

                <Grid container padding={2}>
                        
                        <TitleScrollcolor />
                        
                         <Grid xs={12} md={12} lg={12} mt={30}>
                            <Container disableGutters={true} className={styles.reportSupBtn}>
                            Thank you for reaching out to us, we will try to solve the issue as soon as possile
                            </Container>
                        </Grid>
                
                </Grid>
    )
}