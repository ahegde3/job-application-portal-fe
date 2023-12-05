import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{}}>
      <Logo />
      <Button
        style={{ position: "absolute", right: "24px", top: "3px" }}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: "green" }} />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        style={{ marginTop: "36px" }}
      >
        <MenuItem onClick={() => navigate("/updateProfile")}>
          Update Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.removeItem("isLogged");
            navigate("/");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
