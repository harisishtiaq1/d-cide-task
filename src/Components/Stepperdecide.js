import { Box, Container, Tooltip, IconButton } from "@mui/material";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import LightModeIcon from "@mui/icons-material/LightMode";
import StepLabel from "@mui/material/StepLabel";
import Main from "./Main";
import WeightCritertia from "./WeightCritertia";
const steps = [
  "Options and Selection Criteria",
  "Weight Criteria",
  "Rate Options",
  "Result",
];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <WeightCritertia/>;
//     default:
//       throw new Error("Unknown step");
//   }
// }

function Checkout() {
  const [activeStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep(activeStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  return (
    <>
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
      <Tooltip title="Next Step">
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
      </Tooltip>
      {/* <WeightCritertia/> */}
      <Main />
    </>
  );
}

export default Checkout;
