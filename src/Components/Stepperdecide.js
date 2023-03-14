import { Box, Container, Tooltip, IconButton } from "@mui/material";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import "../App.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StepLabel from "@mui/material/StepLabel";
import Main from "./Dashboard";
import WeightCritertia from "./WeightCriteria";
import RateOptions from "./RateOptions";
import Result from "./Result";
const steps = [
  "Options and Selection Criteria",
  "Weight Criteria",
  "Rate Options",
  "Result",
];

function getStepContent(step, handleTrigger) {
  switch (step) {
    case 0:
      return <Main handleTrigger={handleTrigger} />;
    case 1:
      return <WeightCritertia />;
    case 2:
      return <RateOptions />;
    case 3:
      return <Result />;
    default:
      throw new Error("Unknown step");
  }
}

function Checkout() {
  const [trigger, setTrigger] = React.useState(false);
  const [Entries] = React.useState(
    JSON.parse(localStorage.getItem("Entries") || [])
  );
  const [newEntries] = React.useState(
    JSON.parse(localStorage.getItem("newEntries") || [])
  );
  React.useEffect(() => {
    localStorage.setItem("Entries", JSON.stringify(Entries));
  }, [Entries]);
  React.useEffect(() => {}, [Entries]);

  React.useEffect(() => {
    localStorage.setItem("newEntries", JSON.stringify(newEntries));
  }, [newEntries]);
  React.useEffect(() => {}, [newEntries]);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleTrigger = (value) => {
    setTrigger(value);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  console.log("trigger here: ", trigger);
  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Container>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Box>
      {activeStep <3 && trigger ? (
        <Tooltip title="Next Step">
          <IconButton
            fontSize="large"
            sx={{
              cursor: "pointer",
              backgroundColor: "lightblue",
              mr: 4,
              mt: 2,
              borderRadius: "50%",
              position: "absolute",
              bottom: 30,
              right: 0,
              boxShadow:
                "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
            }}
          >
            <ArrowForwardIcon fontSize="large" onClick={handleNext} />
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton
          fontSize="large"
          sx={{
            cursor: "pointer",
            backgroundColor: "BackgroundColor.default",
            mr: 4,
            mt: 2,
            borderRadius: "50%",
            position: "absolute",
            bottom: 30,
            right: 0,
            boxShadow:
              "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
          }}
          disabled
        >
          <ArrowForwardIcon fontSize="large" onClick={handleNext} />
        </IconButton>
      )}
      {activeStep > 0 && (
        <Tooltip title="Previous Step">
          <IconButton
            fontSize="large"
            sx={{
              cursor: "pointer",
              backgroundColor: "BackgroundColor.default",
              mr: 4,
              mt: 2,
              borderRadius: "50%",
              position: "absolute",
              bottom: 30,
              left: 20,
              boxShadow:
                "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
            }}
          >
            <ArrowBackIcon fontSize="large" onClick={handleBack} />
          </IconButton>
        </Tooltip>
      )}
      {/* <WeightCritertia/> */}
      {getStepContent(activeStep, handleTrigger)}
    </>
  );
}

export default Checkout;
