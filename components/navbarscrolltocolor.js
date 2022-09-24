
import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  createTheme
} from "@mui/material";
import ScrollToColor01 from "./navbarcolor";
import { AppBar, Box, Toolbar } from '@mui/material';
import TitleScrollcolor from "./titlescrolltocolor";
import DividerScrollcolor from "./dividerscrolltocolor"
import IconScrollcolor from "./iconnavscrolltocolor";
import SearchScrollcolor from "./searchscrolltocolornew";
import SigninScrollcolor from "./signinscrolltocolor";


const Navcolbar = props => {
  const theme = createTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToColor01>
        <AppBar position="static">
          <Toolbar>
              <TitleScrollcolor />
              <Box sx={{ color: "white", position: 'absolute', right: '10px', display: "flex"}} fullWidth>
                <SigninScrollcolor /> 
                <DividerScrollcolor/>
                <SearchScrollcolor />
                <IconScrollcolor  popOverControl={props.popOverControl} /> 
              </Box>
          </Toolbar>
        </AppBar>
      </ScrollToColor01>
    </ThemeProvider>
  );
};
export default Navcolbar;
