import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  createTheme
} from "@mui/material";
import ScrollToColor01 from "./navbarcolor";
import Divider from '@mui/material/Divider';
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/Home.module.css';
import { Grid,Paper, AppBar, Box, Toolbar, Typography, IconButton, Button, TextField, MenuList, MenuItem, Menu } from '@mui/material';
import Dividercolor from "./dividercolor";

const DividerScrollcolor = props => {
    const theme = createTheme();

    return (
          <Dividercolor>
             <Box className={styles.divider} mt={-3} mb={-1.32} />
          </Dividercolor>
  );
};

export default DividerScrollcolor;    