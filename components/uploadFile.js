import React from 'react';
import Axios from 'axios';
import styles from '../styles/Portfolio.module.css';
import { Grid, Typography, Container, Button, Link} from '@mui/material';

const uploadFile = () =>{

  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  let FormData = require('form-data');

  let formData= new FormData();

  const onFileChange =(e)=>{
    if(e.target && e.target.files[0]){
      formData.append('file',e.target.files[0]);
    }
  }
  // const submitFileData =()=>{
  //   Axios.post('',{formData})
  //   .then(res=>{
  //   })
  //   .catch(error=>{
  //   })
  // }

    return(
        <form method='post' encType='multipart/form-data'>
            <Grid padding={5} paddingRight={2} paddingBottom={6}>
              <Grid>
                  <svg xmlns="http://www.w3.org/2000/svg" width="267" height="167" viewBox="0 0 267 167">
                      <g id="Rectangle_440" data-name="Rectangle 440" fill="#fff" stroke="#707070" stroke-width="5" stroke-dasharray="10">
                          <rect width="267" height="167" rx="15" stroke="none"/>
                          <rect x="2.5" y="2.5" width="262" height="162" rx="12.5" fill="none"/>
                      </g>
                  </svg>
              </Grid>
              <Grid mt={-3}>
                  <img className={styles.addFileIcon}  onClick={handleClick} src="./uploadIcon2.svg" />

              </Grid>
              <Grid ml={31.5} mt={-24} mr={0}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="41" viewBox="0 0 32 41">
                      <g id="Group_45" data-name="Group 45" transform="translate(-1144 -998)">
                            <circle id="Ellipse_55" data-name="Ellipse 55" cx="16" cy="16" r="16" transform="translate(1144 1007)" fill="#cc0101"/>
                            <text id="x" transform="translate(1152 1030)" fill="#fff" font-size="30" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">x</tspan></text>
                      </g>
                  </svg>
                </Grid>
            </Grid>
            <input type="file" name="fileUpload" onChange={onFileChange} ref={hiddenFileInput}
             style={{display:'none'}} />
            {/* <Grid mt={20}><button onClick={submitFileData}>Submit</button></Grid> */}
        </form>
    );
}
export default uploadFile;
