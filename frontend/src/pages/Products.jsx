import { Button, Drawer, Input, Paper } from '@mui/material'
import { Box, width } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DrawerComponent from '../components/DrawerComponent';
import { DeleteOutlineOutlined, MailOutlineOutlined, MenuOpen, NotificationsOutlined, Search, SettingsOutlined } from '@mui/icons-material';
const Products = () => {
    const [Products, setProducts] = useState([])
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const fetchProducts = async () =>{
        const responce = await axios.get("http://localhost:3000/Products");
        setProducts(responce.data);
    }
    
    React.useEffect(() => {
        fetchProducts();
    }, [])

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

      <Box className={`flex flex-row w-full bg-white items-center justify-evenly gap-3 pt-6`}>
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
