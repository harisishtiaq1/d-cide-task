import { React, useContext } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Stepperdecide from "./Stepperdecide";
import LightModeIcon from "@mui/icons-material/LightMode";
import { colorModeContext } from "../utilis/index";
import { styled } from "@mui/material/styles";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#cfcfe0",
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
function Navbar() {
  const { mode, toggleMode } = useContext(colorModeContext);
  console.log("mode", mode);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            color: "icon.default",
            mt: 2,
            ml: 3,
            fontSize: 40,
            height: "60%",
            maxWidth: "136px",
          }}
        >
          d-cide
        </Typography>
      </Box>
      <LightTooltip
        title={mode === "dark" ? "Set Light Theme" : "Set Dark Theme"}
      >
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
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </LightTooltip>
      <Stepperdecide />
    </>
  );
}

export default Navbar;
