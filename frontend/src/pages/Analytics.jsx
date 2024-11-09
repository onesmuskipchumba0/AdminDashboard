import { Button, Drawer, Input, Paper } from '@mui/material'
import { Box, width } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DrawerComponent from '../components/DrawerComponent';
import { DeleteOutlineOutlined, MailOutlineOutlined, MenuOpen, NotificationsOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import PieChartComponent from '../components/PieChartComponent';
import SalesChart from '../components/SalesChart';
import SalesLineChart from '../components/SalesLineChart';
import SearchBar from '../components/SearchBar';
const Analytics = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
   
  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent toggleDrawer={toggleDrawer}/>
      </Drawer>

      <SearchBar open={open} route={'customers'} toggleDrawer={toggleDrawer}/>
      <Box className='flex flex-1 flex-col items-center'>
      <Box className='flex items-center py-3 shadow-sm shadow-slate-400 bg-white w-3/4 justify-center my-6'>
        <PieChartComponent/>
      </Box>
      <Box className='flex items-center shadow-sm w-[90%] shadow-slate-400 bg-white justify-center my-6'>
        <SalesChart/>
      </Box>
      <Box className='flex items-center shadow-sm shadow-slate-400 bg-white w-[90%] justify-center my-6'>
        <SalesLineChart/>
      </Box>
      </Box>
    </>
  )
}

export default Analytics
