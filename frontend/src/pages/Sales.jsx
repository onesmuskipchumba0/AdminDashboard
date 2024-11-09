import { Button, Drawer, Input, Paper } from '@mui/material'
import { Box, width } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DrawerComponent from '../components/DrawerComponent';
import { DeleteOutlineOutlined, MailOutlineOutlined, MenuOpen, NotificationsOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import SearchBar from '../components/SearchBar';
import { useParams } from 'react-router-dom';
const Sales = () => {
    const [sales, setSales] = useState([])
    const [open, setOpen] = React.useState(false);
    const { title } = useParams()
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const fetchSales = async () =>{
        const responce = await axios.get(title ? `http://localhost:3000/sales/${title}`:"http://localhost:3000/sales");
        setSales(responce.data);
    }
    
    React.useEffect(() => {
        fetchSales();
    }, [title])

    const columns = [
        { field:"id", headerName:"ID", width:70},
        { field:"productName", headerName:"Name", width:200},
        { field:"date", headerName:"Date", width:300},
        { field:"quantity", headerName:"Quantity", width:200},
        { field:"customerName", headerName:"Customer", width:400},
        { field:"total", headerName:"Total", width:400},
        { field:"paymentStatus", headerName:"Payment Status", width:400},
    ]
    const paginationModel = { page: 0, pageSize: 8 };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent toggleDrawer={toggleDrawer}/>
      </Drawer>
      <SearchBar open={open} route={'sales'} toggleDrawer={toggleDrawer}/>
    <Paper className='mt-10'>
        <DataGrid 
            columns={columns}
            rows={sales}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}>
            
        </DataGrid>
    </Paper>
    </>
  )
}

export default Sales
