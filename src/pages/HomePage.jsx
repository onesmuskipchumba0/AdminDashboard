import * as React from 'react';
import DrawerComponent from '../components/DrawerComponent';
import { Box, Button, Container, Drawer, Input, Typography, } from '@mui/material';
import Nav from '../components/Nav';
import { Delete, DeleteOutlineOutlined, DeleteSharp, MailOutlineOutlined, MailSharp, MenuOpen, NotificationAddSharp, NotificationsOutlined, Search, SettingsOutlined, SettingsSharp } from '@mui/icons-material';
export default function HomePage() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent toggleDrawer={toggleDrawer}/>
      </Drawer>
    <Box className={`flex flex-row w-full items-center justify-evenly pt-6`}>
      <Box className={`flex w-full items-center justify-between gap-3 `}>
      {/* Search component */}
      <Box className={`flex ${open && "lg:ml-[18rem] md:ml-[20rem] ml-[18rem]"} ml-10 w-full items-center gap-2 `}>
        <Button onClick={toggleDrawer(true)} className='text-green-400'><MenuOpen className='text-inherit'/></Button>
        <Input className={`md:w-[60%] sm:w-[80%] lg:w-[60%] w-[70%]`} placeholder='Search here'/>
        <Search className='text-slate-400'/>
      </Box>
        <Box className='gap-4 flex ml-auto mr-10'>
          <NotificationsOutlined sx={{fontSize:32}} className='bg-blue-200 p-1 text-blue-500 rounded-lg'/>
          <MailOutlineOutlined sx={{fontSize:32}} className='bg-blue-200 p-1 text-blue-500 rounded-lg'/>
          <DeleteOutlineOutlined sx={{fontSize:32}} className='bg-slate-200 p-1 text-slate-500 rounded-lg'/>
          <SettingsOutlined sx={{fontSize:32}} className='bg-red-200 p-1 text-red-500 rounded-lg'/>
        </Box>
      </Box>
    </Box>
    </>
  );
}