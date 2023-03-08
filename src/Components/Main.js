import {
  Typography,
  Box,
  Container,
  Tooltip,
  TextField,
  Paper,
  IconButton,
  Alert,
} from "@mui/material";
import React from "react";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Decision Options
              </Typography>
              <Tooltip title="Show Help">
                <IconButton
                  sx={{
                    ml: 2,
                    mt: 0.5,
                    backgroundColor: "#D9D9E6",
                    boxShadow:
                      "2px 2px 5px rgb(0 0 0 / 25%), -2px -2px 5px rgb(255 255 255 / 30%)",
                  }}
                >
                  <QuestionMarkIcon onClick={handleOpen} />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Paper
                sx={{
                  height: 50,
                  color: "transparent",
                  width: 350,
                  borderRadius: "10px",
                  backgroundColor: "#D9D9E6",
                }}
              >
                <Tooltip title="Write New Entry">
                  <TextField
                    id="standard-basic"
                    placeholder="New Entry"
                    variant="standard"
                    sx={{ ml: 4, mt: 1, width: 250 }}
                  />
                </Tooltip>
                <Tooltip title="Add Entry">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 0.5,
                      boxShadow:
                        "2px 2px 5px rgb(0 0 0 / 25%), -2px -2px 5px rgb(255 255 255 / 30%)",
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Paper>
              <Paper
                sx={{
                  mt: 3,
                  height: 50,
                  color: "transparent",
                  width: 350,
                  borderRadius: "10px",
                  backgroundColor: "#D9D9E6",
                }}
              >
                <Tooltip title="Edit Entry">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    sx={{ ml: 4, mt: 1, width: 250 }}
                  />
                </Tooltip>
                <Tooltip title="Delete Entry">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 0.5,
                      boxShadow:
                        "2px 2px 5px rgb(0 0 0 / 25%), -2px -2px 5px rgb(255 255 255 / 30%)",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Paper>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                alignitems: "center",
                justifyContent: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Selection Criteria
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

            <Box sx={{ mt: 3 }}>
              <Paper
                sx={{
                  height: 50,
                  color: "transparent",
                  width: 350,
                  borderRadius: "10px",
                  backgroundColor: "#D9D9E6",
                }}
              >
                <Tooltip title="Write New Entry">
                  <TextField
                    id="standard-basic"
                    placeholder="New Entry"
                    variant="standard"
                    sx={{ ml: 4, mt: 1, width: 250 }}
                  />
                </Tooltip>
                <Tooltip title="Add Entry">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 0.5,
                      boxShadow:
                        "2px 2px 5px rgb(0 0 0 / 25%), -2px -2px 5px rgb(255 255 255 / 30%)",
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Paper>
              <Paper
                sx={{
                  mt: 3,
                  height: 50,
                  color: "transparent",
                  width: 350,
                  borderRadius: "10px",
                  backgroundColor: "#D9D9E6",
                }}
              >
                <Tooltip title="Edit Entry">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    sx={{ ml: 4, mt: 1, width: 250 }}
                  />
                </Tooltip>
                <Tooltip title="Delete Entry">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 0.5,
                      boxShadow:
                        "2px 2px 5px rgb(0 0 0 / 25%), -2px -2px 5px rgb(255 255 255 / 30%)",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
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
      </Box>
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
