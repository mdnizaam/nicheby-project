import React from 'react'
import styles from '../styles/Home.module.css'
import { Grid, Paper, Button, MenuItem, Menu, Link, Box } from '@mui/material'
import { useScrollTrigger } from '@mui/material'

const SigninScrollcolor = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(true)
    } else {
      setUser(null)
    }
  }, [])

  const Logout = () => {
    localStorage.removeItem('user')
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  })

  const scrollTheme = {
    backgroundColor: trigger ? '#373737 !important' : '#FFF !important',
    transition: trigger ? '0.3s !important' : '0.5s !important',
    color: trigger ? '#FFFFFF !important' : '#373737 !important',
    // borderBottom: trigger ? '1px solid red !important' : '',
    width: trigger ? '100% !important' : '100% !important',
    // border: trigger ? '' : '.5px solid gray !important',
    borderRadius:trigger ? '0px' :"0px"
  }

  let SigninMenu
  if (user === null) {
    SigninMenu = (
      <>
        <Button
          disableRipple
          className={anchorEl ? styles.signinclick : styles.signin}
          onClick={handleClick}
          sx={scrollTheme}
        >
          Sign in
          <Grid
            className={anchorEl ? styles.signindropshow : styles.signindrophide}
            mt={-3.5}
          >
            <Paper className={styles.dropdownshift}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 27 16"
                padding="10px"
              >
                <g
                  id="Polygon_6"
                  data-name="Polygon 6"
                  transform="translate(26 23) rotate(180)"
                  fill="#7f7f7f"
                >
                  <path
                    d="M 22.57220077514648 22.5 L 3.427799940109253 22.5 C 2.88838005065918 22.5 2.40405011177063 22.22184944152832 2.13221001625061 21.75593948364258 C 1.860360026359558 21.29002952575684 1.856529951095581 20.73151016235352 2.121949911117554 20.26191902160645 L 11.6941499710083 3.326479434967041 C 11.96380996704102 2.849389314651489 12.451979637146 2.564569473266602 13 2.564569473266602 C 13.548020362854 2.564569473266602 14.03619003295898 2.849389314651489 14.3058500289917 3.326479434967041 L 23.87804985046387 20.26191902160645 C 24.14347076416016 20.73151016235352 24.13964080810547 21.29002952575684 23.86779022216797 21.75593948364258 C 23.59594917297363 22.22184944152832 23.11161994934082 22.5 22.57220077514648 22.5 Z"
                    stroke="none"
                  />
                  <path
                    d="M 13 3.064569473266602 C 12.82456970214844 3.064569473266602 12.3885498046875 3.114059448242188 12.12942981719971 3.572509765625 L 2.557229995727539 20.50794982910156 C 2.302179336547852 20.95919036865234 2.47705078125 21.35480880737305 2.564069747924805 21.50395011901855 C 2.651090621948242 21.65309906005859 2.909460067749023 22 3.427799224853516 22 L 22.57220077514648 22 C 23.09053993225098 22 23.34890937805176 21.65309906005859 23.4359302520752 21.50395011901855 C 23.52294921875 21.35480880737305 23.69782066345215 20.95919036865234 23.44277000427246 20.50794982910156 L 13.87057018280029 3.572509765625 C 13.6114501953125 3.114059448242188 13.17543029785156 3.064569473266602 13 3.064569473266602 M 13 2.064567565917969 C 13.67916488647461 2.064567565917969 14.35832977294922 2.403194427490234 14.74112987518311 3.080450057983398 L 24.31332969665527 20.01588821411133 C 25.0669002532959 21.34912872314453 24.10367965698242 23 22.57220077514648 23 L 3.427799224853516 23 C 1.896320343017578 23 0.9330997467041016 21.34912872314453 1.686670303344727 20.01588821411133 L 11.25887012481689 3.080450057983398 C 11.64167022705078 2.403194427490234 12.32083511352539 2.064567565917969 13 2.064567565917969 Z"
                    stroke="none"
                    fill="#707070"
                  />
                </g>
              </svg>
            </Paper>
          </Grid>
        </Button>

        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={0}
          sx={{ marginTop: '0px', paddingTop: '0px !important' }}
        >
          <MenuItem
            onClick={handleClose}
            className={styles.dropdown1}
            sx={scrollTheme}
          >
            <Link
              className={styles.sgninlink}
              // href="register-employee"
              sx={scrollTheme}
              
            >
              Sign up as Employer
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className={styles.dropdown2}
            sx={scrollTheme}
          >
            <Link className={styles.sgninlink} href="register" sx={scrollTheme}>
              Sign up as Student
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className={styles.dropdown3}
            sx={scrollTheme}
          >
            <Link className={styles.sgninlink} href="login" sx={scrollTheme}>
              Login
            </Link>
          </MenuItem>
        </Menu>
      </>
    )
  } else {
    SigninMenu = (
      <>
        <Button
          onClick={handleClick}
          sx={{ filter: trigger ? '' : 'invert(1)', marginRight: '5px' }}
        >
          <img src="./DashboardHeaderAccount.svg" />
        </Button>
        <Grid
          className={anchorEl ? styles.signindropshow : styles.signindrophide}
        ></Grid>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={0}
          MenuListProps={{
            sx: {
              padding: '8px 0px 0px 0px',
              borderTop: '0.01px solid #707070',
            },
          }}
          sx={{ marginTop: '5px', marginLeft: '-50px' }}
        >
          <MenuItem
            onClick={handleClose}
            className={styles.dropdown5}
            sx={scrollTheme}
          >
            <Link
              className={styles.headerMenu}
              href="/dashboard"
              sx={scrollTheme}
            >
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className={styles.dropdown5}
            sx={scrollTheme}
          >
            <Link
              className={styles.headerMenu}
              href="/setting"
              sx={scrollTheme}
            >
              Settings
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className={styles.dropdown5}
            sx={scrollTheme}
          >
            <Link
              className={styles.headerMenu}
              href="/portfolio"
              sx={scrollTheme}
            >
              Portfolio
            </Link>
          </MenuItem>
          {/* <MenuItem
            onClick={handleClose}
            className={styles.dropdown5}
            sx={scrollTheme}
          >
            <Link
              className={styles.headerMenu}
              href="/messages"
              sx={scrollTheme}
            >
              Messages
            </Link>
          </MenuItem> */}
          <MenuItem
            onClick={handleClose}
            className={styles.dropdown5}
            sx={scrollTheme}
          >
            <Link
              className={styles.headerMenu}
              onClick={Logout}
              href="/"
              sx={scrollTheme}
            >
              Log out
            </Link>
          </MenuItem>
        </Menu>
      </>
    )
  }

  return SigninMenu
}

export default SigninScrollcolor
