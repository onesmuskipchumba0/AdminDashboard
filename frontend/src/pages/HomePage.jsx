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
import SearchBar from '../components/SearchBar';

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
      <SearchBar open={open} route={"customers"} toggleDrawer={toggleDrawer}/>
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
