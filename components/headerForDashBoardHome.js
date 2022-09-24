import React, { Component } from 'react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import TitleScrollcolor from './titlescrolltocolor'
import ScrollToColor01 from './navbarcolor'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Menu,
  MenuItem,
} from '@mui/material'
import styles from '../styles/Home.module.css'

const Header = (props) => {
  const theme = createTheme()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const Logout = () => {
    localStorage.removeItem('user')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#5E5E5E' }}>
        <Toolbar sx={{ minheight: '8.5vh' }}>
          <Typography
            className={styles.heading1}
            sx={{
              fontSize: '35px',
              fontWeight: 'bold',
              padding: '4px 8px 1px 7px',
              display: 'inline-block',
              font: 'Artifakt Element',
            }}
            inputprops={{ form: { autocomplete: 'off' } }}
          >
            NicheBy
          </Typography>
          &nbsp;
          <Typography
            className={styles.heading1}
            sx={{
              fontSize: '35px',
              fontWeight: 'bold',
              padding: '4px 8px 1px 7px',
              display: 'inline-block',
              font: 'Artifakt Element',
            }}
            inputprops={{ form: { autocomplete: 'off' } }}
          >
            {/* Nizam */}
          </Typography>
          <Box
            sx={{
              color: 'white',
              position: 'absolute',
              right: '10px',
              display: 'flex',
              alignItems:"center",
              justifyContent:"center",
            }}
            fullWidth
          >
            <img src="./DashBoardHeaderNotificationIcon.svg" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="/DashboardHeaderAccount.svg" onClick={handleClick} />
            <Grid
              className={
                anchorEl ? styles.signindropshow : styles.signindrophide
              }
            ></Grid>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              elevation={0}
              sx={{ marginTop: '13px', paddingTop: '0px' }}
            >
              <MenuItem onClick={handleClose} className={styles.dropdown4}>
                <a className={styles.headerMenu} href="/dashboard">
                  Dashboard
                </a>
              </MenuItem>

              {/* <MenuItem onClick={handleClose} className={styles.dropdown4}>
                <a className={styles.headerMenu} href="/setting">
                  Settings
                </a>
              </MenuItem> */}

              <MenuItem onClick={handleClose} className={styles.dropdown4}>
                <a className={styles.headerMenu} href="/portfolio">
                  Portfolio
                </a>
              </MenuItem>

                  {/* <MenuItem onClick={handleClose} className={styles.dropdown4}>
                  <a className={styles.headerMenu} href="/messages">
                        Messages
                  </a>
                  </MenuItem> */}

              <MenuItem onClick={handleClose} className={styles.dropdown4}>
                <a className={styles.headerMenu} onClick={Logout} href="/">
                  Log out
                </a>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
export default Header
