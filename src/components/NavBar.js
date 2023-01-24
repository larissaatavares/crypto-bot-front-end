import { Box, Button, Drawer,  List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavButton = styled(Button)`
  color: black;
  padding: 20px
`;

export default function NavBar(props) {
  const [state, setState] = useState({
    left: false
  });

  const toggleDrawer = (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: !state.left });
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'turquoise',
      }}
    >
      <NavButton component={Link} to="/">Home</NavButton>
      <NavButton component={Link} to="/login">Login</NavButton>
      <NavButton component={Link} to="/register">Register</NavButton>
      <NavButton>Account</NavButton>
      <NavButton>Switch Theme</NavButton>
      <NavButton 
        key="left" 
        onClick={toggleDrawer} 
        onKeyDown={toggleDrawer}
      >
        <MenuIcon />
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer}
        >
          <Box
            sx={{ 
              bgcolor: 'darkcyan', 
              width: '100%', 
              maxWidth: 360, 
              height: '100%' 
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton 
                  sx={{ pl: '10px' }} 
                  onClick={toggleDrawer}
                >
                  <ListItemIcon>
                    <CategoryTwoToneIcon />
                  </ListItemIcon>
                  Item
                </ListItemButton>
              </ListItem>
            </List>              
          </Box>
        </Drawer>
      </NavButton>        
    </Box>
  );
}