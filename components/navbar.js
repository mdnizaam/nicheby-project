import React, { useState, useEffect } from 'react'
import { Grid, Hidden } from '@mui/material';
import styles from "../styles/Navbar.module.css";
import Sidebar from './sidebar';
import ModalUnstyled from '@mui/base/ModalUnstyled';

export default function Navbar(props) {

    const toggleShowModal = () => {
        props.setModal(!props.modal)
    }
    return (
        <div style={{position: 'fixed'}}>
            <Grid container sx={{justifyContent: 'space-between'}}>
                <Grid item sx={{display: 'flex', alignItems: 'center'}}>
                    <Hidden smUp>
                        <img src='/icons8-menu.svg' className={styles.menu} onClick={toggleShowModal} />
                    </Hidden>
                    Niche by
                </Grid>
                <Grid item> Other Icons </Grid>
            </Grid>
            {
                props.modal ?
                <Grid sx={{zIndex: '10'}}>
                    <Sidebar/>
                </Grid>
                : null
            }
        </div>
    )
}