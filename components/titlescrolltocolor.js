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
import Titlecolor from "./titlecolor";
import { StylesContext } from "@material-ui/styles";

const TitleScrollcolor = props => {
    const theme = createTheme();

    return (
          <Titlecolor>
             <Grid item xs={4} md={4} mt={1} mb={1}>
                <Link href="/">
                  <Typography  className={styles.heading1} sx={{
                    fontSize: "30px"
                  , fontWeight: "bold"
                  , padding: "1px 8px 1px 7px"
                  , display: "inline-block"
                  , font: "Artifakt Element"
                  }}
                  inputprops={{ form: { autocomplete: 'off' } }}>
                   NicheBy
                  </Typography>
                </Link>
             </Grid>
          </Titlecolor>
  );
};

export default TitleScrollcolor;    