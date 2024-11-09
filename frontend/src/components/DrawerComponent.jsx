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
import { Analytics, CalendarMonth, Close, Dashboard, GitHub, HeartBrokenSharp, HeatPumpSharp, Home, Mail, People, Star } from '@mui/icons-material';
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
        {['Dashboard', 'Products', 'Customers', 'Sales',"Workers","Calendar","Analytics"].map((text, index) => (
          <ListItem sx={{":hover":{color:'white'}}} className='hover:bg-[rgba(0,255,197)] hover:text-[rgba(0,179,119)] hover:font-bold hover:rounded-md ' key={text} disablePadding>
            <a href={`/${index === 0 ? "" : text.toLowerCase() }`}>
            <ListItemButton>
            <ListItemIcon sx={{color:'inherit'}}>
                {index === 0 && <Home/>}
                {index === 1 && <Star/>}
                {index === 2 && <Mail/>}
                {index === 3 && <InboxIcon/>}
                {index === 4 && <People/>}
                {index === 5 && <CalendarMonth/>}
                {index === 6 && <Analytics/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box className='bg-green-500 h-40 rounded-lg p-4 mt-auto gap-2 py-6 mb-6 w-full'>
          <Typography className='text-white pb-4'>Thank you for reviewing this project, please visit my github in the link below</Typography>
          <Box className='w-full bg-white text-slate-600  h-10 flex flex-col justify-center items-center rounded-lg'>
          <a  href="https://github.com/onesmuskipchumba5">
          <Button className='text-slate-500'>Github</Button>
          <GitHub className='w-24 h-24'/>
          </a>
          </Box>
      </Box>
      <Divider/>
      <Box className='mb-5 py-4'>
        <Typography variant='h6' className='text-center'>Sedap Admin <Dashboard className='ml-4 text-green-500'/></Typography>
        <Typography variant='p' className='text-center text-slate-500 text-sm'>Copyright © 2024  All rights reserved.</Typography>
      </Box>
      <Divider />
      <Box className='mb-4'>
        <Typography>Made with ❤️ by Onesmus Bett</Typography>
      </Box>
    </Box>
  );
}