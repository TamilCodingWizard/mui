import {
  AppBar,
  Avatar,
  Badge,
  styled,
  Toolbar,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import { NotificationsActive } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5">Tours</Typography>
        <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsActive color="action" />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
