import { Button, Drawer, Input, Paper } from '@mui/material'
import { Box, width } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DrawerComponent from '../components/DrawerComponent';
import { DeleteOutlineOutlined, MailOutlineOutlined, MenuOpen, NotificationsOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import SearchBar from '../components/SearchBar';
import { useParams } from 'react-router-dom';
const Workers = () => {
    const [Workers, setWorkers] = useState([])
    const [open, setOpen] = React.useState(false);
    const { name } = useParams()
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const fetchWorkers = async () =>{
        const responce = await axios.get(name ? `http://localhost:3000/workers/${name}` : "http://localhost:3000/workers");
        setWorkers(responce.data);
    }
    
    React.useEffect(() => {
        fetchWorkers();
    }, [name])

    const columns = [
        { field:"id", headerName:"ID", width:70},
        { field:"name", headerName:"Name", width:200},
        { field:"email", headerName:"Email", width:300},
    ]
    const paginationModel = { page: 0, pageSize: 8 };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent toggleDrawer={toggleDrawer}/>
      </Drawer>
      <SearchBar open={open} route={'workers'} toggleDrawer={toggleDrawer}/>
    <Paper className='mt-10'>
        <DataGrid 
        columns={columns}
            rows={Workers}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}>
            
        </DataGrid>
    </Paper>
    </>
  )
}

export default Workers
