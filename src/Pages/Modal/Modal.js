import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "3px",
};

export default function ReviewModal({ openModal, handleClose,clientreview }) {
 
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style} style={{ height: "400px", overflow: "scroll" }}>
            
           
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Name:{clientreview.username} 
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Date: <spna>{ clientreview.reviewdate}</spna>
            </Typography>

            <div>
              {
                [...Array(clientreview.rating).keys()]
                  .map(() => {
                    return <StarIcon sx={{ color: "goldenrod" }} />
                  })
              }
            </div>

            <Typography>
              <span style={{ fontWeight: "bold" }}>Description: {clientreview.reviewtext}</span> 
            </Typography>
            
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
