import React from 'react'
import { Grid } from '@mui/material';
import ProfileCard from './profileCard';
import MainPageStyles from "../styles/mainPage.module.css"

function getProfilesPerRow(width, shrink)
{
    let num;
    if(width > 1400)
    {
        num = 4;
    } else if (width > 1050) {
        num = 3;
    } else if (width > 740) {
        num = 2;
    } else {
        num = 1;
    }
    if(shrink && width > 900)
        num -= 1;
    return num;
}

function Main(props){
    const [profilesPerRow, setProfilesPerRow] = React.useState(4);
    const [profilesData, setProfilesData] = React.useState(null);

    const resizeHandler = (event) => {
        setProfilesPerRow(getProfilesPerRow(window.innerWidth));
    }
    
    const fetchProfilesData = async ()=> {
        // implememtation here, fetch data from the server
        let data = [
            // {
            //     UserID: 1001,
            //     ProfilePicture: '/UserImg/1001.png',
            //     Name: 'Murtaza Ameer',
            //     HighestQualification: 'B. Arch',
            //     LastInstitute: 'Jamia Milia Islamia',
            //     Age: 22,
            //     Gender: 'M',
            //     Likes: 16,
            //     ReferenceNumber: 'SM110AA101',
            //     LastUpdated: '12/06/2021',
            //     Description: 'I’m interested in computer science, music, sport and fantasy literature. Computers first appered in my life when I was seven. Then I had got my first computer. It was Commodore 64 and I remember myself thinking, that it was the best thing in the world. I was playing it whenever I could. Then I had got my first PC. At first, I was just playing computer games, but some time later, I noticed that I could do a lot more things with the computer, for example programming.'
            // },
            // {
            //     UserID: 1002,
            //     ProfilePicture: '/UserImg/1002.png',
            //     Name: 'Shanza Rehman',
            //     HighestQualification: 'M. Sc.',
            //     LastInstitute: 'Jamia Milia Islamia',
            //     Age: 21,
            //     Gender: 'F',
            //     Likes: 5,
            //     ReferenceNumber: 'SM110AA102',
            //     LastUpdated: '04/04/2021',
            //     Description: 'I am a science graduate and is currently studying Bioinformatics . I am highly interested to work in IT sector / Bioinformatics industry as a Data scientist/ analyst.'
            // },
            // {
            //     UserID: 1003,
            //     ProfilePicture: '/UserImg/1003.png',
            //     Name: 'Kamran Ahmad',
            //     HighestQualification: 'B. Arch',
            //     LastInstitute: 'Aligarh Muslim University',
            //     Age: 24,
            //     Gender: 'M',
            //     Likes: 10,
            //     ReferenceNumber: 'SM110AA103',
            //     LastUpdated: '01/12/2021',
            //     Description: 'Currently Im pursuing masters and doing internship in marketing team of Gurucool I always wanted to explore each and every field to get more knowledge and experience so I wanted to get this internship to work with the people who are job creator. I love to work with startup because in that you will learn everything they give you better understanding, team work etc.  and Im also pursuing course of data scientist on coursera. '
            // },
            // {
            //     UserID: 1004,
            //     ProfilePicture: '/UserImg/1004.png',
            //     Name: 'Shahbaz Khan',
            //     HighestQualification: 'B.A.',
            //     LastInstitute: 'BBD University',
            //     Age: 21,
            //     Gender: 'M',
            //     Likes: 1,
            //     ReferenceNumber: 'SM110AA104',
            //     LastUpdated: '14/04/2021',
            //     Description: 'I am Shahbaz Khan S/o Shahnawaz Khan I did my matriculation from CBSE (2015) with 91.2% and then I did my Intermediate in the science stream but for my future goals in journalism I choose Bachelors in Journalism and Mass Communication and I nailed it with 86.5%. During my graduation year, I did many internships in various companies and did attend many seminars and webinars. In final year , at the time of placement I got job offers from 2 companies BYJUS and UpGrad but due to my personal inconvenience I rejected that job and I am in search of good journalism future or to join a great Public Relation Team'
            // },
            // {
            //     UserID: 1005,
            //     ProfilePicture: '/UserImg/1005.png',
            //     Name: 'Naiyer Iqbal',
            //     HighestQualification: 'B. Tech.',
            //     LastInstitute: 'Jamia Milia Islmaia',
            //     Age: 22,
            //     Gender: 'M',
            //     Likes: 14,
            //     ReferenceNumber: 'SM110AA105',
            //     LastUpdated: '17/09/2021',
            //     Description: 'Honest, cooperative, enthusiastic, learner'
            // },
            // {
            //     UserID: 1006,
            //     ProfilePicture: '/UserImg/1006.png',
            //     Name: 'Nawazish Khan',
            //     HighestQualification: 'B. Tech.',
            //     LastInstitute: 'Jamia Milia Islmaia',
            //     Age: 23,
            //     Gender: 'M',
            //     Likes: 12,
            //     ReferenceNumber: 'SM110AA106',
            //     LastUpdated: '29/12/2021',
            //     Description: ''
            // },
            // {
            //     UserID: 1007,
            //     ProfilePicture: '/UserImg/1007.png',
            //     Name: 'Mohd Zeeshan',
            //     HighestQualification: 'M.C.A.',
            //     LastInstitute: 'Jamia Milia Islmaia',
            //     Age: 23,
            //     Gender: 'M',
            //     Likes: 5,
            //     ReferenceNumber: 'SM110AA107',
            //     LastUpdated: '01/02/2022',
            //     Description: 'My name is Zeeshan and I am a fresh web and software developer with more than 0-1 years of experience. I didnt work with any major real life project but I am a good learner. and I sure that I will give my best to my work.so please give me a little bit chance to have achieve my goals.'
            // },
            // {
            //     UserID: 1008,
            //     ProfilePicture: '/UserImg/1008.png',
            //     Name: 'Aman Khan',
            //     HighestQualification: 'B. Tech.',
            //     LastInstitute: 'Jamia Milia Islmaia',
            //     Age: 22,
            //     Gender: 'M',
            //     Likes: 12,
            //     ReferenceNumber: 'SM110AA183',
            //     LastUpdated: '25/05/2021',
            //     Description: 'I am Aman khan currently in BTech 2nd year mechanical engineering i have a great interest in science and technology and want to explore new things and i have also started a youtube channel with my three school friends and because of that i learn alot things such as content writing, video editing, graphic designing , seo etc'
            // },
            // {
            //     UserID: 1009,
            //     ProfilePicture: '/UserImg/1009.png',
            //     Name: 'Renu Maanzu',
            //     HighestQualification: 'B. Sc.',
            //     LastInstitute: 'DDC Delhi University',
            //     Age: 22,
            //     Gender: 'F',
            //     Likes: 9,
            //     ReferenceNumber: 'SM110AA109',
            //     LastUpdated: '08/10/2021',
            //     Description: 'Punctuality , hard working and strongly determined are my key skills.  Have practical knowledge in my field with vast theoretical knowledge in genetics, immunology, biochemical techniques, ecology, Biochemistry, Biotechnology, animal physiology , etc'
            // },
            // {
            //     UserID: 1010,
            //     ProfilePicture: '/UserImg/1010.png',
            //     Name: 'Md Kasif Ejaz',
            //     HighestQualification: 'B. Sc.',
            //     LastInstitute: 'Jamia Milia Islmaia',
            //     Age: 19,
            //     Gender: 'M',
            //     Likes: 3,
            //     ReferenceNumber: 'SM110AA103',
            //     LastUpdated: '09/11/2021',
            //     Description: 'Hello! I am md kasif ejaz from bihar. Currently pursuing bsc in biotechnology first year from JMI. I am very dedicated to my work. I love to do the things in unique way. I am very passionate about the things which I do. I love to play sports, traveling, meeting with different people from different places.'
            // },
            // {
            //     UserID: 1011,
            //     ProfilePicture: '/UserImg/1011.png',
            //     Name: 'Tathagat Vats',
            //     HighestQualification: 'B. Tech.',
            //     LastInstitute: 'Jamia Milia Islmaia',
            //     Age: 21,
            //     Gender: 'M',
            //     Likes: 6,
            //     ReferenceNumber: 'SM110AA1011',
            //     LastUpdated: '17/09/2021',
            //     Description: 'I am a first year undergraduate who is an avid learner with keen interest in web development .'
            // },
        ];

        return data;
    }

    React.useEffect(()=>{
        window.addEventListener('resize', resizeHandler);

        let width = window.innerWidth;
        
        setProfilesPerRow(getProfilesPerRow(width, props.shrinkToPopOver));

        fetchProfilesData().then((data)=>setProfilesData(data));

        return (()=>window.removeEventListener('resize', resizeHandler));
    }, [props.shrinkToPopOver]);

    let GridXS = Math.floor(12/profilesPerRow);
    let profileCards = []
    if(profilesData){
        
        for(let data of profilesData)
        {
            profileCards.push(<Grid item key={data.UserID} xs={GridXS} sx={{display:"flex",justifyContent:"center", flexWrap:"wrap"}}>
                <ProfileCard userData={data}/>
            </Grid>);
        }
    }

    // sample empty cards, remove the code:
    for(let i = 0; i < 1; i++)
        profileCards.push(<Grid item key={i} xs={GridXS} sx={{display:"flex",justifyContent:"center", flexWrap:"wrap"}}>
            <ProfileCard userData={null}/>
        </Grid>);
    
    
    return (
        <Grid container className={props.shrinkToPopOver ? MainPageStyles.profileCardContainerShrinked : MainPageStyles.profileCardContainer}>
            {profileCards}
        </Grid>
    ); 
  }
  export default Main;
