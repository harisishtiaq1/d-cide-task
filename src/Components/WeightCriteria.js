import { Box, Container, Typography, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Slider } from "@mui/material";
import { Paper } from "@mui/material";
import { Modal, ListItem, List } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
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
function WeightCritertia() {
  const [newEntries] = React.useState(
    JSON.parse(localStorage.getItem("newEntries") || [])
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem("value") || 0)
  );
  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);
  function valueLabelFormat() {
    const data = [
      " is way more important than ",
      " is more important than ",
      " is a little more important than ",
      " is as important as ",
      " is a little more important than ",
      " is more important than ",
      " is way more important than ",
    ];
    let scaledValue;
    if (value <= 4) {
      scaledValue = newEntries[1] + data[value] + newEntries[0];
    }
    if (value >= 4) {
      scaledValue = newEntries[0] + data[value] + newEntries[1];
    }
    return scaledValue;
  }
  return (
    <>
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
            <LightTooltip title="Show Help">
              <IconButton
                sx={{
                  ml: 2,
                  backgroundColor: "backgroundColor.default",
                  boxShadow:
                    "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
                }}
              >
                <QuestionMarkIcon onClick={handleOpen} />
              </IconButton>
            </LightTooltip>
          </Box>
          <Box>
            <Paper
              sx={{
                mt: 3,
                height: 100,
                color: "transparent",
                width: 450,
                borderRadius: "10px",
                backgroundColor: "backgroundColor.paper",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ color: "color.default", textTransform: "uppercase" }}
                >
                  {newEntries[1]}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ color: "color.default", textTransform: "uppercase" }}
                >
                  {newEntries[0]}
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
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  defaultValue={3}
                  min={0}
                  max={6}
                  sx={{ width: 400, ml: 2, mt: 2 }}
                  onChange={handleChange}
                  value={value}
                ></Slider>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="p"
                  component="p"
                  sx={{ color: "color.default", mt: 2 }}
                >
                  {valueLabelFormat([value])}
                </Typography>
              </Box>
            </Paper>
          </Box>
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
            <LightTooltip title="Close">
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
            </LightTooltip>
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

export default WeightCritertia;
