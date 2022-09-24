import React from "react";
import {
  ThemeProvider,
  createTheme
} from "@mui/material";
import styles from '../styles/Home.module.css';
import { Box, Typography, IconButton, Button, MenuItem, Popover, Checkbox } from '@mui/material';
import { useScrollTrigger } from "@mui/material";
import Iconcolor from "./iconnavcolor";

const IconScrollcolor = props => {
    const theme = createTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [verified, setVerified] = React.useState(true);

    const handleClick = (event) => {
      props.popOverControl(true);
      setAnchorEl(event.currentTarget);
    };
      
    const handleClose = () => {
      props.popOverControl(false);
      setAnchorEl(null);
    };

    const handleVerifyCheck = (event) => {
      setVerified(event.target.checked)
    }

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: props.window ? window() : undefined
    });

    return (
      <ThemeProvider theme={theme}>
             <IconButton  edge="end" aria-label="menu" sx={{filter: trigger ? 'invert(1)' : '', marginRight:'5px'}}>
                  <Iconcolor>
                 <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34" height="30" viewBox="0 0 52 52" onClick={handleClick}>
                    <image id="slider-regular-240" width="52" height="52" opacity="0.9" xlinkHref="data:image/png;base64,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"/>
                  </svg>
                  </Iconcolor>
              </IconButton>
                  <Popover 
                    className={styles.Popover}
                    anchorEl={anchorEl} 
                    open={Boolean(anchorEl)} 
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{ left: 3000, top:50 }}
                    PaperProps={{sx:{borderRadius:'0'}}}
                  >
                  <Box className={styles.mvqsbox}  paddingTop={2} paddingBottom={4}>
              
              
                  <Typography mb={-1.5} sx={{color: "white", fontSize: "16px",fontWeight:"900"}} ml={2}>Search Filters</Typography>
                  <Typography className={styles.qstypo} sx={{color: "white"}} ml={2} mt={3}>University</Typography>
                  <MenuItem disableRipple className={styles.miSelectUni}>
                  <select className={styles.select}>
                    <option>Delhi University</option>
                  </select>
                
                  </MenuItem>
                  <Typography className={styles.qstypo} sx={{color: "white"}} ml={3.5}>College</Typography>
                  <MenuItem disableRipple className={styles.miSelectCol}>
                  <select className={styles.select}>
                      <option>Daulat Ram</option>
                  </select>
                  </MenuItem>
                  <Typography className={styles.qstypo} sx={{color: "white"}} ml={2}>Percentage</Typography>
                  <MenuItem disableRipple className={styles.miInput}>
                  <input placeholder="70%" />
                  </MenuItem>
                  <Typography className={styles.qstypo} sx={{color: "white"}} ml={2}>Coding Language</Typography>
                  <MenuItem disableRipple className={styles.miInput}>
                  <input placeholder="Java, Python, C++" />
                  </MenuItem>
                  <Typography className={styles.qstypo} sx={{color: "white"}} ml={2}>Location</Typography>
                  <MenuItem disableRipple className={styles.miInput}>
                  <input placeholder="Delhi, India"/>
                  </MenuItem>
                  <Typography className={styles.qstypo} sx={{color: "white"}} ml={2}>Experience</Typography>
                   <MenuItem disableRipple className={styles.miInput}>
              
                  <input />
                  </MenuItem>
                  <Typography className={styles.qstypo} sx={{color: "white"}} ml={2}>Sort By</Typography>
                   <MenuItem disableRipple className={styles.miSelectUni}>
                     <select className={styles.select}>
                     <option>High to Low</option>
                     </select>
                   </MenuItem>
                  <Typography className={styles.qstypo} sx={{color: "white"}} ml={2}>Course</Typography>
                  <MenuItem disableRipple className={styles.miInput}>
              
                  <input placeholder="Computer Science"/>
                  </MenuItem>
              
                  <Typography className={styles.qstypo} className={styles.qsverify} sx={{color: "white",fontWeight:"700"}} ml={2.2}>Verified
                  <Checkbox checked={verified} onChange={handleVerifyCheck} inputProps={{ 'aria-label': 'controlled' }} sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                  }}/>
                  </Typography>
                  <MenuItem disableRipple  className={styles.qsmiS}>
                  <Button disableRipple className={styles.qsmiSearch} sx={{backgroundColor:"white",fontWeight:"900", color:"#707070",
                    borderRadius:"10px",textTransform:"capitalize",fontSize:"16px"}}>
                   Search
                  </Button>
                  </MenuItem>
                  </Box>
                 </Popover>
            </ThemeProvider>
  );
};

export default IconScrollcolor;    