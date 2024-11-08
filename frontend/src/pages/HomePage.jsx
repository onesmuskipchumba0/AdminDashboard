import * as React from 'react';
import DrawerComponent from '../components/DrawerComponent';
import { Box, Button, Drawer, Input, Typography } from '@mui/material';
import { MenuOpen, NotificationsOutlined, MailOutlineOutlined, DeleteOutlineOutlined, SettingsOutlined, Search } from '@mui/icons-material';
import CardHomeCat from '../components/CardHomeCat';
import image from '../assets/images/card/1.png';
import img_2 from '../assets/images/card/2.png';
import img_3 from '../assets/images/card/3.png';
import img_4 from '../assets/images/card/4.png';
import PieChartComponent from '../components/PieChartComponent';
import SalesChart from '../components/SalesChart';
import SalesLineChart from '../components/SalesLineChart';
import CustomerCards from '../components/CustomerCards';

export default function HomePage() {
  const [name, setName] = React.useState("John");
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent toggleDrawer={toggleDrawer}/>
      </Drawer>

      <Box className={`flex flex-row w-full items-center justify-evenly gap-3 pt-6`}>
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

      <Box className='flex flex-col mt-5 w-[80%] items-center'>
        <Typography variant='h4'>Dashboard</Typography>
        <Typography className='text-sm text-slate-500'>Hello, {name} welcome back to sedap admin</Typography>
      </Box>

      <Box className='w-full flex mt-5 justify-center'>
        <Box className="flex sm:flex-col flex-col lg:flex-row md:flex-row items-center gap-3">
          <CardHomeCat image={image} orders={75}/>
          <CardHomeCat image={img_2} orders={"23"} title={"Total delivered"}/>
          <CardHomeCat image={img_3} orders={"52"} title={"Total Canceled"}/>
          <CardHomeCat image={img_4} orders={"$128"} title={"Total Sales"}/>
        </Box>
      </Box>
      <Box className='flex w-full my-4 justify-center lg;gap-3 md:gap-7 sm:flex-col md:flex-col lg:flex-row items-center flex-col'>
        <Box className='w-1/3 flex p-5 mt-5 shadow shadow-slate-400 justify-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100  duration-500 ease-in-out' style={{ minHeight: '400px' }}>
          <PieChartComponent />
        </Box>
        
        <Box className='w-1/3 flex mt-5 shadow shadow-slate-400 justify-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100  duration-500 ease-in-out' style={{ minHeight: '400px' }}>
          <SalesChart/>
        </Box>
      </Box>
      <Box className='flex flex-row w-full justify-center items-center '>
        <Box className='w-3/4 flex  shadow shadow-slate-500 mx-3 justify-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100  duration-500 ease-in-out' style={{ minHeight: '400px' }}>
          <SalesLineChart/>
        </Box>
      </Box>
      <Box className='pt-10'>
        <Typography className='pl-16' variant='h4'>Our Starred Customers</Typography>
        <CustomerCards/>
      </Box>
    </>
  );
}
