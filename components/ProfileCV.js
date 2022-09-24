import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from '@mui/material';
import profileStyles from '../styles/Profile.module.css';

/**
 * Profile Page Component to display resume
 */
export default function ProfileCV(props)
{
    const [cvData, setCvData] = React.useState(null);

    // retrieve the data from the server
    const fetchCVData = async () =>{
        // implementation here, load data from server
        // use props.userID for user identification
        let data = {
            src: '/CV/' + String(props.userID) + '.jpg',
            altText: 'User CV'
        };
        return data;
    }
    
    // set up the component on mount
    React.useEffect(()=>{
        // Load the data
        fetchCVData().then((data)=>setCvData(data));
    }, []);

    /** create the cv component if there's data 
     * else create a component with message no cv
     */
    let cvContainer = null;
    if(cvData != null)
    {
        cvContainer = <img src={cvData.src} alt={cvData.altText} className={profileStyles.CarouselItems}/>;
    } else {
       cvContainer = <div className={profileStyles.CarouselItems}>
            <Typography sx={{
                fontSize: "35px",
                display: "inline-block",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                font: "Artifakt Element"
              }}
              inputprops={{ form: { autocomplete: 'off' } }}>
                No CV
            </Typography>
        </div>;
    }
    
    return(
        <div style={{textAlign: 'center', width: '100%'}} >
            {cvContainer}
        </div>  
    );
}