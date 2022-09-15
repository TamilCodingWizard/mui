import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Accessibility,
  AirplanemodeActive,
  Explore,
  Inbox,
  Info,
  ListOutlined,
  LocalActivity,
  Place,
} from "@mui/icons-material";

const Menu = () => {
  return (
    <Box mt={2} flex={1} sx={{display:{xs:'none',sm:'block'}}}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActive />
              </ListItemIcon>
              <ListItemText primary="Plan your Trip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListOutlined />
              </ListItemIcon>
              <ListItemText primary="Things to do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Accessibility />
              </ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Place />
              </ListItemIcon>
              <ListItemText primary="Places" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivity />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Menu;
