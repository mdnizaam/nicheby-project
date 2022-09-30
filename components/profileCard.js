import React from "react";
import { Grid, Box, Button, Paper } from "@mui/material";
import styles from '../styles/Home.module.css';
import MainPageStyles from "../styles/mainPage.module.css"
import Link from 'next/link'

export default function ProfileCard(props)
{
    let aCard;

    if(props.userData !== null)
    {
        aCard = <Paper className={MainPageStyles.profileCard}>
            <Grid container>
                <Grid item xs={3} sx={{padding:'0 !important'}}>
                    <Grid container sx={{width:"89px",height:"106px"}}>
                        <img src={props.userData.ProfilePicture} width="100%" height="100%" />
                    </Grid>
                </Grid>
                <Grid item xs={9} sx={{padding:'0 !important'}}>
                    <Grid container direction={"column"} sx={{margin:'10px 0px 10px 20px'}} >
                        <Grid sx={{display:"flex",flexWrap:"column", justifyContent:"space-between", height:'25px'}}>
                            <Grid sx={{fontSize:'24px',flexBasis:"80%", maxHeight:"min-content", fontFamily: "'Times New Roman', Times, serif !important", color:'#070707 !important'}} >
                                {props.userData.Name}
                            </Grid>
                            {/* <Grid sx={{marginRight:'20px', paddingTop:'4px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 12 12">
                            <g id="Group_21" data-name="Group 21" transform="translate(-344 -170)">
                            <image id="certification-regular-24" width="12" height="12" transform="translate(344 170)" opacity="0.5" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACBklEQVRIS82W4TUEQRCE6yJABIgAESACRIAMiAARIAJEcESACJABGRAB77vXva9vd2Zn5+5x+s/ezexOTVd118xIC4rRgnBVC7wvaUnSXWvDR5I+Jd0PTaQGeEfSoy38JOnCfp9JYo44GApeA/wuabWQEe+sD8m6D/jEaGWdNUnQSTxL2gxzjD1I2rN56H6139B/ndpIDhiQm8QHH7YJNnJu8zzJNMfIqaSr9lo5YBZDuxhfkigu9E0FLDBH8cWgFnyTzfgQ4Jo6iIDf9qcK+FbSoX04LzCaU+1T0V6UtkBbNCSgdzlDbWmYwnLa0f84yhSB0W8cVqOQKLKcpiVgNCfb2IJNn0fgWMm0jJtCCaA0D7i3GlkjY8cyyW7b7G/LWqS0cN88kr2YXG/W/5P3Uxq7LeLHbhqzgsci3c1pzOLRj/8U2KlmE3gu1ThPQDX2SXXzRL4O1bG4kr034w6KxdVuJ7Kl/N3wa3FpJzyBp0e2qgHH0L33MIGVWkR7PxoInsBp11wUcnYY6ZnXMjkySWgq/t0hkToWoY5ezGmOlnhA29urTif0uExo61cb2sTPaxZmnA1tJL6pugjwPeC+e7KJVxuMxudggv53HdE0Xn06t4+UZfYV8JDLnl+Nio1QU7HRTjF8GCHIyCn+lestINAJxZOjLYQfJu3xbOY1GRfpq3lhYcA/z4JtHx6IeDEAAAAASUVORK5CYII="/>
                            <image id="check-regular-24" width="6" height="6" transform="translate(347 173)" opacity="0.5" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA0klEQVRIS+3UwQ0CIRCF4X8r0BIswRIswQ6MFViDnViCHbglWIIt2IGZhE0Iss4As+4FLhwgfMzLwMBKY1jJpcN/S75H3aNuSeAGjIDMX2Op5hLsFLRzDl8CjtE3cACeacnesAmVS3jCZtQTLkIt8Ba4ANcf7V2MarCgD2AfulK6Mx1VqAYLKO9wEzRBYrwa1WBZn8ObUAucw1/ALqQw+061L8/6nNLK5dxq1FrxdPkYb0JL4Sn2O3DMfYNavPG6NeqSM017O2yKyWNTj9ojRdMZHwTVLx8hI/ZZAAAAAElFTkSuQmCC"/>
                            </g>
                            </svg>
                            </Grid> */}
                        </Grid>
                        <Grid sx={{fontSize:'18px', height:'20px', marginTop:'6px', fontFamily: "'Times New Roman', Times, serif !important", color:'#070707 !important'}}>
                            {props.userData.HighestQualification}
                        </Grid>
                        <Grid sx={{fontSize:"14px", height:'16px', marginTop:'6px', fontFamily: "'Times New Roman', Times, serif !important", color:'#070707 !important'}} >
                            {props.userData.LastInstitute}
                        </Grid>
                        <Grid container>
                            <Grid item xs={6} sx={{fontSize:"14px !important", height:'16px', marginTop:'6px', fontFamily: "'Times New Roman', Times, serif !important", color:'#070707 !important'}}>
                                Age: {props.userData.Age}
                            </Grid>
                            <Grid item xs={6} sx={{fontSize:"14px !important", height:'16px', marginTop:'6px', fontFamily: "'Times New Roman', Times, serif !important", color:'#070707 !important'}}>
                                Gender: {props.userData.Gender}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        
            <Grid container direction ={'column'} sx={{display:"flex",flexWrap:"column", borderTop: '1px solid black'}}>
                <Grid item  paddingBottom={1.1}>
                    <Box sx={{ color:"white", textAlign:"left", height: '20px',display:"flex",flexWrap:"column", justifyContent:"space-between"}}>
                        <Grid sx={{flexGrow:"4", color:'black', fontSize: '18px', fontFamily: "'Times New Roman', Times, serif !important"}}>
                            About Myself
                        </Grid>
                        <Grid sx={{flexGrow:"1",display:"flex",flexDirection:"column",justifyContent:"space-around", flexWrap:"wrap"}}>
                            <Grid mt={-0.6}>
                            <img src={"/heart-regular-2.png"} />
                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                    <image id="star-regular-24" width="18" height="18" opacity="0.6" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAflJREFUSEvFlu01BEEQRd9GgAgQARkgAkSADIgAESACZGAjQAZEgAyIgHOdrj21ZWp6pnG2/hgzs3371cfrmWhBMVkQV78B75VN37VsvhW8Lem+AHckPYyFt4IBbRUY18BHRQt4TdJLoKxLeh1DbgHfSDoIkFtJh/8J9mqBEbaJFUnvQ+FjFZ9JOnVNxaU12bkkng+KMeDlUlv+PkqiswlrNNRS60GqI5jZ3CgLAth02zcQt/Yl2fxS22v3nh+tJ7cRrqf2ngcfS7oYkKc3SdTaBx29OuC3R5Jozjnn8qZga5BSC1PCD+PosBHrap8Zm3VbY2Y2MdU+bdSKF0lRS8QSzNRGxbb4X8D9rH+URpwTkHV1hJ9YbQZIr0IzxV3KYydnfA99lsSUdFppbY69cj+7XWDfnED5P53pGhjAZ6FcSWLk+mLwuzWwV+FNI4NjKrslvbhYGjWwNxV/9LEhcyvGxGY8e//HBmpgU2BuhY1ySMSUX0rikDA/B8QkcL8zamCaY0kSRyAdi0qzS+aT4DlB95pJYJ/4sn2XjVLsz14W9f5Mh5tFsiFvjWwW5UQqrE9xtDwWQiVnbkwhqee+qTeFaUP2geMnjqnMvq3ISFSfjmAf2BorU5n1jVef1rkPTJ1YpOsYrPjIdz9QKkrS6V61rq4Bmp8vDPwF3g5zHyvzCuUAAAAASUVORK5CYII="/>
                                </svg> */}
                            </Grid>
                            <Grid ml={2.5} mt={-2} sx={{fontSize:"8px", color:'black'}}>
                                {props.userData.Likes}
                            </Grid>
                        </Grid>
                        <Grid sx={{flexGrow:"1"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                <image id="paper-plane-regular-24" width="18" height="18" opacity="0.8" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABvUlEQVRIS+2W/TEDcRCG31RAB5RABagAFaACOkAFqAAd6IBUgArQARUwT2bX7H3s5e7yi/xjZ24ul9zts/vux2WiFdlkRVz9g0sqvy7pVNKZpE9J23aeMZYhdQTy2W1P0pNflARvSjqXdJzIVhycAacm7b4FUklykYx3LUPO0QBemKycUaFR1jHgDHhvwPcQRREwtSN6pI3WBvTfr62zvyTFRuvV1W1AHOGUg1Fx25L0Eq7p4h1JyF8pSSZ1NhIZEBVuDYC8br3BGfDD6ndXk5n7r2yECIoAogK9wMj0WKtFF9C3ktfu0oKLsdFoG5Log8p8R6lZbUTvRuTUkIdip7bVnADrTYefb3PWCKpeY+qDY6KMhsQPlhHK1O1EUr0Mg8DuEDgHHTnPsmxHgR3GCBDAUQc9yxZlnu25Q1Ps103fzUX93hI4ElPD2AfcStA0K1Z5QfBFX3CULUueHrgJr74/A3tAZE6TUvulZsziINsDSWuJHA1lF5WaHUzzkSWLhF3QNo5FwW2bqm0cXyU1Zn9MxtQOWeNbKGs4gKgR9/fs3qFg1qf/a5y3WDp/HwImS5qoiA0BFwG6k5WBfwC5AG4fxDqcBAAAAABJRU5ErkJggg=="/>
                            </svg>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item paddingBottom={2}> 
                    <Box sx={{ color:"black", textAlign:"left",fontSize:"12px", minHeight: '165px', maxHeight: '165px', overflow:'scroll'}}>
                    {props.userData.Description}
                    </Box>
                </Grid>
        
                <Grid item sx={{textAlign:"left"}} >
                    <Box>
                        <Link href={{ pathname: '/profile', query: { userID: props.userData.UserID } }}>
                            <Button className={styles.btn_prof} sx={{textTransform:"capitalize" ,background:"#000000", color:"#5C5A5A", fontSize:"14px", width:"144px",height:"21px",paddingTop:"11px",paddingBottom:"9px"}} >
                                Visit Profile
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{color: "lightGrey",fontSize:"12px",display:"flex",flexWrap:"wrap",flexDirection:"row", justifyContent:'space-between', padding:'0px 10px 0px 10px'}}>
                <Grid item sx={{fontSize:"10px", color:'black'}}>
                    MEM: {props.userData.ReferenceNumber}
                </Grid>
                <Grid item sx={{fontSize:"10px", color:'black'}}>
                    last updated on: {props.userData.LastUpdated}
                </Grid>
            </Grid>
        </Paper>
    }
    else
    {
        aCard=<Paper className={MainPageStyles.profileCard}>
        </Paper>
    }
    return aCard;
}