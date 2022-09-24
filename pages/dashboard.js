import React, { useState, useEffect, useReducer } from 'react'
import Link from 'next/link'
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Paper,
  FormGroup,
  FormControlLabel,
  Box,
  Hidden,
  Alert,
  Switch,
  TextareaAutosize,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import ApexChart from '../components/apexCharts'
import QRCode from 'qrcode'
import Header from '../components/headerForDashBoardHome'
import styles from '../styles/Dashboard.module.css'
import 'react-circular-progressbar/dist/styles.css'
import axios from 'axios'
import Multiselect from 'multiselect-react-dropdown'
import AvatarEditor from 'react-avatar-editor'
import{softwareData} from "../components/Skills/softwares"
import { programingData } from '../components/Skills/programungLanData'

const supportedFiletype = ['png', 'jpg', 'jpeg']
const delimiters = [13, 188]
const baseUrl = `http://localhost:4000`
const baseUrl2 = `http://13.233.252.26`

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  marginLeft: 0,
  padding: 0,
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 20,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(20px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 1.8,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#84D82',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))

export default function Deshboard() {
  const [open, setOpen] = React.useState(false)
  const [imgCrop, setImgCrop] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  // multi select tags
  const data = [
    'C++',
    'C',
    'Java',
    'JavaScript',
    'Python',
    'Node js',
    'React js',
  ]
  const [options] = useState(softwareData)
  const courses = [
    'BFA',
    'MFA',
    'B.arch',
    'M.arch',
    'B.tech',
    'M.tech',
    'MBA',
    'MCA',
    'MassCom',
    'LLB',
    'LLM',
  ]
  const universities = ['Jamia Millia Islamia', 'DU']
  const colleges = {
    'Jamia Millia Islamia': ['Jamia Millia Islamia'],
    DU: ['DelhiDU', 'DEC', 'DBC'],
  }

  const countries = ['India']
  const cities = {
    India: ['Delhi', 'Hyderabad', 'Bhopal', 'Mumbai', 'Kolkata'],
    USA: ['DelhiDU', 'DEC', 'DBC'],
  }

  const [coutText, setCountText] = useState(0)
  const [toggleJob, setToggleJob] = useState('job')
  const [user, setUser] = useState(null)

  // individual form data start here
  const [selectGender, setSelectGender] = useState('')
  const [selectUniversity, setSelectUniversity] = useState('')
  const [selectCollege, setSelectCollege] = useState('')
  const [selectCourse, setSelectCourse] = useState('')
  const [selectCity, setSelectCity] = useState('')
  const [selectCountries, setSelectCountries] = useState('')
  const [languages, setLanguages] = useState([])
  const [softwares, setSoftwares] = useState([])
  const [description, setDiscription] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const[profileImage,setProfileImage]=useState(
    {
      preview:"",
      raw:""
    }
  )
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    year_of_graduation: '',
    year_of_experience: '',
    percentage_grade_in_course: '',
    profile_pic: '',
  })
  console.log('profilePic', profilePic)
  const [notifications, setNotifications] = useState([
    'You have a new message from Reliance Industries.',
    'You have a notification from Nicheby.com',
  ])
  const [alertMsg, setAlertMsg] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [percentage, setPercentage] = useState(20)
  const [QRUrl, setQRUrl] = useState()

  const jobToggleHandle = (job) => {
    setToggleJob(job)
  }
  // useEffect(async () => {
  //   // Protected Routing
  //   if (localStorage.getItem('user')) {
  //     var _user = JSON.parse(localStorage.getItem('user'))
  //     console.log('user', _user)
  //     await setUser(_user)

  //     axios
  //       .get(`${baseUrl2}/student`, {
  //         headers: { Authorization: _user },
  //       })
  //       .then((result) => {
  //         console.log('result:->', result)
  //         setUserDetails(result.data.seekerDetails)
  //         setLanguages(result.data.seekerDetails.programmingLanguages)
  //         setSoftwares(result.data.seekerDetails.softwares)
  //         QRCode.toDataURL(
  //           result.data.seekerDetails.RefId,
  //           { errorCorrectionLevel: 'H' },
  //           (err, url) => {
  //             url && setQRUrl(url)
  //             window.scrollTo(0, 0)
  //           },
  //         )
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         setAlertMsg(err.response.data.message)
  //         setTimeout(() => {
  //           setAlertMsg('')
  //         }, 3000)
  //       })
  //   } else {
  //     window.location = '/login'
  //   }
  // }, [])

  const toggleShowModal = () => {
    setShowModal(!showModal)
  }
  const getCurrentDate = () => {
    let today = new Date()
    let date = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    return `${date}/${month < 10 ? `0${month}` : `${month}`}/${year}`
  }

  const updateUserPhoto = async (e) => {
    var selectedFile = e.target.files[0]
    var ext =
      selectedFile.name.split('.')[selectedFile.name.split('.').length - 1]
    if (!supportedFiletype.includes(ext)) {
      setAlertMsg('File Type Not supported')
      setTimeout(() => {
        setAlertMsg('')
      }, 3000)
      return
    }
    setProfileImage(
      {
        preview:URL.createObjectURL(selectedFile),
        raw:selectedFile
      }
    )
  }
  const handleUpdateProfile = () => {
    let  formData = new FormData()
    formData.append('photo', profileImage.raw,profileImage.raw.name)
    console.log('formData', profileImage)
    // axios
    //   .post(`${baseUrl2}/seeker/change-profile-picture`, formData, {
    //     headers: { Authorization: user.token },
    //   })
    //   .then((result) => {
    //     console.log(result)
    //     // let updatedDetails = {
    //     //   ...userDetails,
    //     //   ['photo']: result.data.photoLink,
    //     // }
    //     // setUserDetails(updatedDetails)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     // setAlertMsg(err.response.data.message)
    //     // setTimeout(() => {
    //     //   setAlertMsg('')
    //     // }, 3000)
    //   })
    setOpen(false)
  }
  const handleText = (e) => {
    setDiscription(e.target.value)
    setCountText(e.target.value.length)
  }

  const saveDetails = (updatedDetails) => {
    const allData = {
      gender: selectGender[0],
      university: selectUniversity[0],
      collage: selectCollege[0],
      course: selectCourse[0],
      city: selectCity[0],
      country: selectCountries,
      programing_language: String(languages),
      software: String(softwares),
      description: description,
      ...userDetails,
    }
    console.log('updatedDetaills', updatedDetails)
    console.log('ALl Data', allData)
    // axios
    //   .post(`${baseUrl2}/student`, allData, {
    //     headers: { Authorization: user.token },
    //   })
    //   .catch((err) => {
    //     setAlertMsg(err.response.data.message)
    //     setTimeout(() => {
    //       setAlertMsg('')
    //     }, 3000)
    //   })
  }
  const updateUserDetails = async (e) => {
    let updatedDetails = {
      ...userDetails,

      [e.target.name]: e.target.value,
    }
    setUserDetails(updatedDetails)
    // saveDetails(updatedDetails)
  }

  return (
    <>
      {/* {user && userDetails ? ( */}
      {true ? (
        <>
          {alertMsg ? (
            <Alert
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, 10px)',
                width: 'min(90%, 800px)',
              }}
              severity="error"
            >
              {alertMsg}
            </Alert>
          ) : null}
          <Navbar
            modal={showModal}
            setModal={setShowModal}
            toggleModal={toggleShowModal}
          />
          <Grid xs={12} container>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid
              item
              sm={4}
              lg={3}
              sx={{ display: { xs: 'none', sm: 'fixed' }, marginTop: '8.5vh' }}
            >
              <Sidebar />
            </Grid>
            {!showModal ? (
              <Grid item xs={12} sm={8} lg={9} sx={{ marginTop: '8.5vh' }}>
                {/* Dashboard */}
                <Grid container>
                  <Grid item xs={12}>
                    <Grid container>
                      {/* Chart */}
                      <Grid item xs={12} lg={9} pt={{ lg: 2 }}>
                        <Grid
                          container
                          style={{
                            justifyContent: 'space-between',
                            padding: '0 25px',
                          }}
                        >
                          <Grid
                            sx={{ display: { xs: 'none', sm: 'fixed' } }}
                            item
                            style={{ marginLeft: '25px', fontSize: '1.4rem' }}
                          >
                            Views
                          </Grid>
                          <Grid
                            sx={{ display: { xs: 'none', sm: 'fixed' } }}
                            item
                          >
                            Date: {getCurrentDate()}
                          </Grid>
                        </Grid>
                        <ApexChart />
                      </Grid>

                      {/* Share, Like, Verification */}
                      <Grid
                        item
                        xs={12}
                        p={2}
                        pb={0}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                      >
                        <Grid container>
                          <Grid item xs={6}>
                            <Grid container>
                              <Grid item xs={6}>
                                <Typography
                                  xs={12}
                                  className={styles.profileOverviewHeading}
                                >
                                  Shares
                                </Typography>
                                <Typography xs={12} className={styles.count}>
                                  100
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography
                                  xs={12}
                                  className={styles.profileOverviewHeading}
                                >
                                  Likes
                                </Typography>
                                <Typography xs={12} className={styles.count}>
                                  1K
                                </Typography>
                              </Grid>
                              <Typography
                                xs={12}
                                sx={{
                                  marginTop: '15px',
                                  fontWeight: 600,
                                  fontSize: '0.8rem',
                                }}
                              >
                                Member ID: #{/* {userDetails.RefId} */}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={6} pl={3}>
                            <Grid container>
                              <Grid
                                item
                                xs={12}
                                className={styles.profileOverviewHeading}
                              >
                                Verification
                              </Grid>
                              <Grid
                                item
                                xs={7}
                                style={{ textAlign: 'center' }}
                                mt={1}
                              >
                                <CircularProgressbar
                                  value={percentage}
                                  strokeWidth={14}
                                  text={`${percentage}%`}
                                  styles={buildStyles({
                                    strokeLinecap: 'butt',
                                    textColor: '#000',
                                    pathColor: '#353F5C',
                                  })}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      {/* Share, copy QR code */}
                      <Grid
                        item
                        xs={12}
                        pl={2}
                        pr={2}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                      >
                        <Grid container>
                          <Grid item xs={6} pt={2}>
                            <Grid item xs={12} className={styles.shareProfile}>
                              Share your profile with others
                            </Grid>
                            <Grid item xs={12}>
                              <Button className={styles.btn} variant="outlined">
                                <Grid container>
                                  <Grid item xs={3}>
                                    <img
                                      className={styles.copyImage}
                                      src="/copy.svg"
                                    />
                                  </Grid>
                                  <Grid item xs={9} className={styles.text}>
                                    Copy QR Code
                                  </Grid>
                                </Grid>
                              </Button>
                            </Grid>
                            <Grid item xs={12} className={styles.or}>
                              OR
                            </Grid>
                            <Grid item xs={12} className={styles.shareProfile}>
                              Share it on social media
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              style={{
                                justifyContent: 'space-between',
                                display: 'inline-flex',
                                width: '100%',
                              }}
                            >
                              <Link href="#">
                                <img
                                  src="/icons8-facebook-f-100.svg"
                                  className={styles.mediaicons}
                                />
                              </Link>
                              <Link href="#">
                                <img
                                  src="/instagram.svg"
                                  className={styles.mediaicons}
                                />
                              </Link>
                              <Link href="#">
                                <img
                                  src="/icons8-twitter-100.svg"
                                  className={styles.mediaicons}
                                />
                              </Link>
                            </Grid>
                          </Grid>
                          <Grid item xs={6} pl={1}>
                            <Grid item xs={12}>
                              <img
                                style={{ width: 'min(100%, 150px)' }}
                                src={QRUrl}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* Share, Copy QR, share, like, verifications */}
                      <Grid
                        item
                        lg={3}
                        sx={{ display: { xs: 'none', lg: 'block' } }}
                      >
                        <Grid container>
                          {/* Share, Like, Verification >=lg*/}
                          <Grid item xs={12} p={2} pb={0}>
                            <Grid container>
                              <Grid item xs={5}>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <Typography
                                      xs={12}
                                      className={styles.profileOverviewHeading}
                                    >
                                      Shares
                                    </Typography>
                                    <Typography
                                      xs={12}
                                      className={styles.count}
                                    >
                                      100
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography
                                      xs={12}
                                      className={styles.profileOverviewHeading}
                                    >
                                      Likes
                                    </Typography>
                                    <Typography
                                      xs={12}
                                      className={styles.count}
                                    >
                                      1K
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={7} pl={4}>
                                <Grid container>
                                  <Grid
                                    item
                                    xs={12}
                                    className={styles.profileOverviewHeading}
                                  >
                                    Verification
                                  </Grid>
                                  <Grid
                                    item
                                    xs={10}
                                    style={{ textAlign: 'center' }}
                                    mt={1}
                                  >
                                    <CircularProgressbar
                                      value={percentage}
                                      strokeWidth={14}
                                      text={`${percentage}%`}
                                      styles={buildStyles({
                                        strokeLinecap: 'butt',
                                        textColor: '#000',
                                        pathColor: '#353F5C',
                                      })}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          {/* Share, copy QR code */}
                          <Grid item xs={12} pl={2} pr={2}>
                            <Grid container>
                              <Grid item xs={5} pt={2}>
                                <Grid
                                  item
                                  xs={12}
                                  className={styles.shareProfile}
                                >
                                  Share your profile with others
                                </Grid>
                                <Grid item xs={12}>
                                  <Button
                                    className={styles.btn}
                                    variant="outlined"
                                  >
                                    <Grid container>
                                      <Grid item xs={3}>
                                        <img
                                          className={styles.copyImage}
                                          src="/copy.svg"
                                        />
                                      </Grid>
                                      <Grid item xs={9} className={styles.text}>
                                        Copy QR Code
                                      </Grid>
                                    </Grid>
                                  </Button>
                                </Grid>
                                <Grid item xs={12} className={styles.or}>
                                  OR
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  className={styles.shareProfile}
                                >
                                  Share it on social media
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  style={{
                                    justifyContent: 'space-between',
                                    display: 'inline-flex',
                                    width: '100%',
                                  }}
                                >
                                  <Link href="#">
                                    <img
                                      src="/icons8-facebook-f-100.svg"
                                      className={styles.mediaicons}
                                    />
                                  </Link>
                                  <Link href="#">
                                    <img
                                      src="/instagram.svg"
                                      className={styles.mediaicons}
                                    />
                                  </Link>
                                  <Link href="#">
                                    <img
                                      src="/icons8-twitter-100.svg"
                                      className={styles.mediaicons}
                                    />
                                  </Link>
                                </Grid>
                              </Grid>
                              <Grid item xs={7} pl={1}>
                                <Grid item xs={12}>
                                  <img
                                    style={{ width: 'min(100%, 180px)' }}
                                    src={QRUrl}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    p={{ sm: 2 }}
                    pr={{ lg: 0 }}
                    pt={{ lg: 0 }}
                    style={{ borderTop: '1px solid #707070'}}
                  >
                    <Grid container>
                      <Grid item xs={12} lg={11}>
                        <Grid container>
                          {/* Display switch & last updated */}
                          <Grid item xs={12} pl={2} pr={2}>
                            <Grid
                              container
                              sx={{
                                justifyContent: 'space-between',
                                marginTop: { xs: '10px', sm: '15px' },
                                paddingRight: { xs: 0, sm: '18px' },
                              }}
                            >
                              <Grid item xs={8} sm={7}>
                                <Typography
                                  sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '0.8rem', sm: '1rem' },
                                  }}
                                >
                                  Display Your Porfolio on Website{' '}
                                  <AntSwitch
                                    defaultChecked
                                    inputProps={{ 'aria-label': 'ant design' }}
                                  />
                                </Typography>
                              </Grid>
                              <Grid item xs={4} sm={5}>
                                <Typography
                                  sx={{
                                    fontSize: { xs: '0.6rem', sm: '0.8rem' },
                                    float: { sm: 'right' },
                                  }}
                                >
                                  Profile Last Updated on: 20/12/2021
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          {/* Photo upload & apply for */}
                          <Grid
                            item
                            xs={12}
                            lg={3}
                            pl={2}
                            pr={2}
                            mt={{ sm: 2 }}
                          >
                            <Grid container mt={{ xs: 2, sm: 4 }} spacing={1}>
                              <Grid item xs={6} lg={12}>
                                <Grid container>
                                  {/* User Photo */}
                                  <Grid item xs={12} sm={9} lg={10}>
                                    <label onClick={handleClickOpen}>
                                      <img
                                        style={{
                                          width: 'min(200px, 100%)',
                                          cursor: 'pointer',
                                        }}
                                        // src={
                                        //   profilePic
                                        //     ? profilePic
                                        //     : '/addFile.png'
                                        // }
                                        src={'/addFile.png'}
                                      />
                                    </label>
                                    {/* <input
                                      type="file"
                                      width="100%"
                                      height="100%"
                                      hidden
                                      id="file"
                                      name="photo"
                                      onChange={(e) => updateUserPhoto(e)}
                                    /> */}
                                  </Grid>
                                  {/* image modal here */}
                                  <div>
                                    {/* <Button
                                      variant="outlined"
                                      onClick={handleClickOpen}
                                    >
                                      Open alert dialog
                                    </Button> */}
                                    <Dialog
                                      open={open}
                                      onClose={handleClose}
                                      aria-labelledby="alert-dialog-title"
                                      aria-describedby="alert-dialog-description"
                                    >
                                      <DialogTitle id="alert-dialog-title">
                                        {
                                          'Please Choose A profile Pic For Upload'
                                        }
                                      </DialogTitle>
                                      <DialogContent>
                                        <Grid item xs={12} sm={9} lg={10}>
                                          <label htmlFor="file">
                                            <img
                                              style={{
                                                width: 'min(200px, 100%)',
                                              }}
                                              src={
                                                profileImage.preview
                                                  ? profileImage.preview
                                                  : '/addFile.png'
                                              }
                                              // src={profilePic}
                                            />
                                          </label>
                                          <input
                                            type="file"
                                            width="200px"
                                            height="150px"
                                            hidden
                                            id="file"
                                            name="photo"
                                            onChange={(e) => updateUserPhoto(e)}
                                          />
                                        </Grid>
                                      </DialogContent>
                                      <DialogActions>
                                        <Button onClick={handleClose}>
                                          Close
                                        </Button>
                                        <Button
                                          onClick={handleUpdateProfile}
                                          autoFocus
                                        >
                                          Upload
                                        </Button>
                                      </DialogActions>
                                    </Dialog>
                                  </div>

                                  {/* Share, likes >=sm */}
                                  <Grid
                                    item
                                    sm={3}
                                    sx={{
                                      display: {
                                        xs: 'none',
                                        sm: 'block',
                                        lg: 'none',
                                      },
                                      textAlign: 'center',
                                    }}
                                    pl={1}
                                    mt={{ sm: 2 }}
                                  >
                                    <Grid container>
                                      <Grid item xs={12}>
                                        <Typography
                                          xs={12}
                                          sx={{ fontSize: '1.1rem' }}
                                          className={
                                            styles.profileOverviewHeading
                                          }
                                        >
                                          Shares
                                        </Typography>
                                        <Typography
                                          xs={12}
                                          className={styles.count}
                                        >
                                          100
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <Typography
                                          xs={12}
                                          sx={{ fontSize: '1.1rem' }}
                                          className={
                                            styles.profileOverviewHeading
                                          }
                                        >
                                          Likes
                                        </Typography>
                                        <Typography
                                          xs={12}
                                          className={styles.count}
                                        >
                                          1K
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>

                                  {/* Ref Id >= sm */}
                                  <Typography
                                    xs={12}
                                    sx={{
                                      display: { xs: 'none', sm: 'block' },
                                      marginTop: '15px',
                                      fontWeight: 600,
                                      fontSize: { xs: '1.1rem', lg: '0.9rem' },
                                    }}
                                  >
                                    Member ID: #{/* {userDetails.RefId} */}
                                  </Typography>
                                </Grid>
                              </Grid>
                              {/* apply for <sm */}
                              <Grid
                                item
                                xs={6}
                                sm={12}
                                sx={{
                                  display: {
                                    xs: 'block',
                                    sm: 'none',
                                    lg: 'none',
                                  },
                                }}
                              >
                                <Grid container>
                                  <Typography xs={12} className={styles.label}>
                                    Apply for
                                  </Typography>
                                  <Grid item xs={12} mt={2}>
                                    <Button
                                      variant="outlined"
                                      className={styles.btn}
                                    >
                                      Internship
                                    </Button>
                                  </Grid>
                                  <Grid item xs={12} mt={2}>
                                    <Button
                                      variant="outlined"
                                      className={styles.btn}
                                    >
                                      Job
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                              {/* verification >=sm */}
                              <Grid
                                item
                                sm={3}
                                sx={{
                                  display: {
                                    xs: 'none',
                                    sm: 'block',
                                    lg: 'none',
                                  },
                                }}
                                mt={{ sm: 2 }}
                              >
                                <Grid container pl={2}>
                                  <Grid
                                    item
                                    xs={12}
                                    sx={{ fontSize: '1.15rem' }}
                                    className={styles.profileOverviewHeading}
                                  >
                                    Verification
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: 'center' }}
                                    mt={3}
                                  >
                                    <CircularProgressbar
                                      value={percentage}
                                      strokeWidth={14}
                                      text={`${percentage}%`}
                                      styles={buildStyles({
                                        strokeLinecap: 'butt',
                                        textColor: '#000',
                                        pathColor: '#353F5C',
                                      })}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                              {/* QR code >=sm */}
                              <Grid
                                item
                                sm={3}
                                sx={{
                                  display: {
                                    xs: 'none',
                                    sm: 'block',
                                    lg: 'none',
                                  },
                                }}
                                mt={{ sm: -2 }}
                              >
                                <Grid container>
                                  <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: 'center' }}
                                  >
                                    <img
                                      style={{ width: 'min(100%, 250px)' }}
                                      src={QRUrl}
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    className={styles.shareProfile}
                                  >
                                    Share your profile with others
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Button
                                      className={styles.btn}
                                      variant="outlined"
                                    >
                                      <Grid container>
                                        <Grid item xs={3}>
                                          <img
                                            className={styles.copyImage}
                                            src="/copy.svg"
                                          />
                                        </Grid>
                                        <Grid
                                          item
                                          xs={9}
                                          className={styles.text}
                                        >
                                          Copy QR Code
                                        </Grid>
                                      </Grid>
                                    </Button>
                                  </Grid>
                                  <Grid item xs={12} className={styles.or}>
                                    OR
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    className={styles.shareProfile}
                                  >
                                    Share it on social media
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    style={{
                                      justifyContent: 'space-between',
                                      display: 'inline-flex',
                                      width: '100%',
                                    }}
                                  >
                                    <Link href="#">
                                      <img
                                        src="/icons8-facebook-f-100.svg"
                                        className={styles.mediaicons}
                                      />
                                    </Link>
                                    <Link href="#">
                                      <img
                                        src="/instagram.svg"
                                        className={styles.mediaicons}
                                      />
                                    </Link>
                                    <Link href="#">
                                      <img
                                        src="/icons8-twitter-100.svg"
                                        className={styles.mediaicons}
                                      />
                                    </Link>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          {/* User Details Fields onDesktop view*/}

                          <Grid item xs={12} lg={9}>
                            <Grid container p={2} spacing={2}>
                              {/* apply for in >= sm */}
                              <Grid
                                item
                                sm={12}
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                              >
                                <Grid container spacing={2}>
                                  <Grid item sm={12}>
                                    <Typography className={styles.label}>
                                      Apply for
                                    </Typography>
                                  </Grid>
                                  <Grid item sm={6}>
                                    <Button
                                      sx={{
                                        fontSize: '1.1rem',
                                        width: '100%',
                                        backgroundColor: `${
                                          toggleJob === 'internship'
                                            ? '#353F5C'
                                            : ''
                                        }`,
                                        '&:hover': {
                                          backgroundColor: '#353F5C',
                                        },
                                        color: `${
                                          toggleJob === 'internship'
                                            ? '#fff !important'
                                            : 'black'
                                        }`,
                                      }}
                                      // variant="outlined"
                                      className={styles.btn}
                                      onClick={() =>
                                        jobToggleHandle('internship')
                                      }
                                    >
                                      Internship
                                    </Button>
                                  </Grid>
                                  <Grid item sm={6}>
                                    <Button
                                      sx={{
                                        fontSize: '1.1rem',
                                        width: '100%',
                                        backgroundColor: `${
                                          toggleJob === 'job'
                                            ? '#353F5C'
                                            : 'white'
                                        }`,
                                        color: `${
                                          toggleJob === 'job'
                                            ? '#fff !important'
                                            : 'black'
                                        }`,

                                        '&:hover': {
                                          backgroundColor: '#353F5C',
                                        },
                                      }}
                                      variant="contained"
                                      className={styles.btn}
                                      onClick={() => jobToggleHandle('job')}
                                    >
                                      Job
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  First Name
                                </Typography>
                                <TextField
                                  fullWidth
                                  size="small"
                                  autoComplete="new-password"
                                  name="firstName"
                                  value={userDetails.firstName}
                                  onChange={(e) => updateUserDetails(e)}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Last Name
                                </Typography>
                                <TextField
                                  fullWidth
                                  size="small"
                                  autoComplete="new-password"
                                  name="lastName"
                                  value={userDetails.lastName}
                                  onChange={(e) => updateUserDetails(e)}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Gender
                                </Typography>
                                <Multiselect
                                  isObject={false}
                                  displayValue="key"
                                  onKeyPressFn={function noRefCheck() {}}
                                  onRemove={function noRefCheck() {}}
                                  onSearch={function noRefCheck() {}}
                                  onSelect={(e) => {
                                    setSelectGender(e)
                                  }}
                                  options={['Male', 'Female', 'Others']}
                                  singleSelect
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  DOB
                                </Typography>
                                <TextField
                                  fullWidth
                                  type="date"
                                  size="small"
                                  autoComplete="new-password"
                                  name="dob"
                                  value={userDetails.dob}
                                  onChange={(e) => updateUserDetails(e)}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  University
                                </Typography>
                                <Multiselect
                                  isObject={false}
                                  displayValue="key"
                                  onKeyPressFn={function noRefCheck() {}}
                                  onRemove={function noRefCheck() {}}
                                  onSearch={function noRefCheck() {}}
                                  onSelect={(event) => {
                                    setSelectUniversity(event)
                                  }}
                                  options={universities}
                                  singleSelect
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  College
                                </Typography>

                                <Multiselect
                                  isObject={false}
                                  displayValue="key"
                                  onKeyPressFn={function noRefCheck() {}}
                                  onRemove={function noRefCheck() {}}
                                  onSearch={function noRefCheck() {}}
                                  onSelect={(e) => {
                                    setSelectCollege(e)
                                  }}
                                  options={colleges[selectUniversity]}
                                  singleSelect
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Course
                                </Typography>
                                <Multiselect
                                  isObject={false}
                                  displayValue="key"
                                  onKeyPressFn={function noRefCheck() {}}
                                  onRemove={function noRefCheck() {}}
                                  onSearch={function noRefCheck() {}}
                                  onSelect={(e) => {
                                    setSelectCourse(e)
                                  }}
                                  options={courses}
                                  singleSelect
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Year of Graduation
                                </Typography>
                                <TextField
                                  fullWidth
                                  size="small"
                                  autoComplete="new-password"
                                  name="year_of_graduation"
                                  value={userDetails.year_of_graduation}
                                  onChange={(e) => updateUserDetails(e)}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  City
                                </Typography>

                                <Multiselect
                                  isObject={false}
                                  displayValue="key"
                                  onKeyPressFn={function noRefCheck() {}}
                                  onRemove={function noRefCheck() {}}
                                  onSearch={function noRefCheck() {}}
                                  onSelect={(e) => {
                                    setSelectCity(e)
                                  }}
                                  options={cities[selectCountries]}
                                  singleSelect
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Country
                                </Typography>

                                <Multiselect
                                  isObject={false}
                                  displayValue="key"
                                  onKeyPressFn={function noRefCheck() {}}
                                  onRemove={function noRefCheck() {}}
                                  onSearch={() => {}}
                                  onSelect={(event) => {
                                    setSelectCountries(event[0])
                                  }}
                                  options={['India']}
                                  singleSelect
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Programming Languages (if any)
                                </Typography>

                                <Multiselect
                                  id="css_custom"
                                  isObject={false}
                                  onRemove={(e) => {
                                    console.log()
                                  }}
                                  onSearch={(e) => {
                                    console.log()
                                  }}
                                  onSelect={(e) => {
                                    console.log(e)
                                    setLanguages(e)
                                  }}
                                  options={programingData}
                                  style={{
                                    chips: {
                                      background: 'gray',
                                      border: '1px solid gray',
                                      color: 'black',

                                      textAlign: 'center',
                                    },
                                    multiselectContainer: {
                                      color: 'black',
                                      width: '100%',
                                    },
                                    searchBox: {
                                      border: '1px solid gray',

                                      padding: '8px 15px',
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Softwares
                                </Typography>
                                <Multiselect
                                  id="css_custom"
                                  isObject={false}
                                  onRemove={(e) => {
                                    console.log()
                                  }}
                                  onSearch={(e) => {
                                    console.log()
                                  }}
                                  onSelect={(e) => {
                                    console.log(e)
                                    setSoftwares(e)
                                  }}
                                  options={options}
                                  style={{
                                    chips: {
                                      background: 'gray',
                                      border: '1px solid gray',
                                      color: 'black',

                                      textAlign: 'center',
                                    },
                                    multiselectContainer: {
                                      color: 'black',
                                      width: '100%',
                                    },
                                    searchBox: {
                                      border: '1px solid gray',

                                      padding: '8px 15px',
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Years Of Experience(if any)
                                </Typography>
                                <TextField
                                  fullWidth
                                  size="small"
                                  type="number"
                                  autoComplete="new-password"
                                  name="year_of_experience"
                                  value={userDetails.year_of_experience}
                                  onChange={(e) => updateUserDetails(e)}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className={styles.label}>
                                  Percentage/Grade In qualifying Course
                                </Typography>
                                <TextField
                                  fullWidth
                                  size="small"
                                  type="number"
                                  autoComplete="new-password"
                                  name="percentage_grade_in_course"
                                  value={userDetails.percentage_grade_in_course}
                                  onChange={(e) => updateUserDetails(e)}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className={styles.label}>
                                  Description
                                  <img
                                    style={{
                                      width: '13px',
                                      marginLeft: '10px',
                                    }}
                                    src="/icons8-info-100.svg"
                                    title="Please avoid any Phone numbers to avoid any misuse or any unwanted happenings to occuer"
                                  />
                                </Typography>
                                <TextField
                                  fullWidth
                                  size="small"
                                  autoComplete="new-password"
                                  name="description"
                                  value={description}
                                  multiline
                                  rows={4}
                                  placeholder="Please Write a detailed description about yourself ,eg what are your expectation for the work, what kind of work you are looking for(internship or job) and expected salary package etc."
                                  onChange={(e) => handleText(e)}
                                  inputProps={{ maxLength: 150 }}
                                />
                                <span>{coutText}/150</span>
                              </Grid>
                              <Grid item sm={6}>
                                <Button
                                  sx={{
                                    fontSize: '1.1rem',
                                    width: '100%',
                                    backgroundColor: '#353F5C',
                                    color: '#fff !important',
                                    '&:hover': {
                                      backgroundColor: '#353F5C',
                                    },
                                  }}
                                  className={styles.btn}
                                  type="submit"
                                  onClick={saveDetails}
                                >
                                  Submit
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* <Grid item lg={3} sx={{display: {xs: 'none', lg: 'block'}}}>
                                                <Grid container> */}

                      {/* Notifications */}
                      {/* <Grid
                        item
                        lg={3}
                        sx={{
                          display: { xs: 'none', lg: 'block' },
                          backgroundColor: '#353F5C',
                          color: 'white',
                          padding: '8px 4px',
                        }}
                      >
                        Notifications
                        {notifications.map((notification, i) => (
                          <Paper
                            key={i}
                            style={{
                              marginTop: '8px',
                              borderRadius: '8px',
                              padding: '4px 8px',
                            }}
                          >
                            {notification}
                          </Paper>
                        ))}
                      </Grid> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        </>
      ) : null}
    </>
  )
}
