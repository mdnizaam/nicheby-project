import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Paper,
  FormGroup,
  FormControlLabel,
  Box,
  Hidden,
  Alert,
  Switch,
  TextareaAutosize,
} from "@mui/material";
import Sidebar from "../components/sidebar";
import Header from "../components/headerForDashBoardHome";
import styles from "../styles/Dashboard.module.css";

export default function Deshboard() {
  return (
    <Grid xs={12} container>
      <Grid>
        <Header />
      </Grid>
      <Grid mt={7.8}>
        <Hidden smDown>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9}>
          Verification Tab
        </Grid>
      </Grid>
    </Grid>
  );
}
