import { Box, Container, Typography, Tooltip, IconButton } from "@mui/material";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Slider } from "@mui/material";
import { Paper } from "@mui/material";
function WeightCritertia() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography component="h1" variant="h5">
            Weight Criteria
          </Typography>
          <Tooltip title="Show Help">
            <IconButton
              sx={{
                ml: 2,
                backgroundColor: "#D9D9E6",
                boxShadow:
                  "2px 2px 5px rgb(0 0 0 / 25%), -2px -2px 5px rgb(255 255 255 / 30%)",
              }}
            >
              <QuestionMarkIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Paper
            sx={{
              mt: 3,
              height: 100,
              color: "transparent",
              width: 450,
              borderRadius: "10px",
              backgroundColor: "#D9D9E6",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Typography component="p" variant="p" sx={{ color: "black" }}>
                Haris
              </Typography>
              <Typography component="p" variant="p" sx={{ color: "black" }}>
                Haris
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={70}
                sx={{ width: 400, ml: 2, mt: 2 }}
              ></Slider>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography variant='p' component='p' sx={{color:'black',mt:2}}>
                    This is important is this
                </Typography>
                </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default WeightCritertia;
