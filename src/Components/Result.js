import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
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
function Result() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Container>
      <Box
        sx-={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "space-between",
        }}
      >
        <Grid container spacing={5}>
          <Grid item sx={12}>
            <Paper
              sx={{
                mt: 3,
                height: 300,
                color: "transparent",
                width: 500,
                borderRadius: "10px",
                backgroundColor: "backgroundColor.paper"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ color: "color.default", mt: 4 }}
                  component="h1"
                  variant="h5"
                >
                  Decision Options Ranking
                </Typography>
                <Tooltip title="Show Help">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 4,
                      backgroundColor: "backgroundColor.default",
                      boxShadow:
                        "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
                    }}
                  >
                    <QuestionMarkIcon onClick={handleOpen} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Paper>
          </Grid>
          <Grid item sx={12}>
            <Paper
              sx={{
                mt: 3,
                height: 300,
                color: "transparent",
                width: 500,
                borderRadius: "10px",
                backgroundColor: "backgroundColor.paper"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ color: "color.default", mt: 4 }}
                  component="h1"
                  variant="h5"
                >
                  Selection Criteria Ranking
                </Typography>
                <Tooltip title="Show Help">
                  <IconButton
                    sx={{
                      ml: 2,
                      mt: 4,
                      backgroundColor: "backgroundColor.default",
                      boxShadow:
                        "3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 5%)",
                    }}
                  >
                    <QuestionMarkIcon onClick={handleOpen} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Paper>
          </Grid>
        </Grid>
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
           Weight Criteria
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

export default Result;
