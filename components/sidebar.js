import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
    const [selectedTab, setSelectedTab] = useState('#312F2F');

    useEffect(() => {
        if(window.location.pathname == '/dashboard') {
            setSelectedTab(0);
        } else if(window.location.pathname == '/setting') {
            setSelectedTab(1);
        } else if(window.location.pathname == '/verification') {
            setSelectedTab(2);
        } else if(window.location.pathname == '/portfolio') {
            setSelectedTab(3);
        } else if(window.location.pathname == '/messages') {
            setSelectedTab(4);
        }
    })

    const tabClicked = (link) => {
        window.location = link;
    }
    
    return (
        <Grid container xs={12} sm={4} lg={3} className={styles.sidebar} style={{position: 'fixed'}}>
            <Grid item xs={12}>
                <Grid container xs={12}>
                    <Grid xs={12} item className={`${styles.item} ${selectedTab == 0 ? styles.selected : null}`} onClick={() => tabClicked('/dashboard')}>
                        Dashboard { selectedTab == 0 ? <img src="/sidebar_arrow.svg" className={styles.img} /> : null }
                    </Grid>
                    <Grid xs={12} item className={`${styles.item} ${selectedTab == 1 ? styles.selected : null}`} onClick={() => tabClicked('/setting')}>
                        Settings { selectedTab == 1 ? <img src="/sidebar_arrow.svg" className={styles.img} /> : null }
                    </Grid>
                    {/*<Grid xs={12} item className={`${styles.item} ${selectedTab == 2 ? styles.selected : null}`} onClick={() => tabClicked('/verification')}>
                        Verification { selectedTab == 2 ? <img src="/sidebar_arrow.svg" className={styles.img} /> : null }
                    </Grid>*/}
                    <Grid xs={12} item className={`${styles.item} ${selectedTab == 3 ? styles.selected : null}`}  onClick={() => tabClicked('/portfolio')}>
                        Portfolio { selectedTab == 3 ? <img src="/sidebar_arrow.svg" className={styles.img} /> : null }
                    </Grid>
                    {/* <Grid xs={12} item className={`${styles.item} ${selectedTab == 4 ? styles.selected : null}`}  onClick={() => tabClicked('/messages')}>
                        Messages { selectedTab == 4 ? <img src="/sidebar_arrow.svg" className={styles.img} /> : null }
                    </Grid> */}
                </Grid>
            </Grid>
            {/*<Grid item xs={12} className={styles.support} onClick={() => tabClicked('/support')}>
                Support
            </Grid>*/}
        </Grid>
    )
}