
import Head from 'next/head'
import { Grid, AppBar, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react'
import Navcolbar from '../components/navbarscrolltocolor';
import Main from '../components/mainPageCards.js';
import Image from 'next/dist/client/image';
import withAuth from '../components/HOC/withAuth';

 const Home=()=> {
  const [toggle,setToggle] = useState(false);
  const toggler = (e) => {
    setToggle((toggle) => e);
  };
  
  return (
    <>
      <Head>
        <title>NicheBy</title>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
          <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet" />
          <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
          
      </Head>
      <Grid container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" elevation={0}>
            <Navcolbar popOverControl={toggler}/>
          </AppBar>
        </Box>
      </Grid>
      <Main shrinkToPopOver={toggle} />
    </>
  )
}
export default withAuth(Home)

