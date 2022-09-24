import React, { useState, useEffect, useRef } from 'react'
import { Button, Checkbox, Grid, TextField, Typography, Paper, FormGroup, FormControlLabel, Box, Hidden, Alert, Switch, TextareaAutosize } from '@mui/material';
import Sidebar from '../components/sidebar';
import Header from '../components/headerForDashBoardHome';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from "../styles/Messages.module.css";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const MessageBadge = (props)=>
{
    let theBadge;
    
    theBadge = <Typography sx={{
        display: props.count ? 'inline-block' : 'none',
        fontSize: '0.8em !important',
        backgroundColor: '#e52e04',
        color: 'white',
        borderRadius: '40px',
        padding: '1px 5px 0px 5px',
        height: 'min-content',
        width: 'min-content',
        textAlign: 'center',
        
    }}>
        {props.count}
    </Typography>
    return(
        theBadge
    );
}

export default function Deshboard() {
    const [user, setUser] = useState(true);
    const [alertMsg, setAlertMsg] = useState('');
    const [activeChat, setActiveChat] = useState(null);
    const [SinglePaneLayout, setSinglePaneLayout] = useState(false);
    const [chats, setChats] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const chatBoxRef = useRef(null);
    let myChatID = '001';                                                                   ///////////// get this from server or local storage
    
    const getChatData = async ()=> {
        let data = {
            'userID1' : {
                ReceiverName: 'Reliance Industries',
                UnseenMessages: 0,
                Messages: [{message:'Sir', time:'2022-03-14T13:52:34.545Z', status: 'read', owner:'001'}, 
                    {message:'Reply Pls', time:'2022-03-15T13:52:39.545Z', status: 'read', owner:'userID1'}, 
                ]
            },
            'userID2' : {
                ReceiverName: '3mg',
                UnseenMessages: 4,
                Messages: [{message:'Hii', time:'2022-03-16T13:51:34.545Z', status: 'read', owner:'001'}, 
                    {message:'Hello', time:'2022-03-16T13:52:36.545Z', status: 'read', owner:'userID2'}, 
                ]
            },
            'userID3' : {
                ReceiverName: 'Zivam',
                UnseenMessages: 1,
                Messages: [{message:'Hii', time:'2022-03-16T13:52:34.545Z', status: 'read', owner:'userID3'}, 
                    {message:'Who?', time:'2022-03-16T13:52:35.545Z', status: 'read', owner:'userID3'}, 
                ]
            },
        }

        return data;
    }

    const RecieveMessages = async ()=> {

    }

    const resizeHandler = () =>
    {
        setSinglePaneLayout(window.innerWidth > 1000 ? false : true);
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        setSinglePaneLayout(window.innerWidth > 600 ? false : true);
        
        getChatData().then((data)=>setChats(data));
        
        chatBoxRef.current?.scrollIntoView({ behavior: "smooth" })

        return(()=>window.removeEventListener('resize', resizeHandler));
    },
    []);

    useEffect(()=>
    {
        chatBoxRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [newMessage]);

    const openChat = (chatID)=>{
        setActiveChat(chatID);
    }

    const sendMessage = () => {
        if(newMessage === '')
            return;
        let cT = new Date();
        let sentTimeString = cT.toISOString();
        chats[activeChat].Messages.push({message:newMessage, time: sentTimeString, status: 'read', owner:myChatID})
        setChats(chats)
        setNewMessage('');
    }

    const ExpandHead = (event) => {
        if(SinglePaneLayout)
            setActiveChat(null);
        
    }

    let chatHeads=[];
    if(chats)
    {
        for(let [key, value] of Object.entries(chats))
        {
            if( key === activeChat )
                chats[key].UnseenMessages = 0
            
            chatHeads.push(
                <Button id={key} key={key} onClick={(event)=> {if(activeChat!==key)openChat(event.target.id); event.stopPropagation();}} className={styles.chatHead}
                  startIcon={<Box sx={{display:'flex', verticalAlign: 'middle'}}>
                      <MoreVertIcon sx={{color:'#7f7f7f'}}/>
                          <Typography sx={{
                                display:'inline-block !important', 
                                fontFamily: "'Nunito Sans', sans-serif !important", 
                                textTransform: 'capitalize !important', 
                                fontWeight: '100 !important', 
                                fontSize: '0.8em'}}>
                              {value.ReceiverName}
                          </Typography>
                  </Box>}
                  endIcon={key === activeChat ? <img src="/sidebar_arrow.svg"/> : <MessageBadge count={value.UnseenMessages} color='black'/>} 
                  aria-selected={key === activeChat ? 'true' : 'false'}
                />  
            )
        }
    }

    let messagesPane;
    if(activeChat && chats)
    {
        let Messages = [], i = 0;
        let msgDate = null;
        for(let aMessage of chats[activeChat].Messages)
        {
            let tmp = new Date(aMessage.time);
            
            if(msgDate?.getDate() < tmp.getDate())
                Messages.push(
                <Grid container>
                    <Grid item xs={5.25}><hr style={{backgroundColor:'#9ca1b1', height:'2px', border:'none'}}/></Grid>
                    <Grid item xs={1.5}>
                        <Typography sx={{textAlign:'center', color:'#9b9c9d', backgroundColor: '#595959'}}>
                            {tmp.getDate() + '/' + tmp.getMonth() + '/' + tmp.getFullYear()}
                        </Typography>
                    </Grid>
                    <Grid item xs={5.25}><hr style={{backgroundColor:'#9ca1b1', height:'2px', border:'none'}}/></Grid>
                </Grid>
            );
            
            msgDate = tmp;

            let rightSide = aMessage.owner === myChatID;
            Messages.push(<Box key={i++} sx={{width:'100%', justifyContent: rightSide ? 'flex-end' : 'flex-start', padding:'2px', display: 'flex'}}>
                {rightSide ? null : <AccountCircleOutlinedIcon sx={{color:'white'}}/>}
                <Box style={{display: 'inline-block', minWidth:'min-content', maxWidth:'75%', margin:'0px 8px'}}>
                    <Typography sx={{backgroundColor:'white', borderRadius:'13px', padding: '10px 20px', fontSize:'1.3em'}}>
                        {aMessage.message}
                    </Typography>
                    <Grid sx={{display:'flex', justifyContent: rightSide? 'space-between' : 'flex-start'}}>
                        {rightSide ? <DoneAllIcon sx={{fontSize: '0.8em', color:'white'}} /> : null }
                        <Typography sx={{fontSize:'0.6em', color: 'white'}}>
                            {msgDate.getHours() + ':' + msgDate.getMinutes()}
                        </Typography>
                    </Grid>
                </Box>
                {rightSide ? <AccountCircleOutlinedIcon sx={{color:'white'}}/> : null}
            </Box>)
        }

        messagesPane = <>
        <Grid sx={{overflow: 'scroll', maxHeight: 'calc(100vh - 165px)', paddingTop:'20px'}}  >
            {Messages}
            <div id='scrolltarget' ref={chatBoxRef}></div>
        </Grid>
        <Grid sx={{position:'absolute', bottom:'0', width: '100% !important', padding:'10px', maxHeight:'80px'}}>
            <Grid container sx={{backgroundColor:'white', borderRadius: '15px', maxHeight:'60px', paddingLeft: '15px'}}>
                {/*<Grid item xs={1} padding={0} sx={{maxHeight:'60px'}}>
                    <Button sx={{height: '60px', padding:'10px'}}
                        startIcon={<AddCircleOutlineRoundedIcon sx={{color:'black', height: '40px', width: '40px'}}/>}
                    />
                </Grid>*/}
                <Grid item xs={11} sx={{maxHeight:'60px'}}>
                    <input placeholder='Message' className={styles.msgBox} 
                      onKeyDown={(event)=>{if(event.key === "Enter") sendMessage()}} 
                      onChange={(event)=>setNewMessage(event.target.value)}
                      value={newMessage}
                      >
                    </input>
                </Grid>
                <Grid item xs={1} padding={0} sx={{maxHeight:'60px'}}>
                    <Button sx={{height: '60px'}}
                        onClick={sendMessage}
                        startIcon={<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="0 0 35 35">
                        <image id="paper-plane-regular-24" width="35" height="35" opacity="0.8" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABvUlEQVRIS+2W/TEDcRCG31RAB5RABagAFaACOkAFqAAd6IBUgArQARUwT2bX7H3s5e7yi/xjZ24ul9zts/vux2WiFdlkRVz9g0sqvy7pVNKZpE9J23aeMZYhdQTy2W1P0pNflARvSjqXdJzIVhycAacm7b4FUklykYx3LUPO0QBemKycUaFR1jHgDHhvwPcQRREwtSN6pI3WBvTfr62zvyTFRuvV1W1AHOGUg1Fx25L0Eq7p4h1JyF8pSSZ1NhIZEBVuDYC8br3BGfDD6ndXk5n7r2yECIoAogK9wMj0WKtFF9C3ktfu0oKLsdFoG5Log8p8R6lZbUTvRuTUkIdip7bVnADrTYefb3PWCKpeY+qDY6KMhsQPlhHK1O1EUr0Mg8DuEDgHHTnPsmxHgR3GCBDAUQc9yxZlnu25Q1Ps103fzUX93hI4ElPD2AfcStA0K1Z5QfBFX3CULUueHrgJr74/A3tAZE6TUvulZsziINsDSWuJHA1lF5WaHUzzkSWLhF3QNo5FwW2bqm0cXyU1Zn9MxtQOWeNbKGs4gKgR9/fs3qFg1qf/a5y3WDp/HwImS5qoiA0BFwG6k5WBfwC5AG4fxDqcBAAAAABJRU5ErkJggg=="/>
                        </svg>}
                    />
                </Grid>
            </Grid>
        </Grid></>
    }

    return (
        <>
            {user ? (
                <>
                    {alertMsg ? (
                        <Alert sx={{position: 'absolute', left: '50%', transform: 'translate(-50%, 10px)', width: 'min(90%, 800px)'}} severity="error">
                            {alertMsg}
                        </Alert>
                    ) : null}
                    <Grid xs={12} container>
                        <Grid item xs={12}>
                            <Header />
                        </Grid>
                        <Grid item sm={4} lg={3} sx={{display: {xs: 'none', sm: 'fixed'}, marginTop: '8.5vh'}}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={SinglePaneLayout? 12 : 8} sm={8} lg={9} sx={{ marginTop: '65px'}}>
                            <Grid container spacing={0}>
                                <Grid item onClick={ExpandHead} xs={SinglePaneLayout? activeChat? 1 : 12 : 4} sx={{backgroundColor: '#353f5c', borderRight: '1px solid #353f5c',  height: 'calc(100vh - 65px)', overflow: 'scroll'}}>
                                    {chatHeads}
                                </Grid>
                                <Grid item xs={SinglePaneLayout?  activeChat? 11 : 0 : 8} sx={{backgroundColor: '#454f6d', height: 'calc(100vh - 65px)', overflow: 'hidden', position: 'relative'}}>
                                    {messagesPane}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            ) : null}
        </>
    );
}