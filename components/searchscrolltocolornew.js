import React from "react";
import {
  ThemeProvider, createTheme
} from "@mui/material";
import styles from '../styles/Home.module.css';
import Searchcolor from "./searchcolor";
import SearchIcon from '@mui/icons-material/Search';
import { useScrollTrigger } from "@mui/material";


const SearchScrollcolor = props => {
    const theme = createTheme();

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: props.window ? window() : undefined
    });

    return (
        <ThemeProvider theme={theme}>
          <Searchcolor className={styles.hidesearch}>
            <input placeholder="Quick Search" className={trigger ? styles.searchinputDark : styles.searchinputLight} >
            </input>
          </Searchcolor>
          <SearchIcon className={styles.searchicon} />
          </ThemeProvider>
         
  );
};

export default SearchScrollcolor;  