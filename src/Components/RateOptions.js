import { Box, Container, Typography, Tooltip, IconButton } from "@mui/material";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Slider } from "@mui/material";
import { Paper } from "@mui/material";
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
function RateOptions() {
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
                <QuestionMarkIcon onClick={handleOpen} />
              </IconButton>
            </Tooltip>
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
                  sx={{ color: "color.default" }}
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
                <Box sx={{ display: "flex", mt: 5 }}>
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
                <Box sx={{ display: "flex", mt: 5 }}>
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
                  sx={{ color: "color.default" }}
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
                <Box sx={{ display: "flex", mt: 5 }}>
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
                <Box sx={{ display: "flex", mt: 5 }}>
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
              Decision Options
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

export default RateOptions;
