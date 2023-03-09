import {React,useContext} from 'react'
import {Typography, Box,Tooltip,IconButton} from '@mui/material'
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Stepperdecide from "./Stepperdecide"
import LightModeIcon from "@mui/icons-material/LightMode";

import { colorModeContext } from "./store/index";


function Navbar() {
  const {mode,toggleMode}=useContext(colorModeContext);
  console.log('mode',mode);

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
              "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
            position: "absolute",
            top: 25,
            right: 10,
            
          }}
          onClick={toggleMode}
        >
          {mode === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>}
        </IconButton>
      </Tooltip>
      <Stepperdecide/>
      </>
  )
          
}

export default Navbar