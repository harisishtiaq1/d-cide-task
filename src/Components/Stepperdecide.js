import { Box, Container, IconButton } from "@mui/material";
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

function Stepperdecide() {
  const [trigger, setTrigger] = React.useState(false);
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
            sx={{
              pt: 3,
              pb: 5,
              "& .MuiStepIcon-root": {
                boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.4)",
                color: "#686870",
                display: "block",
                borderRadius: "50%",
              },
              "& .MuiStepIcon-root.MuiStepIcon-active": {
                color: "#0c4e80",
              },
              "& .MuiStepIcon-root.MuiStepIcon-completed": {
                color: "#0c4e80",
                background: "white",
                borderRadius: "50%",
              },
              "& .MuiStepIcon-text": {
                fill: "#fafafa",
                fontSize: "14px",
                fontFamily: "Quicksand,Calibri,sans-serif",
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Box>
      {trigger ? (
        <LightTooltip title="Next Step">
          <IconButton
            fontSize="large"
            sx={{
              cursor: "pointer",
              backgroundColor: "#0c4e80",
              mr: 4,
              mt: 2,
              borderRadius: "50%",
              position: "absolute",
              bottom: 30,
              right: 0,
              boxShadow:
                "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
              "&:hover": {
                backgroundColor: "#0c4e80",
              },
              display: activeStep < 3 ? "" : "none",
            }}
          >
            <ArrowForwardIcon
              sx={{ color: "white" }}
              fontSize="large"
              onClick={handleNext}
            />
          </IconButton>
        </LightTooltip>
      ) : (
        <IconButton
          fontSize="large"
          sx={{
            cursor: "pointer",
            backgroundColor: "#0c4e80",
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
          <ArrowForwardIcon
            sx={{ color: "white" }}
            fontSize="large"
            onClick={handleNext}
          />
        </IconButton>
      )}
      {activeStep > 0 && (
        <LightTooltip title="Previous Step">
          <IconButton
            fontSize="large"
            sx={{
              cursor: "pointer",
              backgroundColor: "#0c4e80",
              mr: 4,
              mt: 2,
              borderRadius: "50%",
              position: "absolute",
              bottom: 30,
              left: 20,
              boxShadow:
                "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
              "&:hover": {
                backgroundColor: "#0c4e80",
              },
            }}
          >
            <ArrowBackIcon
              sx={{ color: "white" }}
              fontSize="large"
              onClick={handleBack}
            />
          </IconButton>
        </LightTooltip>
      )}
      {getStepContent(activeStep, handleTrigger)}
    </>
  );
}

export default Stepperdecide;
