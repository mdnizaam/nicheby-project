import React, {useState, useEffect} from 'react';
import {Button, Checkbox, Grid, TextField, Typography, Paper, FormGroup, FormControlLabel, Box, Hidden, Alert, Switch, TextareaAutosize} from '@mui/material';
import styles from '../styles/Setting.module.css';

export default function Setting() {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState({});
    const [alertMsg, setAlertMsg] = useState('');
    const [devices, setDevices] = useState([
        {name: 'iPhone 6', type: 'phone', location: 'Maharashtra'},
        {name: 'ipad X', type: 'tab', location: 'A.P.'},
        {name: 'DELL Laptop', type: 'desktop', location: 'Delhi'}
    ]);

    const saveDetails = (updatedDetails) => {
        // axios.post(`${baseUrl}/seeker/add-details`, updatedDetails, {headers: {Authorization: user.token}}).catch((err) => {
        //     setAlertMsg(err.response.data.message);
        //     setTimeout(() => {
        //         setAlertMsg('');
        //     }, 3000);
        // });
    };

    const updateUserDetails = async (e) => {
        let updatedDetails = {...userDetails, [e.target.name]: e.target.value};
        setUserDetails(updatedDetails);
        saveDetails(updatedDetails);
    };

    useEffect(async () => {
        // Protected Routing
        if (localStorage.getItem('user')) {
            var _user = JSON.parse(localStorage.getItem('user'));
            setUser(_user);
        } else {
            window.location = '/login';
        }
    }, []);

    return (
        <>
            <Grid container spacing={1}>
                {/* Basic Fields */}
                <Grid item xs={12} maxWidth={900}>
                    <Grid container spacing={2} p={1} pl={{xs: 1, sm: 2, md: 3, lg: 4}} pr={{xs: 1, sm: 2, md: 3, lg: 4}}>
                        <Grid item xs={4} sm={5}>
                            <Typography pt={1} className={styles.fieldName}>
                                First Name
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sm={7}>
                            <TextField InputProps={{className: styles.input}} fullWidth size="small" autoComplete="new-password" name="firstName" sx={{borderRadius: '10px'}} value={userDetails.firstName} onChange={(e) => updateUserDetails(e)} />
                        </Grid>
                        <Grid item xs={4} sm={5}>
                            <Typography pt={1} className={styles.fieldName}>
                                Last Name
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sm={7}>
                            <TextField InputProps={{className: styles.input}} fullWidth size="small" autoComplete="new-password" name="lastName" value={userDetails.lastName} onChange={(e) => updateUserDetails(e)} />
                        </Grid>
                        <Grid item xs={4} sm={5}>
                            <Typography className={styles.fieldName}>Company Name</Typography>
                        </Grid>
                        <Grid item xs={8} sm={7}>
                            <TextField InputProps={{className: styles.input}} fullWidth size="small" autoComplete="new-password" name="companyName" value={userDetails.companyName} onChange={(e) => updateUserDetails(e)} />
                        </Grid>
                        <Grid item xs={4} sm={5}>
                            <Typography pt={1} className={styles.fieldName}>
                                Email
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sm={7}>
                            <TextField InputProps={{className: styles.input}} fullWidth size="small" autoComplete="new-password" name="email" value={userDetails.email} onChange={(e) => updateUserDetails(e)} />
                        </Grid>
                        <Grid item xs={4} sm={5}>
                            <Typography className={styles.fieldName}>Current Password</Typography>
                        </Grid>
                        <Grid item xs={8} sm={7}>
                            <TextField InputProps={{className: styles.input}} fullWidth size="small" autoComplete="new-password" name="currentPassword" value={userDetails.currentPassword} onChange={(e) => updateUserDetails(e)} />
                        </Grid>
                        <Grid item xs={4} sm={5}>
                            <Typography className={styles.fieldName}>Enter New Password</Typography>
                        </Grid>
                        <Grid item xs={8} sm={7}>
                            <TextField InputProps={{className: styles.input}} fullWidth size="small" autoComplete="new-password" name="newPassword" value={userDetails.newPassword} onChange={(e) => updateUserDetails(e)} />
                        </Grid>
                        <Grid item xs={4} sm={5}>
                            <Typography className={styles.fieldName}>Confirm Password</Typography>
                        </Grid>
                        <Grid item xs={8} sm={7}>
                            <TextField InputProps={{className: styles.input}} fullWidth size="small" autoComplete="new-password" name="confirmPassword" value={userDetails.confirmPassword} onChange={(e) => updateUserDetails(e)} />
                        </Grid>

                        <Grid item xs={12} mt={1}>
                            <Button sx={{width: 'min(100%, 150px)'}} variant="outlined" className={styles.btn}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Devices Logged In */}
                {/*<Grid item xs={12}>
                    <Grid container p={1} pl={{xs: 1, sm: 2, md: 3, lg: 4}} pr={{xs: 1, sm: 2, md: 3, lg: 4}} className={styles.devicesLoggedInHeading}>
                        Devices Logged In
                    </Grid>
                </Grid>*/}
                {/* Devices Heading*/}
                {/*<Grid item xs={12} sx={{borderBottom: '1px solid black'}}>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography p={1} sx={{textAlign: 'center'}} className={styles.fieldName}>
                                Devices
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography p={1} sx={{display: {xs: 'none', md: 'block'}, textAlign: 'center'}} className={styles.fieldName}>
                                Device Name
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Typography p={1} sx={{textAlign: 'center'}} className={styles.fieldName}>
                                Location
                            </Typography>
                        </Grid>
                        <Grid item xs={4} md={2}></Grid>
                    </Grid>
            </Grid>*/}
                {/* Devices */}
                {/*devices.map((device) => (
                    <Grid item xs={12} sx={{borderBottom: '1px solid black'}}>
                        <Grid container direction="vertical" alignItems="center" spacing={1} p={1} pt={0}>
                            <Grid item xs={2} sx={{textAlign: 'center'}}>
                                {device.type == 'phone' ? <img className={styles.device} src="/icons8-iphone-100.png" alt={device.type} /> : null}
                                {device.type == 'tab' ? <img className={styles.device} src="/icons8-ipad-100.png" alt={device.type} /> : null}
                                {device.type == 'desktop' ? <img className={styles.device} src="/icons8-imac-100.png" alt={device.type} /> : null}
                            </Grid>
                            <Grid item md={4} sx={{display: {xs: 'none', md: 'block'}}}>
                                <Typography className={styles.fieldName} sx={{textAlign: 'center'}}>
                                    {device.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Typography sx={{textAlign: 'center'}} className={styles.fieldName}>
                                    {device.location}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} md={2} pr={1}>
                                <Button fullWidth variant="outlined" className={styles.btn}>
                                    Log Out
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                ))*/}
                {/* Logout from all devices */}

                {/*<Grid item xs={12} mt={2} pr={2}>
                    <Button fullWidth sx={{width: 'min(100%, 250px)'}} variant="outlined" className={styles.btn}>
                        Log Out from All Devies
                    </Button>
                </Grid>*/}
                
            </Grid>
        </>
    );
}
