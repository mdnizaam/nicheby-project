import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Container,
  Button,
  Link,
  Hidden,
} from '@mui/material'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import uploadFile from '../components/uploadFile'
import Header from '../components/headerForDashBoardHome'
import Sidebar from '../components/sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Portfolio.module.css'

export default function support() {
  let FormData = require('form-data')
  let formData = new FormData()

  //uploading File using FormData
  const hiddenFileInput = React.useRef([])
  hiddenFileInput.current = []

  const handleClick = (event) => {
    hiddenFileInput.current[parseInt(event.target.id)].click()
  }

  //onUploadFile
  const [selectedFile, setSelectedFile] = useState(false)
  const [formArray, setFormArray] = useState([])
  const [selectedImages, setSelectedImages] = useState([])
  let imageArray = []
  const onFileChange = (e, index) => {
    if (e.target && e.target.files[0]) {
    }

    if (formData.length > index) {
      let temp = [...formArray, e.target.files[0]]
      setFormArray((formArray) => [...formArray, e.target.files[0]])
      imageArray = temp.map((file) => {
        return URL.createObjectURL(file)
      })
      setSelectedImages(imageArray)
      setSelectedFile((selectedFile = true))
    } else {
      let temp = [...formArray, e.target.files[0]]
      setFormArray((formArray) => [...formArray, e.target.files[0]])
      imageArray = temp.map((file) => {
        return URL.createObjectURL(file)
      })
      setSelectedImages(imageArray)
      setSelectedFile((selectedFile = true))
    }
  }

  //portfolio upload
  const [addPUploadBtn, setaddPUploadBtn] = useState([1])
  const [delP, updatePDel] = useState(false)
  const onClickAddPUploadBtn = () => {
    if (selectedFile != false) {
      setaddPUploadBtn((addPUploadBtn) => [...addPUploadBtn, 1])
      setSelectedFile((selectedFile = false))
    }
  }
  const onClickdelPUploadBtn = (index) => {
    if (
      addPUploadBtn.length > 1 &&
      selectedFile != false &&
      selectedImages.length > 1
    ) {
      updatePDel((delP = !delP))
      let temp = []
      for (let i = 0; i < addPUploadBtn.length; i++) {
        if (i != index) {
          temp.push(addPUploadBtn[i])
        }
      }
      setaddPUploadBtn((addPUploadBtn = temp))
      let flag = []
      for (let i = 0; i < selectedImages.length; i++) {
        if (i != index) {
          flag.push(selectedImages[i])
        }
      }
      setSelectedImages((selectedImages = flag))
      let flag2 = []
      for (let i = 0; i < formArray.length; i++) {
        if (i != index) {
          flag2.push(formArray[i])
        }
      }
      setFormArray((formArray = flag2))
    }
  }

  //certificate upload
  const [addCUploadBtn, setaddCUploadBtn] = useState([1])
  const [delC, updateCDel] = useState(false)
  const onClickAddCUploadBtn = () => {
    if (selectedFile != false) {
      setaddCUploadBtn((addCUploadBtn) => [...addCUploadBtn, 1])
      setSelectedFile((selectedFile = false))
    }
  }
  const onClickdelCUploadBtn = (index) => {
    if (
      addCUploadBtn.length > 1 &&
      selectedFile != false &&
      selectedImages.length > 1
    ) {
      updateCDel((delC = !delC))
      let temp = []
      for (let i = 0; i < addCUploadBtn.length; i++) {
        if (i != index) {
          temp.push(addCUploadBtn[i])
        }
      }
      setaddCUploadBtn((addCUploadBtn = temp))
      let flag = []
      for (let i = 0; i < selectedImages.length; i++) {
        if (i != index) {
          flag.push(selectedImages[i])
        }
      }
      setSelectedImages((selectedImages = flag))
      let flag2 = []
      for (let i = 0; i < formArray.length; i++) {
        if (i != index) {
          flag2.push(formArray[i])
        }
      }
      setFormArray((formArray = flag2))
    }
  }

  const tabClicked = (link) => {
    window.location = link
  }

  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Grid container>
        <Header />
      </Grid>
      <Grid
        container
        xs={12}
        container
        mt={7.8}
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        <Grid container sm={3}>
          <Hidden smDown>
            <Grid item sm={3}>
              <Sidebar />
            </Grid>
          </Hidden>
        </Grid>
        <Grid container xs={12} sm={9}>
          <Grid container xs={12}>
            <Grid
              xs={12}
              sx={{
                backgroundColor: '#353F5C',
                fontWeight: 'bold',
                border: '1px solid #707070',
                color: '#ffffff',
                fontSize: '25px',
                height: '2.8rem',
                padding: '0.2rem 2.5rem 0.2rem 2.5rem',
              }}
            >
              Porfolio
            </Grid>
            <Grid container xs={12}>
              {/*
                            <Grid xs={12} className={styles.listGrid}  sx={{display:"flex",flexDirection:"row",
                            padding:"0.5rem 1.5rem 0.5rem 1.5rem"}}>
                                <Grid sx={{padding:"0rem 1rem 0rem 0rem"}}>
                                    <select className={styles.select} name="fontFamily" id="fontFamily">
                                        <option value="Aerial">Aerial</option>
                                    </select>
                                </Grid>
                                <Grid sx={{padding:"0rem 1rem 0rem 0rem"}}>
                                    <img src="./italicIcon.svg" />
                                </Grid>
                                <Grid sx={{padding:"0rem 1rem 0rem 0rem"}}>
                                    <img src="./sizeIcon.svg" />
                                </Grid>
                                <Grid sx={{padding:"0rem 1rem 0rem 0rem"}}>
                                    <img src="./boldIcon.svg" />
                                </Grid>
                                <Grid sx={{padding:"0rem 1rem 0rem 0rem"}}>
                                    <img src="./embedCodeIcon.svg" />
                                </Grid>
                                <Grid sx={{padding:"0rem 1rem 0rem 0rem"}}>
                                    <img src="./zoomIcon.svg" />
                                </Grid>
                                <Grid sx={{padding:"0rem 1rem 0rem 0rem"}}>
                                    <img src="./videoIcon.svg" />
                                </Grid>
                                <Grid className={styles.splitIcon1}>
                                    <Grid  sx={{padding:"0rem 1rem 0rem 0rem"}}>
                                        <img src="./portfolioSplitIcon.svg" />
                                    </Grid>
                                    <Grid sx={{padding:"0rem 3rem 0rem 0rem"}}>
                                        <img src="./portfolioSquareIcon.svg" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                            <img className={styles.listGrid} src="./horizontalDivider.svg" />
                            */}
              <Grid container xs={12} container className={styles.carouselGrid}>
                <Grid
                  container
                  xs={12}
                  sm={11.5}
                  container
                  paddingTop={5}
                  paddingLeft={5}
                  paddingBottom={5}
                >
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation={true}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={(index) => {}}
                  >
                    {selectedImages.map((image, index) => {
                      return (
                        <Grid container>
                          <SwiperSlide key={index}>
                            <Grid
                              container
                              padding={4}
                              className={styles.swiperSlide}
                            >
                              <div>
                                <img src={image} height={250} width={400} />
                              </div>
                            </Grid>
                            <Grid container ml={5}>
                              Pages {index + 1} - {selectedImages.length}
                            </Grid>
                          </SwiperSlide>
                        </Grid>
                      )
                    })}
                  </Swiper>
                </Grid>
                <Grid
                  container
                  className={styles.previewBtn}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0rem 0rem 2rem 0rem',
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#FFFFFF',
                      textTransform: 'capitalize',
                      backgroundColor: '#353F5C',
                      border: '1px solid #707070',
                      borderRadius: '15px',
                    }}
                  >
                    Preview
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#FFFFFF',
                      textTransform: 'capitalize',
                      backgroundColor: '#353F5C',
                      border: '1px solid #707070',
                      borderRadius: '15px',
                    }}
                  >
                    Publish
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid
              container
              sx={{
                backgroundColor: '#353F5C',
                border: '1px solid #707070',
                color: '#ffffff',
                fontSize: '25px',
                height: '2.8rem',
                padding: '0.2rem 2.5rem 0.2rem 2.5rem',
              }}
            >
              Upload Your Portfolio
            </Grid>
            <Grid container className={styles.horizontalScoll}>
              {addPUploadBtn.map((data, index) => {
                return (
                  <form method="post" encType="multipart/form-data">
                    <Grid padding={5} paddingRight={4} paddingBottom={6}>
                      <Grid>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="267"
                          height="167"
                          viewBox="0 0 267 167"
                        >
                          <g
                            id="Rectangle_440"
                            data-name="Rectangle 440"
                            fill="#fff"
                            stroke="#707070"
                            stroke-width="5"
                            stroke-dasharray="10"
                          >
                            <rect
                              width="267"
                              height="167"
                              rx="15"
                              stroke="none"
                            />
                            <rect
                              x="2.5"
                              y="2.5"
                              width="262"
                              height="162"
                              rx="12.5"
                              fill="none"
                            />
                          </g>
                        </svg>
                      </Grid>
                      <Grid>
                        <img
                          id={index}
                          className={styles.addFileIcon}
                          onClick={handleClick}
                          src="./uploadIcon2.svg"
                        />
                      </Grid>
                      {index != 0 ? (
                        <Grid ml={31.5} mt={-26} mr={0}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="41"
                            viewBox="0 0 32 41"
                            onClick={() => onClickdelPUploadBtn(index)}
                          >
                            <g
                              id="Group_45"
                              data-name="Group 45"
                              transform="translate(-1144 -998)"
                            >
                              <circle
                                id="Ellipse_55"
                                data-name="Ellipse 55"
                                cx="16"
                                cy="16"
                                r="16"
                                transform="translate(1144 1007)"
                                fill="#cc0101"
                              />
                              <text
                                id="x"
                                transform="translate(1152 1030)"
                                fill="#fff"
                                font-size="30"
                                font-family="SegoeUI, Segoe UI"
                              >
                                <tspan x="0" y="0">
                                  x
                                </tspan>
                              </text>
                            </g>
                          </svg>
                        </Grid>
                      ) : (
                        <Grid ml={9} mt={-7}>
                          <Typography>PDF/ JPEG/ PNG</Typography>
                        </Grid>
                      )}
                    </Grid>
                    <input
                      type="file"
                      name="fileUpload"
                      onChange={(e) => onFileChange(e, index)}
                      ref={(el) => (hiddenFileInput.current[index] = el)}
                      style={{ display: 'none' }}
                    />
                  </form>
                )
              })}
              <Grid>
                <Grid>
                  <img
                    className={styles.addUploadIconCircle}
                    src="./addUploadIcon2.svg"
                  />
                </Grid>
                <Grid>
                  <img
                    className={styles.addUploadIconPlus}
                    onClick={onClickAddPUploadBtn}
                    src="./addUploadIcon.svg"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid
              container
              sx={{
                backgroundColor: '#353F5C',
                border: '1px solid #707070',
                color: '#ffffff',
                fontSize: '25px',
                height: '2.8rem',
                padding: '0.2rem 2.5rem 0.2rem 2.5rem',
              }}
            >
              Upload Your CV/Curriculum Vitae
            </Grid>
            <Grid container>
              <form method="post" encType="multipart/form-data">
                <Grid padding={5} paddingBottom={3}>
                  <Grid>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="267"
                      height="167"
                      viewBox="0 0 267 167"
                    >
                      <g
                        id="Rectangle_440"
                        data-name="Rectangle 440"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="5"
                        stroke-dasharray="10"
                      >
                        <rect width="267" height="167" rx="15" stroke="none" />
                        <rect
                          x="2.5"
                          y="2.5"
                          width="262"
                          height="162"
                          rx="12.5"
                          fill="none"
                        />
                      </g>
                    </svg>
                  </Grid>
                  <Grid>
                    <img
                      className={styles.addFileIcon}
                      onClick={handleClick}
                      src="./uploadIcon2.svg"
                    />
                  </Grid>
                </Grid>
                <input
                  type="file"
                  name="fileUpload"
                  onChange={onFileChange}
                  ref={null}
                  style={{ display: 'none' }}
                />
              </form>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid
              container
              sx={{
                backgroundColor: '#353F5C',
                border: '1px solid #707070',
                color: '#ffffff',
                fontSize: '25px',
                height: '2.8rem',
                padding: '0.2rem 2.5rem 0.2rem 2.5rem',
              }}
            >
              Upload Your Certificates
            </Grid>
            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
              {addCUploadBtn.map((data, index) => {
                return (
                  <form method="post" encType="multipart/form-data">
                    <Grid padding={5} paddingRight={4} paddingBottom={6}>
                      <Grid>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="267"
                          height="167"
                          viewBox="0 0 267 167"
                        >
                          <g
                            id="Rectangle_440"
                            data-name="Rectangle 440"
                            fill="#fff"
                            stroke="#707070"
                            stroke-width="5"
                            stroke-dasharray="10"
                          >
                            <rect
                              width="267"
                              height="167"
                              rx="15"
                              stroke="none"
                            />
                            <rect
                              x="2.5"
                              y="2.5"
                              width="262"
                              height="162"
                              rx="12.5"
                              fill="none"
                            />
                          </g>
                        </svg>
                      </Grid>
                      <Grid>
                        <img
                          className={styles.addFileIcon}
                          onClick={handleClick}
                          src="./uploadIcon2.svg"
                        />
                      </Grid>
                      {index != 0 ? (
                        <Grid ml={31.5} mt={-26} mr={0}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="41"
                            viewBox="0 0 32 41"
                            onClick={() => onClickdelCUploadBtn(index)}
                          >
                            <g
                              id="Group_45"
                              data-name="Group 45"
                              transform="translate(-1144 -998)"
                            >
                              <circle
                                id="Ellipse_55"
                                data-name="Ellipse 55"
                                cx="16"
                                cy="16"
                                r="16"
                                transform="translate(1144 1007)"
                                fill="#cc0101"
                              />
                              <text
                                id="x"
                                transform="translate(1152 1030)"
                                fill="#fff"
                                font-size="30"
                                font-family="SegoeUI, Segoe UI"
                              >
                                <tspan x="0" y="0">
                                  x
                                </tspan>
                              </text>
                            </g>
                          </svg>
                        </Grid>
                      ) : (
                        ''
                      )}
                    </Grid>
                    <input
                      type="file"
                      name="fileUpload"
                      onChange={onFileChange}
                      ref={null}
                      style={{ display: 'none' }}
                    />
                  </form>
                )
              })}
              <Grid>
                <Grid>
                  <img
                    className={styles.addUploadIconCircle}
                    src="./addUploadIcon2.svg"
                  />
                </Grid>
                <Grid>
                  <img
                    className={styles.addUploadIconPlus}
                    onClick={onClickAddCUploadBtn}
                    src="./addUploadIcon.svg"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid
              container
              sx={{
                backgroundColor: '#353F5C',
                border: '1px solid #707070',
                color: '#ffffff',
                fontSize: '25px',
                height: '2.8rem',
                padding: '0.2rem 2.5rem 0.2rem 2.5rem',
              }}
            >
              Upload Your Introduction Video
            </Grid>
            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
              {addCUploadBtn.map((data, index) => {
                return (
                  <form method="post" encType="multipart/form-data">
                    <Grid padding={5} paddingRight={4} paddingBottom={6}>
                      <Grid>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="267"
                          height="167"
                          viewBox="0 0 267 167"
                        >
                          <g
                            id="Rectangle_440"
                            data-name="Rectangle 440"
                            fill="#fff"
                            stroke="#707070"
                            stroke-width="5"
                            stroke-dasharray="10"
                          >
                            <rect
                              width="267"
                              height="167"
                              rx="15"
                              stroke="none"
                            />
                            <rect
                              x="2.5"
                              y="2.5"
                              width="262"
                              height="162"
                              rx="12.5"
                              fill="none"
                            />
                          </g>
                        </svg>
                      </Grid>
                      <Grid>
                        <img
                          className={styles.addFileIcon}
                          onClick={handleClick}
                          src="./uploadIcon2.svg"
                        />
                      </Grid>
                      {index != 0 ? (
                        <Grid ml={31.5} mt={-26} mr={0}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="41"
                            viewBox="0 0 32 41"
                            onClick={() => onClickdelCUploadBtn(index)}
                          >
                            <g
                              id="Group_45"
                              data-name="Group 45"
                              transform="translate(-1144 -998)"
                            >
                              <circle
                                id="Ellipse_55"
                                data-name="Ellipse 55"
                                cx="16"
                                cy="16"
                                r="16"
                                transform="translate(1144 1007)"
                                fill="#cc0101"
                              />
                              <text
                                id="x"
                                transform="translate(1152 1030)"
                                fill="#fff"
                                font-size="30"
                                font-family="SegoeUI, Segoe UI"
                              >
                                <tspan x="0" y="0">
                                  x
                                </tspan>
                              </text>
                            </g>
                          </svg>
                        </Grid>
                      ) : (
                        ''
                      )}
                    </Grid>
                    <input
                      type="file"
                      name="fileUpload"
                      onChange={onFileChange}
                      ref={null}
                      style={{ display: 'none' }}
                    />
                  </form>
                )
              })}
              <Grid>
                <Grid>
                  <img
                    className={styles.addUploadIconCircle}
                    src="./addUploadIcon2.svg"
                  />
                </Grid>
                <Grid>
                  <img
                    className={styles.addUploadIconPlus}
                    onClick={onClickAddCUploadBtn}
                    src="./addUploadIcon.svg"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
