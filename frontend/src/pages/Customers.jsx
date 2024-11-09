import { Button, Drawer, Input, Paper } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DrawerComponent from '../components/DrawerComponent';
import { DeleteOutlineOutlined, MailOutlineOutlined, MenuOpen, NotificationsOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import SearchBar from '../components/SearchBar';
import { useParams } from 'react-router-dom';

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const { name } = useParams();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const fetchCustomers = async () => {
        try {
            const response = await axios.get(name ? `http://localhost:3000/customers/${name}` : `http://localhost:3000/customers`);
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, [name]);

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "email", headerName: "Email", width: 300 },
        { field: "phone", headerName: "Phone", width: 200 },
        { field: "address", headerName: "Address", width: 400 },
    ];

    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 8 });

    return (
        <>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <DrawerComponent toggleDrawer={toggleDrawer} />
            </Drawer>
            <SearchBar open={open} route="customers" toggleDrawer={toggleDrawer} />

            <Paper className="mt-10">
                <DataGrid
                    columns={columns}
                    rows={customers}
                    pageSizeOptions={[5, 10]}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    );
};

export default Customers;
