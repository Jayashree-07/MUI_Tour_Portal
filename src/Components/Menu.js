//type rafce to get the snippet // extension is used to get this REACT_NATIVE SNIPPET

// import Inbox from '@mui/icons-material/Inbox'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import ListIcon from '@mui/icons-material/List'; 
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import InfoIcon from '@mui/icons-material/Info';

const Menu = () => {
  return (
    <Box sx={{ marginTop: 2, flex: 1, display:{xs:'none',sm:'block'}}}>
      <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ConnectingAirportsIcon />
              </ListItemIcon>
              <ListItemText primary="plan your trip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Things to do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsAccessibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Places" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Ticktes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default Menu