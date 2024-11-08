import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Close, Dashboard, Home, Mail, PointOfSaleRounded, Star } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

export default function DrawerComponent({toggleDrawer}) {

  return (
    <Box sx={{ width: 250,}} className="bg-white mt-5 flex flex-1 flex-col mx-6" role="presentation">
        <div className='flex flex-row-reverse items-center mb-12 justify-center'>
        <Button onClick={toggleDrawer(false)} className=''><Close className='text-red-400'/></Button>
        <div className='flex flex-col'>
            <Typography variant='h4' className='text-center'>Sedap<Dashboard className='ml-4 text-green-500'/></Typography>
            <Typography variant='p' className='text-center text-slate-500 text-sm'>Modern Admin Dashboard</Typography>
        </div>
        </div>
      <List>
        {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem sx={{":hover":{color:'white'}}} className='hover:bg-[rgba(0,255,197)] hover:text-[rgba(0,179,119)] hover:font-bold hover:rounded-md ' key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon sx={{color:'inherit'}}>
                {index === 0 && <Home/>}
                {index === 1 && <Star/>}
                {index === 2 && <Mail/>}
                {index === 3 && <InboxIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem sx={{":hover":{color:'white'}}} className='hover:bg-[rgba(0,255,197)] hover:text-[rgba(0,179,119)] hover:font-bold hover:rounded-md ' key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:'inherit'}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText  primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}