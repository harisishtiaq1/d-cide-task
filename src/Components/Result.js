import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { IconButton } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
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

function Result() {
  let Entries = JSON.parse(localStorage.getItem("Entries"));
  let newEntries = JSON.parse(localStorage.getItem("newEntries"));

  const value = JSON.parse(localStorage.getItem("value"));
  const data = [
    {
      name: Entries[0],
      value: 10,
    },
    {
      name: Entries[1],
      value: 20,
    },
  ];
  const selectionData = [
    {
      name: newEntries[0],
      value: value,
    },
    {
      name: newEntries[1],
      value: value,
    },
  ];
  return (
    <>
      <Container>
        <Box
          sx-={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "space-around",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  mt: 3,
                  height: 300,
                  color: "transparent",
                  maxWidth: 600,
                  minWidth: 304,
                  borderRadius: "10px",
                  backgroundColor: "backgroundColor.paper",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "color.default", mt: 2 }}
                    component="h1"
                    variant="h5"
                  >
                    Decision Options Ranking
                  </Typography>
                  <LightTooltip title="Show Help">
                    <IconButton
                      sx={{
                        ml: 2,
                        mt: 2,
                        backgroundColor: "backgroundColor.default",
                        boxShadow:
                          "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
                      }}
                    >
                      <QuestionMarkIcon  />
                    </IconButton>
                  </LightTooltip>
                </Box>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" barSize={10} />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  mt: 3,
                  height: 300,
                  color: "transparent",
                  width: 600,
                  borderRadius: "10px",
                  backgroundColor: "backgroundColor.paper",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "color.default", mt: 2 }}
                    component="h1"
                    variant="h5"
                  >
                    Selection Criteria Ranking
                  </Typography>
                  <LightTooltip title="Show Help">
                    <IconButton
                      sx={{
                        ml: 2,
                        mt: 2,
                        backgroundColor: "backgroundColor.default",
                        boxShadow:
                          "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
                      }}
                    >
                      <QuestionMarkIcon  />
                    </IconButton>
                  </LightTooltip>
                </Box>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart
                    width={500}
                    height={300}
                    data={selectionData}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis
                      type="category"
                      dataKey="name"
                      sx={{ color: "color.default" }}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" barSize={10} />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Result;
