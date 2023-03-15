import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Modal, ListItem, List } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  color: "color.default",
  background: "background.default",
  backgroundColor: "backgroundColor.default",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};
function Result() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Entries] = React.useState(
    JSON.parse(localStorage.getItem("Entries") || [])
  );
  const [newEntries] = React.useState(
    JSON.parse(localStorage.getItem("newEntries") || [])
  );
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
                  <Tooltip title="Show Help">
                    <IconButton
                      sx={{
                        ml: 2,
                        mt: 2,
                        backgroundColor: "backgroundColor.default",
                        boxShadow:
                          "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
                      }}
                    >
                      <QuestionMarkIcon onClick={handleOpen} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <svg
                  class="recharts-surface"
                  width="575"
                  height="184"
                  viewBox="0 0 575 184"
                  version="1.1"
                >
                  <defs>
                    <clipPath id="recharts1-clip">
                      <rect x="120" y="0" height="146" width="415"></rect>
                    </clipPath>
                  </defs>
                  <g class="recharts-cartesian-grid">
                    <g class="recharts-cartesian-grid-vertical">
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="120"
                        y1="0"
                        x2="120"
                        y2="146"
                      ></line>
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="223.75"
                        y1="0"
                        x2="223.75"
                        y2="146"
                      ></line>
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="327.5"
                        y1="0"
                        x2="327.5"
                        y2="146"
                      ></line>
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="431.25"
                        y1="0"
                        x2="431.25"
                        y2="146"
                      ></line>
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="535"
                        y1="0"
                        x2="535"
                        y2="146"
                      ></line>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                    <g class="recharts-cartesian-axis-ticks">
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="120"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="120" dy="0.71em">
                            0
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="223.75"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="223.75" dy="0.71em">
                            2.5
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="327.5"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="327.5" dy="0.71em">
                            5
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="431.25"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="431.25" dy="0.71em">
                            7.5
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="535"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="535" dy="0.71em">
                            10
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                    <line
                      type="category"
                      stroke="#575757"
                      width="80"
                      orientation="left"
                      height="146"
                      x="40"
                      y="0"
                      class="recharts-cartesian-axis-line"
                      fill="none"
                      x1="120"
                      y1="0"
                      x2="120"
                      y2="146"
                    ></line>
                    <g class="recharts-cartesian-axis-ticks">
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          type="category"
                          stroke="#575757"
                          width="80"
                          orientation="left"
                          height="146"
                          x="40"
                          y="0"
                          class="recharts-cartesian-axis-tick-line"
                          fill="none"
                          x1="114"
                          y1="36.5"
                          x2="120"
                          y2="36.5"
                        ></line>
                        <text
                          type="category"
                          stroke="none"
                          width="80"
                          orientation="left"
                          height="146"
                          x="112"
                          y="36.5"
                          fill="#575757"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                        >
                          <tspan x="112" dy="0.355em">
                            {Entries[0]}
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          type="category"
                          stroke="#575757"
                          width="80"
                          orientation="left"
                          height="146"
                          x="40"
                          y="0"
                          class="recharts-cartesian-axis-tick-line"
                          fill="none"
                          x1="114"
                          y1="109.5"
                          x2="120"
                          y2="109.5"
                        ></line>
                        <text
                          type="category"
                          stroke="none"
                          width="80"
                          orientation="left"
                          height="146"
                          x="112"
                          y="109.5"
                          fill="#575757"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                        >
                          <tspan x="112" dy="0.355em">
                            {Entries[1]}
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-bar">
                    <g class="recharts-layer recharts-bar-rectangles">
                      <g class="recharts-layer">
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            radius="0,10,10,0"
                            x="120"
                            y="31.1"
                            width="307.09999999999997"
                            height="10"
                            id="3"
                            name="dfdf"
                            fill="#0f61a0"
                            class="recharts-rectangle"
                            d="M120,31.1L 422.09999999999997,31.1A 5,5,0,0,1,
        427.09999999999997,36.1L 427.09999999999997,36.1A 5,5,0,0,1,
        422.09999999999997,41.1L 120,41.1Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            radius="0,10,10,0"
                            x="120"
                            y="104.1"
                            width="294.65"
                            height="10"
                            id="2"
                            name="ishtiaq"
                            fill="#6d6d6d"
                            class="recharts-rectangle"
                            d="M120,104.1L 409.65,104.1A 5,5,0,0,1,
        414.65,109.1L 414.65,109.1A 5,5,0,0,1,
        409.65,114.1L 120,114.1Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g class="recharts-layer recharts-label-list">
                      <text
                        id="3"
                        name="dfdf"
                        x="432.09999999999997"
                        y="36.1"
                        width="307.09999999999997"
                        height="10"
                        fill="#0f61a0"
                        offset="5"
                        class="recharts-text recharts-label"
                        text-anchor="start"
                      >
                        <tspan x="432.09999999999997" dy="0.355em">
                          7.4
                        </tspan>
                      </text>
                      <text
                        id="2"
                        name="ishtiaq"
                        x="419.65"
                        y="109.1"
                        width="294.65"
                        height="10"
                        fill="#6d6d6d"
                        offset="5"
                        class="recharts-text recharts-label"
                        text-anchor="start"
                      >
                        <tspan x="419.65" dy="0.355em">
                          7.1
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
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
                    sx={{ color: "color.default" }}
                    component="h1"
                    variant="h5"
                  >
                    Selection Criteria Ranking
                  </Typography>
                  <Tooltip title="Show Help">
                    <IconButton
                      sx={{
                        ml: 2,
                        mt: 2,
                        backgroundColor: "backgroundColor.default",
                        boxShadow:
                          "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
                      }}
                    >
                      <QuestionMarkIcon onClick={handleOpen} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <svg
                  class="recharts-surface"
                  width="575"
                  height="184"
                  viewBox="0 0 575 184"
                  version="1.1"
                >
                  <defs>
                    <clipPath id="recharts1-clip">
                      <rect x="120" y="0" height="146" width="415"></rect>
                    </clipPath>
                  </defs>
                  <g class="recharts-cartesian-grid">
                    <g class="recharts-cartesian-grid-vertical">
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="120"
                        y1="0"
                        x2="120"
                        y2="146"
                      ></line>
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="223.75"
                        y1="0"
                        x2="223.75"
                        y2="146"
                      ></line>
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="327.5"
                        y1="0"
                        x2="327.5"
                        y2="146"
                      ></line>
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="431.25"
                        y1="0"
                        x2="431.25"
                        y2="146"
                      ></line>
                      <line
                        stroke="#575757"
                        stroke-width="0.5"
                        fill="none"
                        x="120"
                        y="0"
                        width="415"
                        height="146"
                        offset="[object Object]"
                        x1="535"
                        y1="0"
                        x2="535"
                        y2="146"
                      ></line>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                    <g class="recharts-cartesian-axis-ticks">
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="120"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="120" dy="0.71em">
                            0
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="223.75"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="223.75" dy="0.71em">
                            2.5
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="327.5"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="327.5" dy="0.71em">
                            5
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="431.25"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="431.25" dy="0.71em">
                            7.5
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          type="number"
                          stroke="none"
                          orientation="bottom"
                          width="415"
                          height="30"
                          x="535"
                          y="149"
                          fill="#575757"
                          font-size="0.8rem"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="middle"
                        >
                          <tspan x="535" dy="0.71em">
                            10
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                    <line
                      type="category"
                      stroke="#575757"
                      width="80"
                      orientation="left"
                      height="146"
                      x="40"
                      y="0"
                      class="recharts-cartesian-axis-line"
                      fill="none"
                      x1="120"
                      y1="0"
                      x2="120"
                      y2="146"
                    ></line>
                    <g class="recharts-cartesian-axis-ticks">
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          type="category"
                          stroke="#575757"
                          width="80"
                          orientation="left"
                          height="146"
                          x="40"
                          y="0"
                          class="recharts-cartesian-axis-tick-line"
                          fill="none"
                          x1="114"
                          y1="36.5"
                          x2="120"
                          y2="36.5"
                        ></line>
                        <text
                          type="category"
                          stroke="none"
                          width="80"
                          orientation="left"
                          height="146"
                          x="112"
                          y="36.5"
                          fill="#575757"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                        >
                          <tspan x="112" dy="0.355em">
                            {newEntries[0]}
                          </tspan>
                        </text>
                      </g>
                      <g class="recharts-layer recharts-cartesian-axis-tick">
                        <line
                          type="category"
                          stroke="#575757"
                          width="80"
                          orientation="left"
                          height="146"
                          x="40"
                          y="0"
                          class="recharts-cartesian-axis-tick-line"
                          fill="none"
                          x1="114"
                          y1="109.5"
                          x2="120"
                          y2="109.5"
                        ></line>
                        <text
                          type="category"
                          stroke="none"
                          width="80"
                          orientation="left"
                          height="146"
                          x="112"
                          y="109.5"
                          fill="#575757"
                          class="recharts-text recharts-cartesian-axis-tick-value"
                          text-anchor="end"
                        >
                          <tspan x="112" dy="0.355em">
                            {newEntries[1]}
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g class="recharts-layer recharts-bar">
                    <g class="recharts-layer recharts-bar-rectangles">
                      <g class="recharts-layer">
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            radius="0,10,10,0"
                            x="120"
                            y="31.1"
                            width="307.09999999999997"
                            height="10"
                            id="3"
                            name="dfdf"
                            fill="#0f61a0"
                            class="recharts-rectangle"
                            d="M120,31.1L 422.09999999999997,31.1A 5,5,0,0,1,
        427.09999999999997,36.1L 427.09999999999997,36.1A 5,5,0,0,1,
        422.09999999999997,41.1L 120,41.1Z"
                          ></path>
                        </g>
                        <g class="recharts-layer recharts-bar-rectangle">
                          <path
                            radius="0,10,10,0"
                            x="120"
                            y="104.1"
                            width="294.65"
                            height="10"
                            id="2"
                            name="ishtiaq"
                            fill="#6d6d6d"
                            class="recharts-rectangle"
                            d="M120,104.1L 409.65,104.1A 5,5,0,0,1,
        414.65,109.1L 414.65,109.1A 5,5,0,0,1,
        409.65,114.1L 120,114.1Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g class="recharts-layer recharts-label-list">
                      <text
                        id="3"
                        name="dfdf"
                        x="432.09999999999997"
                        y="36.1"
                        width="307.09999999999997"
                        height="10"
                        fill="#0f61a0"
                        offset="5"
                        class="recharts-text recharts-label"
                        text-anchor="start"
                      >
                        <tspan x="432.09999999999997" dy="0.355em">
                          7.4
                        </tspan>
                      </text>
                      <text
                        id="2"
                        name="ishtiaq"
                        x="419.65"
                        y="109.1"
                        width="294.65"
                        height="10"
                        fill="#6d6d6d"
                        offset="5"
                        class="recharts-text recharts-label"
                        text-anchor="start"
                      >
                        <tspan x="419.65" dy="0.355em">
                          7.1
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Paper
        sx={{
          background: "background.default",
          backgroundColor: "backgroundColor.default",
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Tooltip title="Close">
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  boxShadow:
                    "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Weight Criteria
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Write every decision option you need to decide for.
              <Box component="br" />
              For example, if you want to make an investment, your decision
              options may look like this:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ width: "20px" }}>
                  <CircleIcon sx={{ fontSize: "10px" }} />
                </IconButton>
                Invest In gold
              </ListItem>
              <ListItem>
                <IconButton sx={{ width: "20px" }}>
                  <CircleIcon sx={{ fontSize: "10px" }} />
                </IconButton>
                Invest In Shares
              </ListItem>
              <ListItem>
                <IconButton sx={{ width: "20px" }}>
                  <CircleIcon sx={{ fontSize: "10px" }} />
                </IconButton>
                Invest In Real Estate
              </ListItem>
            </List>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Take some time to think about every other option "out of the box"
              that may also exist.
              <Box component="br" />
              <Box component="br" />
              In case you have a binary decision (yes/no), you should write two
              decision options. For example:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ width: "20px" }}>
                  <CircleIcon sx={{ fontSize: "10px" }} />
                </IconButton>
                Invest Money
              </ListItem>
              <ListItem>
                <IconButton sx={{ width: "20px" }}>
                  <CircleIcon sx={{ fontSize: "10px" }} />
                </IconButton>
                Do not Invest Money
              </ListItem>
            </List>
          </Box>
        </Modal>
      </Paper>
    </>
  );
}

export default Result;
