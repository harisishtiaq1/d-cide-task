import { Typography, Box, Container, Grid, Tooltip } from "@mui/material";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import SvgIcon from "@mui/material/SvgIcon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LightModeIcon from "@mui/icons-material/LightMode";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import StepLabel from "@mui/material/StepLabel";
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
        <SvgIcon
          fontSize="large"
          sx={{
            cursor: "pointer",
            backgroundColor: "white",
            mr: 4,
            mt: 2,
            borderRadius: "50%",
          }}
        >
          <DarkModeIcon fontSize="large" />
        </SvgIcon>
      </Box>
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
        <Grid container spacing={2}>
          <Grid item sx={12} sm={6}>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box sx={{ display: "flex" }}>
                <Typography component="h1" variant="h5">
                  Decision Options
                </Typography>
                <Tooltip title="Show Help">
                  <SvgIcon
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      ml: 2,
                      mt: 0.5,
                    }}
                    fontSize="medium"
                  >
                    <QuestionMarkIcon />
                  </SvgIcon>
                </Tooltip>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography component="h1" variant="h5">
                  Selection Criteria
                </Typography>
                <Tooltip title="Show Help">
                  <SvgIcon
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      ml: 2,
                      mt: 0.5,
                    }}
                    fontSize="medium"
                  >
                    <QuestionMarkIcon />
                  </SvgIcon>
                </Tooltip>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SvgIcon
        fontSize="large"
        sx={{
          cursor: "pointer",
          backgroundColor: "white",
          mr: 4,
          mt: 2,
          borderRadius: "50%",
          position: "absolute",
          bottom: 30,
          right: 0,
        }}
      >
        <ArrowForwardIcon fontSize="large" />
      </SvgIcon>
    </>
  );
}

export default Checkout;
