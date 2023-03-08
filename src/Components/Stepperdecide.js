import {
  Typography,
  Box,
  Container,
  Grid,
  Tooltip,
  TextField,
  Paper,
  IconButton,
  Alert
} from "@mui/material";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import DeleteIcon from "@mui/icons-material/Delete";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LightModeIcon from "@mui/icons-material/LightMode";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import StepLabel from "@mui/material/StepLabel";
import AddIcon from "@mui/icons-material/Add";
const steps = [
  "Options and Selection Criteria",
  "Weight Criteria",
  "Rate Options",
  "Result",
];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "#0C4E80", mt: 2, ml: 3, fontSize: 30 }}>
          d-cide
        </Typography>
      </Box>
      <Tooltip title='Set Dark Theme'>
      <IconButton
        sx={{
          mr: 2,
          mt: 0.5,
          borderRadius: "50%",
          boxShadow:
            "4px 4px 7px rgb(0 0 0 / 50%), -4px -4px 7px rgb(255 255 255 / 50%)",
          position:'absolute',
          top:25,
          right:10
        }}
      >
        <DarkModeIcon />
      </IconButton>
      </Tooltip>
      <Box component="main" sx={{ width: "80%", display: "flex", ml: 10 }}>
        <Container>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Box>
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
      <IconButton
        fontSize="large"
        sx={{
          cursor: "pointer",
          backgroundColor: "#D9D9E6",
          mr: 4,
          mt: 2,
          borderRadius: "50%",
          position: "absolute",
          bottom: 30,
          right: 0,
          boxShadow:
            "2px 2px 5px rgb(0 0 0 / 25%), -2px -2px 5px rgb(255 255 255 / 30%)",
        }}
      >
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
      <Box sx={{width:400,height:'300',position:'absolute',bottom:20,right:'35%'}}>
      <Alert sx={{fontSize:'15px'}} severity="warning">At least two decision options are necessary!</Alert>
      </Box>
    </>
  );
}

export default Checkout;
