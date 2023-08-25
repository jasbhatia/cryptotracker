import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import './Header.css';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);


  

  return (
    <div>
      
          <IconButton onClick={()=>{setOpen(true)} }>  <MenuRoundedIcon className='link'/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>{setOpen(false)}}
      >
        <div className='drawer-div'>
           <NavLink to="/"><p className="link-drawer">Home</p></NavLink>   
              <NavLink to="/compare"><p className="link-drawer">Compare</p></NavLink>  
              <NavLink to="/watchList"><p className="link-drawer">Watchlist</p></NavLink>  
              <NavLink to="/dashboard"><p className="link-drawer">Dashboard</p></NavLink>  
        </div>



          </Drawer>
       
  
    </div>
  );
}