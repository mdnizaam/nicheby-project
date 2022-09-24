import Head from 'next/head'
import { Grid, Box, Typography, TabsUnstyled, TabsListUnstyled, TabPanelUnstyled, TabUnstyled } from '@mui/material';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import React from 'react'
import profileStyles from '../styles/Profile.module.css';
import ProfileCV from "../components/ProfileCV.js"
import ProfilePortfolio from "../components/ProfilePortfolio.js"
import ProfileCertificates from "../components/ProfileCertificates.js"
import { useRouter } from 'next/router';
import ErrorPage from '../components/ErrorPage'; 

/**
 * The Main Page which diplays the profile of a user with 3 tab layout
 */
export default function profile(props)
{
    const [userID, setUserID] = React.useState(null);
    const router = useRouter();

    /**
     * To be implemented
     * @param {*} _userID the unique id of the user
     * @returns the userid is valid and exist in database
     */
    const validateUserID = async (_userID)=>
    {
        // check if the user is validated and return the result
        return true;
    }

    /**
     * check if the userID is valid and set set its value on mount
     */
    React.useEffect(()=>{
        if(typeof router.query.userID !== undefined && userID === null)
        {
            validateUserID(router.query.userID).then((validated)=>{
                if(validated === true)
                    setUserID(router.query.userID);
            })
        }
    }, []);

    /**
     * If the userid is not null then its valid, setup the tab layout
     * Else setup a error page
     */
    let profileContainer;
    if(userID !== null)
    {
        profileContainer = <TabsUnstyled defaultValue={0} className={profileStyles.Tabs}>
            <TabPanelUnstyled className={profileStyles.TabPanel} value={0}>
                <ProfileCV userID={userID}/>
            </TabPanelUnstyled>
            <TabPanelUnstyled className={profileStyles.TabPanel} value={1}>
                <ProfilePortfolio userID={userID}/>
            </TabPanelUnstyled>
            <TabPanelUnstyled className={profileStyles.TabPanel} value={2}>
                <ProfileCertificates userID={userID}/>
            </TabPanelUnstyled>
            <TabsListUnstyled className={profileStyles.TabList}>
                <TabUnstyled className={profileStyles.Tab}>CV</TabUnstyled>
                    <TabUnstyled className={profileStyles.Tab}>Portfolio</TabUnstyled>
                    <TabUnstyled className={profileStyles.Tab}>Certificates</TabUnstyled>
            </TabsListUnstyled>
        </TabsUnstyled>;
    }
    else
    {
        profileContainer = <ErrorPage errorCode={404} errorMsg={"User not found."}/>
    }

    return (
        <Grid container>
            <Head>
                <title>User Profile</title>
            </Head>
            <Grid item xs={4} md={4} mt={1} mb={1} ml={3}>
                <Link href="/">
                    <Typography  className={styles.heading1} sx={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      padding: "1px 8px 1px 7px",
                      display: "inline-block",
                      font: "Artifakt Element",
                      borderRadius: "8px",
                      color: "#000000",
                      border: "1px solid #000000"
                      }}
                      inputprops={{ form: { autocomplete: 'off' } }}>
                       NicheBy
                    </Typography>
                </Link>
                  
                {/*<Box sx={{ position: 'absolute', right: '35px',top: '16px', display: "flex"}} fullWidth>
                <Link href='report'>
                    <Typography sx={{fontSize: '22px', fontWeight: 'bold'}}>Report</Typography>
                    </Link>
                    </Box>*/}
            </Grid>
            {profileContainer}
        </Grid>
    );
}