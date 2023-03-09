import {
  Typography,
  Box,
  Container,
  Tooltip,
  TextField,
  Paper,
  IconButton,
  // Alert,
  Grid,
  Stack
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
// import LightModeIcon from "@mui/icons-material/LightMode";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "#D9D9E6",
  boxShadow: 24,
  p: 4,
};
function Main() {
  const [create, setCreate] = React.useState("");
  const [newCreate, setnewCreate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Entries, setEntries] = useState([]);
  const [newEntries, setNewEntries] = useState([]);
  const handleButtonClick = (Entry) => {
    setEntries((prevState) => [...prevState, Entry]);
    setCreate("");
  };
  const handleDeleteButton=(deleteItemindex)=>{
    const filtered=Entries.filter((item,index)=> index !== deleteItemindex)
  setEntries(filtered)
  }
  const handleDelete1Button=(deleteItemindex)=>{
    const filtered=newEntries.filter((item,index)=> index !== deleteItemindex)
  setNewEntries(filtered)
  }
  const handleButton1Click = (Entry) => {
    setNewEntries((prevState) => [...prevState, Entry]);
    setnewCreate("");
  };
  return (
    <>
      <Container sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid container spacing={2} >
          <Grid item xs={12} md={6}>
            <Stack direction='row'>
              <Typography component="h1" variant="h5">
                Decision Options
              </Typography>
              <Tooltip title="Show Help">
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
              </Tooltip>
              </Stack>
            <Box sx={{ mt: 3 }}>
              <Paper
                sx={{
                  height: 50,
                  color: "transparent",
                  width: 350,
                  borderRadius: "10px",
                  backgroundColor: "backgroundColor.paper",
                }}
              >
                <Tooltip title="Write New Entry">
                  <TextField
                    id="standard-basic"
                    placeholder="New Entry"
                    variant="standard"
                    sx={{ ml: 4, mt: 1, width: 250 }}
                    value={create}
                    onChange={(e) => {
                      setCreate(e.target.value);
                    }}
                  />
                </Tooltip>
                <Tooltip title="Add Entry">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 0.5,
                      boxShadow:
                        "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                    }}
                    onClick={() => handleButtonClick(create)}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Paper>
            </Box>
            {Entries &&
              Entries.map((Entry,index) => {
                return (
                  <Box sx={{ mt: 3 }}>
                    <Paper
                      sx={{
                        height: 50,
                        color: "transparent",
                        width: 350,
                        borderRadius: "10px",
                        backgroundColor: "backgroundColor.paper",
                      }}
                    >
                      <Tooltip title="Edit Entry">
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          sx={{ ml: 4, mt: 1, width: 250 }}
                          value={Entry}
                        />
                      </Tooltip>
                      <Tooltip title="Delete Entry">
                        <IconButton
                          sx={{
                            ml: 2,
                            mt: 0.5,
                            boxShadow:
                              "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                          }}
                          onClick={()=>handleDeleteButton(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Paper>
                  </Box>
                );
              })}
              </Grid>
          <Grid item xs={12} md={6}>
            <Stack  direction='row'  >
              <Typography component="h1" variant="h5">
                Selection Criteria
              </Typography>
              <Tooltip title="Show Help">
                <IconButton
                  sx={{
                    ml: 2,
                    backgroundColor: "Background.default",
                    boxShadow:
                      "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                  }}
                >
                  <QuestionMarkIcon />
                </IconButton>
              </Tooltip>
              </Stack>
            <Box sx={{ mt: 3 }}>
              <Paper
                sx={{
                  height: 50,
                  color: "transparent",
                  width: 350,
                  borderRadius: "10px",
                  backgroundColor: "backgroundColor.paper",
                }}
              >
                <Tooltip title="Create New Entry">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    placeholder="New Entry"
                    sx={{ ml: 4, mt: 1, width: 250 }}
                    value={newCreate}
                    onChange={(e) => {
                      setnewCreate(e.target.value);
                    }}
                  />
                </Tooltip>
                <Tooltip title="Add Entry">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 0.5,
                      boxShadow:
                        "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                    }}
                    onClick={() => handleButton1Click(newCreate)}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Paper>
              {newEntries &&
              newEntries.map((Entry,index) => {
                return (
                  <Box sx={{ mt: 3 }}>
                    <Paper
                      sx={{
                        height: 50,
                        color: "transparent",
                        width: 350,
                        borderRadius: "10px",
                        backgroundColor: "backgroundColor.paper",
                      }}
                    >
                      <Tooltip title="Edit Entry">
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          sx={{ ml: 4, mt: 1, width: 250 }}
                          value={Entry}
                        />
                      </Tooltip>
                      <Tooltip title="Delete Entry">
                        <IconButton
                          sx={{
                            ml: 2,
                            mt: 0.5,
                            boxShadow:
                              "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 6%)",
                          }}
                          onClick={()=>handleDelete1Button(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Paper>
                  </Box>
                );
              })}
            </Box>
            </Grid>

        </Grid>
      </Container>
      {/* <Box
        sx={{
          width: 400,
          height: "300",
          position: "absolute",
          bottom: 20,
          right: "35%",
        }}
      >
        <Alert sx={{ fontSize: "15px" }} severity="warning">
          At least two decision options are necessary!
        </Alert>
      </Box> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Decision Options
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Write every decision option you need to decide for. For example, if
            you want to make an investment, your decision options may look like
            this: .Invest in gold .Invest in shares .Invest in real state Take
            some time to think about every other option "out of the box" that
            may also exist. In case you have a binary decision (yes/no), you
            should write two decision options. For example: Invest money Don't
            invest money
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Main;
