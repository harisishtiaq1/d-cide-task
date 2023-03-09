import { Box, Container, Typography, Tooltip, IconButton } from "@mui/material";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Slider } from "@mui/material";
import { Paper } from "@mui/material";

function RateOptions() {
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
            Rate Options
          </Typography>
          <Tooltip title="Show Help">
          <IconButton
              sx={{
                ml: 2,
                backgroundColor: "backgroundColor.default",
                boxShadow:
                "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
              }}
            >
              <QuestionMarkIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',margin:"0 auto"}}>
      <Box>
      <Paper
            sx={{
              mt: 3,
              height: 100,
              color: "transparent",
              width: 300,
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
                sx={{ width: 200, ml: 2, mt: 2 }}
              ></Slider>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography variant='p' component='p' sx={{color:'black',mt:2}}>
                    This is important is this
                </Typography>
                </Box>
          </Paper>
          <Paper
            sx={{
              mt: 3,
              height: 100,
              color: "transparent",
              width: 300,
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
                sx={{ width: 200, ml: 2, mt: 2 }}
              ></Slider>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography variant='p' component='p' sx={{color:'black',mt:2}}>
                    This is important is this
                </Typography>
                </Box>
          </Paper>
          </Box>
          <Box>
          <Paper
            sx={{
              mt: 3,
              height: 100,
              color: "transparent",
              width: 300,
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
                sx={{ width: 200, ml: 2, mt: 2 }}
              ></Slider>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography variant='p' component='p' sx={{color:'black',mt:2}}>
                    This is important is this
                </Typography>
                </Box>
          </Paper>
          <Paper
            sx={{
              mt: 3,
              height: 100,
              color: "transparent",
              width: 300,
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
                sx={{ width: 200, ml: 2, mt: 2 }}
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
  )
}

export default RateOptions