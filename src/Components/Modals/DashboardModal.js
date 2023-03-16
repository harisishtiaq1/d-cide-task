import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import Modal from "@mui/material/Modal";
import {
  Typography,
  Box,
  Paper,
  IconButton,
  ListItem,
  List,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

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
function DashboardModal() {
  const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
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
  );
}

export default DashboardModal;
