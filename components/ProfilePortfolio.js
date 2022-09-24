import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from '@mui/material';
import HTMLFlipBook from 'react-pageflip';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import profileStyles from '../styles/Profile.module.css';

// this is a patch for HTMLFlipbook, CSS can not be used on HTMLFlipbook to adjust its width and height
// and using stretch gives wierd behaviours, so height and width is being controlled from javascript
// and to update flipbook when it is resized following variables are needed, the scope of these variables
// are needed to be function static
let ResizeState = {resized: false, key: 1};

function getNewDimensions()
{
    let newHeight, newWidth;
    if(window.innerWidth >= 1200) {
        newWidth = window.innerWidth - 300;
        
    } else if(window.innerWidth >= 820) {
        newWidth = window.innerWidth - 180;
        newHeight = 525;
    } else if(window.innerWidth >= 640) {
        newWidth = window.innerWidth - 140;
        newHeight = 525;
    } else if(window.innerWidth >= 480) {
        newWidth = window.innerWidth - 30;
        newHeight = 400;
    } else {
        newWidth = window.innerWidth - 20;
        newHeight = 350;
    }

    newWidth /= 2;
    newHeight = newWidth/1.61;

    return {width: newWidth, height: newHeight};
}

/**
 * Profile Page Component to display portfolio
 */
export default function ProfilePortfolio(props)
{
    let initialDimension = getNewDimensions();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [flipping, setFlipping] = React.useState(false);
    const [flipbookDimension, setFlipbookDimension] = React.useState(initialDimension);
    const [portfolioData, setPortfolioData] = React.useState(null);

    let flipbook;

    // retrieve the data from the server
    const fetchPortfolioData = async () => {
        // implementation here, load data from server
        // use props.userID for user identification
        let data = [
            {
                src: '/Portfolio/1.jpg',
                altText: 'User Portfolio'
            },
            {
                src: '/Portfolio/2.jpg',
              altText: 'User Portfolio'
            },
            {
                src: '/Portfolio/3.jpg',
                altText: 'User Portfolio'
            },
            {
                src: '/Portfolio/4.jpg',
              altText: 'User Portfolio'
            },
            {
                src: '/Portfolio/5.jpg',
                altText: 'User Portfolio'
            },
            {
                src: '/Portfolio/6.jpg',
                altText: 'User Portfolio'
            },
            {
                src: '/Portfolio/7.jpg',
                altText: 'User Portfolio'
            },
            {
                src: '/Portfolio/8.jpg',
                altText: 'User Portfolio'
            },
            {
                src: '/Portfolio/9.jpg',
                altText: 'User Portfolio'
            }
            ,
            {
                src: '/Portfolio/10.jpg',
                altText: 'User Portfolio'
            }
            ,
            {
                src: '/Portfolio/11.jpg',
                altText: 'User Portfolio'
            }
            ,
            {
                src: '/Portfolio/12.jpg',
                altText: 'User Portfolio'
            }
            ,
            {
                src: '/Portfolio/13.jpg',
                altText: 'User Portfolio'
            }
        ];

        return data;
    };

    // compute number of pages
    const itemLength = portfolioData ? Math.ceil(portfolioData.length/2) - 1 : 0;

    // handle window resize to change dimension of flipbook
    const resizeHandler = () => {
        let newDimensions = getNewDimensions();
        let newWidth = newDimensions.width;
        let newHeight = newDimensions.height;
        
        ResizeState.resized = true;
        setFlipbookDimension({...initialDimension, width: newWidth, height: newHeight});
    }

    // set up the component on mount
    React.useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        // Load the data
        fetchPortfolioData().then((data)=>setPortfolioData(data));

        // unload the component
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    // generate a key for fliobook to decide weather it should re render or not, its a patch
    const getChildKey = () => {
        if(ResizeState.resized)
        {
            ResizeState.resized = false;
            return ++ResizeState.key;
        }
        else
            return ResizeState.key;
    }
   
    const previousButton = () => {
        if (flipping || activeIndex === 0) return;
        flipbook.pageFlip().flipPrev();
        setActiveIndex(activeIndex - 1);
    }

    const nextButton = () => {
        if (flipping || activeIndex === itemLength) return;
        flipbook.pageFlip().flipNext();
        setActiveIndex(activeIndex + 1);
    }

    const mannualFlip = (page) => {
        setActiveIndex(page.object.pages.currentSpreadIndex);
    }

    const FlipbBookStateChange = (state) => {
        if(state.data === 'read')
            setFlipping(false)
        else
            setFlipping(true)
    }
    
    // setup navigation buttons
    let PreviousPageButton = activeIndex === 0 ? null : <ArrowLeftRoundedIcon className={profileStyles.lbtnholder} onClick={previousButton}>Previous</ArrowLeftRoundedIcon>;
    let NextPageButton =  activeIndex === itemLength ? null : <ArrowRightRoundedIcon className={profileStyles.rbtnholder} onClick={nextButton}>Next</ArrowRightRoundedIcon>
    
    /** create the flipbook component if there's data 
     * else create a component with message no portfolio
     */
    let portfolioContainer = null;
    let portfolioPages = [];
    if(portfolioData != null)
    {
        for(let i = 0; i < portfolioData.length; i+=2)
        {
            portfolioPages.push(<img key={'left_page' + String(i)} className={profileStyles.portfolioPage} src={portfolioData[i].src} />)
            if(portfolioData.length > i+1)
                portfolioPages.push(<img key={'right_page' + String(i)}  className={profileStyles.portfolioPage} src={portfolioData[i+1].src} />)
        }
        
        portfolioContainer = <div className={profileStyles.CarouselItems}>
            <HTMLFlipBook key={String(getChildKey())}
                width={flipbookDimension.width}
                height={flipbookDimension.height}
                className={profileStyles.portfolioBook} 
                showCover={false}
                ref={(el) => (flipbook = el)}  
                size="fixed" 
                onFlip={mannualFlip} 
                onChangeState={FlipbBookStateChange}
                maxShadowOpacity = {0.3}
            >
                {portfolioPages}
                
            </HTMLFlipBook>
        </div>;
    } else {
        portfolioContainer = <div className={profileStyles.CarouselItems}>
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
                No Portfolio
            </Typography>
        </div>;
    }

    
    return(
        <div style={{width: '100%'}}>
            {portfolioContainer}
            {PreviousPageButton}
            {NextPageButton}
        </div>  
    );
}