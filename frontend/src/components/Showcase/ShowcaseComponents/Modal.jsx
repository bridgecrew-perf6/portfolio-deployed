import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({fullscreen, setFullscreen }) {

  const {open, url} = fullscreen

  const handleClose = () => {
    setFullscreen({open: false});
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Button  color="inherit" href={url} target="_blank" >
              Open In new Tab
            </Button>
          </Toolbar>
        </AppBar>
        <iframe
        title="screeshot of the webpage"
          src={url}
          width="100%"
          height="100%"
          style={{border: 'none'}}
       />
      </Dialog>
    </div>
  );
}
