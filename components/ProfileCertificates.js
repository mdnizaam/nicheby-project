import React, { useState } from 'react'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
import { Grid, Typography } from '@mui/material';
import profileStyles from '../styles/Profile.module.css';

/**
 * Profile Page Component to display certificates
 */
export default function ProfileCertificates(props)
{
    const [certificatePerPage, setCertificatePerPage] = useState(6);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const [certificateData, setCertificateData] = React.useState(null);

    const isFile = (urlToFile) => {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', urlToFile, false);
        xhr.send();
         
        if (xhr.status == "404") {
            return false;
        } else {
            return true;
        }
    }
     
    // retrieve the data from the server
    const fetchCertificateData = async ()=>{
        // implementation here, load data from server
        // use props.userID for user identification
        let data = [];
        
          
        for(let i = 1;;i++)
        {
            let a_src = "/Certificates/"+String(props.userID)+"/"+String(i)+".";
            if(isFile(a_src+'jpg')) {
                data.push({src: a_src+'jpg', altText: 'User Certificate'})
            } else if(isFile(a_src+'png')) {
                data.push({src: a_src+'png', altText: 'User Certificate'})
            } else if(isFile(a_src+'svg')) {
                data.push({src: a_src+'svg', altText: 'User Certificate'})
            }else {
                break;
            }
        }
        
        if(data.length == 0)  
            return null;
        else
          return data;
    }

    // handles window resize and set certificate per page accordingly
    const resizeHandler = () => {
        setCertificatePerPage(window.innerWidth<640?4:6);
    }

    // set up the component on mount
    React.useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        // Load the data
        fetchCertificateData().then((data)=>setCertificateData(data));

        setCertificatePerPage(window.innerWidth<640?4:6);
        
        // unload the component
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    
    // number of pages
    const itemLength = certificateData ? Math.ceil(certificateData.length/certificatePerPage) - 1 : 0;
    
    const previousButton = () => {
        if (animating || activeIndex === 0) return;
        setActiveIndex(activeIndex - 1);
    }

    const nextButton = () => {
        if (animating || activeIndex === itemLength) return;
        setActiveIndex(activeIndex + 1);
    }
    
    // setup navigation buttons
    let PreviousPageButton = activeIndex===0 ? null : <ArrowLeftRoundedIcon className={profileStyles.lbtnholder} onClick={previousButton}>Previous</ArrowLeftRoundedIcon>;
    let NextPageButton =  activeIndex === itemLength ? null : <ArrowRightRoundedIcon className={profileStyles.rbtnholder} onClick={nextButton}>Next</ArrowRightRoundedIcon>

    /** create the carousel component if there's data 
     * else create a component with message no certificate
     */
    const carouselItemData = [];
    let certificateContainer = null;
    if(certificateData != null)
    {
        for(let i = 0; i < certificateData.length; i+= certificatePerPage)
        {
            let PageItems = [];
            for(let j = i; (j < certificateData.length) && (j < (i + certificatePerPage)); j++)
            {
                PageItems.push(<Grid item xs={24/certificatePerPage} className={profileStyles.certificateContainer} p={2} key={'certificate'+String(j)}>
                    <img src={certificateData[j].src} alt={certificateData[j].altText} className={profileStyles.certificate} />
                </Grid>
                );
            }
            carouselItemData.push(<CarouselItem className={profileStyles.CarouselItems} 
                    key={String(i)}
                    onExited={() => setAnimating(false)}
                    onExiting={() => setAnimating(true)}
            >
                <Grid container spacing={2} className={profileStyles.CarouselPage}>
                    {PageItems}
                </Grid>
            </CarouselItem>);
        }

        certificateContainer = <Carousel dark previous={previousButton} next={nextButton}
        activeIndex={activeIndex} interval={false}>
        <CarouselIndicators items={carouselItemData}
            activeIndex={activeIndex}
            onClickHandler={(newIndex) => {
                if (animating) return;
                setActiveIndex(newIndex);
        }} />
            {carouselItemData}
            {PreviousPageButton}
            {NextPageButton}
        </Carousel>
    } else {
        certificateContainer = <div className={profileStyles.CarouselItems}>
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
                No Certificates
        </Typography>
        </div>
    }
    
    return(
        <div style={{width: '100%'}}>
            {certificateContainer}
        </div>  
    );
}