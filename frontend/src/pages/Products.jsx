import { Button, Drawer, Input, Paper } from '@mui/material'
import { Box, width } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DrawerComponent from '../components/DrawerComponent';
import { DeleteOutlineOutlined, MailOutlineOutlined, MenuOpen, NotificationsOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import SearchBar from '../components/SearchBar';
import { useParams } from 'react-router-dom';
const Products = () => {
    const [Products, setProducts] = useState([])
    const [open, setOpen] = React.useState(false);
    const { title } = useParams()
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const fetchProducts = async () =>{
        const responce = await axios.get(title ? `http://localhost:3000/Products/${title}`: "http://localhost:3000/Products");
        setProducts(responce.data);
    }
    
    React.useEffect(() => {
        fetchProducts();
    }, [title])

    const columns = [
        { field:"id", headerName:"ID", width:70},
        { field:"title", headerName:"Name", width:200},
        { field:"amount", headerName:"Amount", width:300},
        { field:"price", headerName:"Price", width:200},
        { field:"description", headerName:"Description", width:400},
    ]
    const paginationModel = { page: 0, pageSize: 8 };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent toggleDrawer={toggleDrawer}/>
      </Drawer>
      <SearchBar open={open} route={'products'} toggleDrawer={toggleDrawer}/>
    <Paper className='mt-10'>
        <DataGrid 
        columns={columns}
            rows={Products}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}>
            
        </DataGrid>
    </Paper>
    </>
  )
}

export default Products
