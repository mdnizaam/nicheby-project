import React, { useState } from 'react';
import { Grid, Typography, Container, Button} from '@mui/material';
import styles from '../styles/Login.module.css';
import Header from '../components/headerForDashBoardHome';
import Sidebar from '../components/sidebar';

export default function supportSubmitButton() {
    return (
        <Grid container sx={{display:"flex",flexDirection:"column"}}>
            
            <Grid>
                <Header />
            </Grid>
            <Grid mt={7.8} sx={{display:"flex",flexDirection:"row"}}>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={3} >

                    <Grid  item sx={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                        
                        <Grid item>
                                <Typography sx={{fontSize: '30px', fontWeight: 'bold',marginLeft: '40px'}}>Support</Typography>
                        </Grid>
                        <Grid item className={styles.supportBtnContainer1}>
                            
                                <Container disableGutters={true} className={styles.supportBtnContainer2}
                                sx={{border: '1px solid #707070',
                                borderRadius: '60px',
                                padding: '30px',
                                textAlign:'center'}}>
                                Thank you for reaching out to us, we will try to solve the issue as soon as possile
                                </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}