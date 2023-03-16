import {
  Typography,
  Box,
  TextField,
  Paper,
  IconButton,
  Alert,
  Grid,
  Stack,
  ListItem,
  List,
  Fade,
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
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
function Main({ handleTrigger }) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const [newchecked, setNewChecked] = React.useState(true);
  const handlenewChange = () => {
    setNewChecked((prev) => !prev);
  };
  const [create, setCreate] = React.useState("");
  const [newCreate, setnewCreate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Entries, setEntries] = React.useState(
    JSON.parse(localStorage.getItem("Entries") ||
     []
    )
  );
  const [newEntries, setNewEntries] = React.useState(
    JSON.parse(localStorage.getItem("newEntries") || [])
  );
  const handleButtonClick = (Entry) => {
    if (Entry) {
      setEntries((prevState) => [...prevState, Entry]);
      setCreate("");
    }
  };
  const handleDeleteButton = (deleteItemindex) => {
    const filtered = Entries.filter((item, index) => index !== deleteItemindex);
    setEntries(filtered);
  };
  const handleDelete1Button = (deleteItemindex) => {
    const filtered = newEntries.filter(
      (item, index) => index !== deleteItemindex
    );
    setNewEntries(filtered);
  };
  const handleButton1Click = (Entry) => {
    if (Entry) {
      setNewEntries((prevState) => [...prevState, Entry]);
      setnewCreate("");
    }
  };
  useEffect(() => {
    localStorage.setItem("Entries", JSON.stringify(Entries));
  }, [Entries]);

  useEffect(() => {
    localStorage.setItem("newEntries", JSON.stringify(newEntries));
  }, [newEntries]);
  if (Entries.length >= 2 && newEntries.length >= 2) handleTrigger(true);
  else handleTrigger(false);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Decision Options
            </Typography>
            <LightTooltip title="Show Help">
              <IconButton
                sx={{
                  ml: 2,
                  mt: 0.5,
                  boxShadow:
                    "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                  backgroundColor: "Background.default",
                }}
              >
                <QuestionMarkIcon onClick={handleOpen} />
              </IconButton>
            </LightTooltip>
          </Stack>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item sx={{ mt: 3 }}>
              <Paper
                sx={{
                  height: 50,
                  color: "transparent",
                  width: 400,
                  borderRadius: "10px",
                  backgroundColor: "backgroundColor.paper",
                }}
              >
                <LightTooltip title="Write New Entry">
                  <TextField
                    placeholder="New Entry"
                    variant="standard"
                    sx={{ ml: 4, mt: 1, width: 300 }}
                    value={create}
                    onChange={(e) => {
                      setCreate(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleButtonClick(create);
                      }
                    }}
                  />
                </LightTooltip>
                <LightTooltip title="Add Entry">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 0.5,
                      boxShadow:
                        "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                    }}
                    onClick={() => handleButtonClick(create)}
                    onChange={handleChange}
                    checked={checked}
                  >
                    <AddIcon />
                  </IconButton>
                </LightTooltip>
              </Paper>
              <Grid sx={{ mt: 3 }}>
                {Entries &&
                  Entries.map((Entry, index) => {
                    return (
                      <Fade in={checked}>
                        <Paper
                          sx={{
                            height: 50,
                            color: "transparent",
                            width: 400,
                            borderRadius: "10px",
                            backgroundColor: "backgroundColor.paper",
                            mt: 3,
                          }}
                        >
                          <LightTooltip title="Edit Entry">
                            <TextField
                              id="standard-basic"
                              variant="standard"
                              sx={{ ml: 4, mt: 1, width: 300 }}
                              value={Entry}
                            />
                          </LightTooltip>
                          <LightTooltip title="Delete Entry">
                            <IconButton
                              sx={{
                                ml: 2,
                                mt: 0.5,
                                boxShadow:
                                  "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                              }}
                              onClick={() => handleDeleteButton(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </LightTooltip>
                        </Paper>
                      </Fade>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" sx={{ ml: 10 }}>
            <Typography component="h1" variant="h5">
              Selection Criteria
            </Typography>
            <LightTooltip title="Show Help">
              <IconButton
                sx={{
                  ml: 2,
                  backgroundColor: "Background.default",
                  boxShadow:
                    "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                }}
              >
                <QuestionMarkIcon onClick={handleOpen} />
              </IconButton>
            </LightTooltip>
          </Stack>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12}>
              <Paper
                sx={{
                  height: 50,
                  color: "transparent",
                  width: 400,
                  borderRadius: "10px",
                  backgroundColor: "backgroundColor.paper",
                  mt: 3,
                }}
              >
                <LightTooltip title="Create New Entry">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    placeholder="New Entry"
                    sx={{ ml: 4, mt: 1, width: 300 }}
                    value={newCreate}
                    onChange={(e) => {
                      setnewCreate(e.target.value);
                    }}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        handleButton1Click(newCreate);
                      }
                    }}
                  />
                </LightTooltip>
                <LightTooltip title="Add Entry">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 0.5,
                      boxShadow:
                        "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                    }}
                    onClick={() => handleButton1Click(newCreate)}
                    onChange={newchecked}
                    checked={checked}
                  >
                    <AddIcon />
                  </IconButton>
                </LightTooltip>
              </Paper>
              {newEntries &&
                newEntries.map((Entry, index) => {
                  return (
                    <Fade in={handlenewChange}>
                      <Box sx={{ mt: 3 }}>
                        <Paper
                          sx={{
                            height: 50,
                            color: "transparent",
                            width: 400,
                            borderRadius: "10px",
                            backgroundColor: "backgroundColor.paper",
                          }}
                        >
                          <LightTooltip title="Edit Entry">
                            <TextField
                              id="standard-basic"
                              variant="standard"
                              sx={{ ml: 4, mt: 1, width: 300 }}
                              value={Entry}
                            />
                          </LightTooltip>
                          <LightTooltip title="Delete Entry">
                            <IconButton
                              sx={{
                                ml: 2,
                                mt: 0.5,
                                boxShadow:
                                  "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                              }}
                              onClick={() => handleDelete1Button(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </LightTooltip>
                        </Paper>
                      </Box>
                    </Fade>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {newEntries.length < 2 && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={true}
        >
          <Alert sx={{ fontSize: "15px" }} severity="warning">
            At least two Selection Criteria are necessary!
          </Alert>
        </Snackbar>
      )}
      {Entries.length < 2 && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={true}
        >
          <Alert sx={{ fontSize: "15px" }} severity="warning">
            At least two Decision options are necessary!
          </Alert>
        </Snackbar>
      )}

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

export default Main;
