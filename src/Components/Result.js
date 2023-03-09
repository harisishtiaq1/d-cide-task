import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import {
    Tooltip,
    IconButton,
  } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
function Result() {
  return (
    <Container>
      <Box
        sx-={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "space-between",
        }}
      >
        <Grid container spacing={5}>
          <Grid item sx={12}>
            <Paper
              sx={{
                mt: 3,
                height: 300,
                color: "transparent",
                width: 500,
                borderRadius: "10px",
                backgroundColor: "#d9d9e6",
              }}
            >
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography sx={{color:'black',mt:4}} component='h1' variant='h5'>Decision Options Ranking</Typography>
                <Tooltip title="Show Help">
                <IconButton
                  sx={{
                    ml: 2,
                    mt: 3,
                    backgroundColor: "#D9D9E6",
                    boxShadow:
                      "2px 2px 5px rgb(0 0 0 / 25%), -2px -2px 5px rgb(255 255 255 / 30%)",
                  }}
                >
                  <QuestionMarkIcon/>
                </IconButton>
              </Tooltip>
              </Box>
            </Paper>
          </Grid>
          <Grid item sx={12}>
            <Paper
              sx={{
                mt: 3,
                height: 300,
                color: "transparent",
                width: 500,
                borderRadius: "10px",
                backgroundColor: "#d9d9e6",
              }}
            ></Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Result;
