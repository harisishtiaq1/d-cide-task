import { Box, Container, Typography, IconButton } from "@mui/material";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Slider } from "@mui/material";
import { Paper } from "@mui/material";
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

function RateOptions() {
  let Entries = JSON.parse(localStorage.getItem("Entries"));
  let newEntries = JSON.parse(localStorage.getItem("newEntries"));
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography component="h1" variant="h5">
              Rate Options
            </Typography>
            <LightTooltip title="Show Help">
              <IconButton
                sx={{
                  ml: 2,
                  backgroundColor: "backgroundColor.default",
                  boxShadow:
                    "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
                }}
              >
                <QuestionMarkIcon  />
              </IconButton>
            </LightTooltip>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Box>
            <Paper
              sx={{
                mt: 3,
                height: 200,
                color: "transparent",
                width: 400,
                borderRadius: "10px",
                backgroundColor: "backgroundColor.paper",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ color: "color.default", fontSize: "20px", mt: 3 }}
                >
                  {newEntries[1]}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", mt: 3 }}>
                  <Typography sx={{ color: "color.default" }}>
                    {Entries[0]}
                  </Typography>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={70}
                    sx={{ width: 200, ml: 2 }}
                  ></Slider>
                </Box>
                <Box sx={{ display: "flex", mt: 3 }}>
                  <Typography sx={{ color: "color.default" }}>
                    {Entries[1]}
                  </Typography>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={70}
                    sx={{ width: 200, ml: 2 }}
                  ></Slider>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box>
            <Paper
              sx={{
                mt: 3,
                height: 200,
                color: "transparent",
                width: 400,
                borderRadius: "10px",
                backgroundColor: "backgroundColor.paper",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ color: "color.default", fontSize: "20px", mt: 3 }}
                >
                  {newEntries[0]}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", mt: 3 }}>
                  <Typography sx={{ color: "color.default" }}>
                    {Entries[0]}
                  </Typography>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={70}
                    sx={{ width: 200, ml: 2 }}
                  ></Slider>
                </Box>
                <Box sx={{ display: "flex", mt: 3 }}>
                  <Typography sx={{ color: "color.default" }}>
                    {Entries[1]}
                  </Typography>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={70}
                    sx={{ width: 200, ml: 2 }}
                  ></Slider>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default RateOptions;
