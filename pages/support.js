import React, { useState } from 'react';
import { Grid, Typography, Container, Button, Hidden} from '@mui/material';
import Header from '../components/headerForDashBoardHome';
import Sidebar from '../components/sidebar';
import styles from '../styles/Login.module.css';



export default function support() {
    const tabClicked = (link) => {
        window.location = link;
    }
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
                    <Grid item sx={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                            
                            <Grid item>
                                    <Typography sx={{fontSize: '30px', fontWeight: 'bold', marginLeft: '40px'}}>Support</Typography>
                            </Grid>
                            {/* ml={35} mr={35} mt={5} mb={5} */}
                            <Grid item  className={styles.supportContainer1}>
                            
                                <Container disableGutters={true}  className={styles.supportContainer2}>
                                    <Grid item paddingBottom={2} paddingTop={5} paddingLeft={5} paddingRight={5}>
                                        <label className={styles.supportLabel} for="name">Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
                                        <input className={styles.supportInput} type="text" />
                                    </Grid>
                                    <Grid item  paddingLeft={5} paddingRight={5}>
                                        <label className={styles.supportLabel} for="issue">Issue:</label>
                                        <textarea placeholder='please describe the issues you faced in detail.'
                                        className={styles.supportTextField} ></textarea>
                                    </Grid>
                                    <Grid className={styles.supportBtnGrid} item mt={5} mb={7} mr={4} sx={{ textAlign: "end" }}>
                                            <Button variant="outlined" onClick={() => tabClicked('/supportSubmitBtn')}
                                            className={styles.supportbtn}>Submit</Button>
                                    </Grid>
                                    
                                </Container>
                            </Grid >
                        </Grid >
                </Grid>

            </Grid>
        </Grid>
       
    )
}