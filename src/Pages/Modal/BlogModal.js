import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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

export default function BlogModal({ openModal, handleClose, blogdetails }) {
 
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
          <Box sx={style} style={{ height: "500px", overflow: "scroll" }}>
            <TransformWrapper defaultScale={100}>
              <TransformComponent>
                <img
                  width="100%"
                  style={{ borderRadius: "3px" }}
                  src={blogdetails.img}
                  alt=""
                  height="250px"
                />
              </TransformComponent>
            </TransformWrapper>
           
           
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Name:{blogdetails.name}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              subtitle:{blogdetails.subtitle}
            </Typography>
            
            <Typography>
              Description:
              
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>{blogdetails.description}</span> 
            </Typography>
            
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
