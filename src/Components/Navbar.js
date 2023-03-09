import React from 'react'
import {Typography, Box,Tooltip,IconButton } from '@mui/material'
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Stepperdecide from "./Stepperdecide"
import "../App.css"
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
function Navbar() {
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "#0C4E80", mt: 2, ml: 3, fontSize: 30 }}>
          d-cide
        </Typography>
      </Box>
      <Tooltip title="Set Dark Theme">
        <IconButton
          sx={{
            mr: 2,
            mt: 0.5,
            borderRadius: "50%",
            boxShadow:
              "4px 4px 7px rgb(0 0 0 / 50%), -4px -4px 7px rgb(255 255 255 / 50%)",
            position: "absolute",
            top: 25,
            right: 10,
          }}
        >
          <DarkModeIcon onClick={myFunction} />
        </IconButton>
      </Tooltip>
      <Stepperdecide/>
      </>
  )
}

export default Navbar