//type rafce to get the snippet // extension is used to get this REACT_NATIVE SNIPPET
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Avatar, Badge, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
})
const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h5'>Tours</Typography>
            <Box display={'flex'} alignItems={'center'} gap={'20px'}>
            <Badge badgeContent={9} color="error">
                <MailIcon justifyContent='space-around' color="action" />
            </Badge>
            <Badge badgeContent={3} color="error">
                <NotificationsIcon justifyContent='space-around' color="action" />
            </Badge>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300"  />

            </Box>
            
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar