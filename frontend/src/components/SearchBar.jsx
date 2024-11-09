import React, { useState, useEffect } from 'react';
import { MenuOpen, NotificationsOutlined, MailOutlineOutlined, DeleteOutlineOutlined, SettingsOutlined, Search } from '@mui/icons-material';
import { Box, Button, Input, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ route, open, toggleDrawer }) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [searchFound, setSearchFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  // Debounce API call
  useEffect(() => {
    if (input.trim()) {
      const delayDebounceFn = setTimeout(() => {
        fetchSearch();
      }, 500); // 500ms debounce time

      return () => clearTimeout(delayDebounceFn);
    }
  }, [input]);

  const fetchSearch = async () => {
    if (!input.trim()) return; // Prevent empty search requests
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/${route}/${input}`);
      setData(response.data);
      setSearchFound(true);
      setLoading(false);
      
      switch (route) {
        case 'customers':
          navigate(`/customers/${input}`);
          break;
        case 'products':
          navigate(`/products/${input}`);
          break;
        case 'sales':
          navigate(`/sales/${input}`);
          break;
        case 'workers':
          navigate(`/workers/${input}`);
          break;
        default:
          navigate(`/`);
          break;
      }
    } catch (e) {
      console.error(e);
      setSearchFound(false);
      setLoading(false);
    }
  };

  return (
    <>
      <Box className="flex flex-row w-full items-center justify-evenly gap-3 pt-6">
        {/* Search component */}
        <Box className={`flex ${open && 'lg:ml-[18rem] md:ml-[20rem] ml-[18rem]'} ml-10 w-full items-center gap-2`}>
          <Button onClick={toggleDrawer(true)} className="text-green-400">
            <MenuOpen className="text-inherit" />
          </Button>
          <Input
            value={input}
            onChange={onChangeHandler}
            className="md:w-[60%] sm:w-[80%] lg:w-[60%] w-[70%]"
            placeholder="Search here"
          />
          <Button onClick={fetchSearch}>
            <Search className="text-slate-400" />
          </Button>
        </Box>
        <Box className="gap-4 flex ml-auto mr-10">
            <Button className='hover:ring-1 hover:shadow-md hover:ring-blue-500  transform transition-transform ease-in'>
                 <NotificationsOutlined sx={{ fontSize: 32 }} className="bg-blue-200 p-1 text-blue-500 rounded-lg" />
            </Button>
            <Button className='hover:ring-1 hover:shadow-md hover:ring-blue-500  transform transition-transform ease-in'>
                <MailOutlineOutlined sx={{ fontSize: 32 }} className="bg-blue-200 p-1 text-blue-500 rounded-lg" />
            </Button>
            <Button className='hover:ring-1 hover:shadow-md hover:ring-slate-500  transform transition-transform ease-in'>
                <DeleteOutlineOutlined sx={{ fontSize: 32 }} className="bg-slate-200 p-1 text-slate-500 rounded-lg" />
            </Button>
            <Button className='hover:ring-1 hover:shadow-md hover:ring-red-500  transform transition-transform ease-in'>
                <SettingsOutlined sx={{ fontSize: 32 }} className="bg-red-200 p-1 text-red-500 rounded-lg" />
            </Button>
        </Box>
      </Box>

      {/* Display Loading Indicator or Search Results */}
      {loading ? (
        <CircularProgress color="secondary" sx={{ marginTop: 2 }} />
      ) : searchFound && data.length > 0 ? (
        <Box mt={2}>
            <Typography variant="h6 pl-5 w-full">Your search results for '{input}'</Typography>
        </Box>
      ) : searchFound && (
        <Typography variant="body2" color="textSecondary" mt={2}>No results found for {input}</Typography>
      )}
    </>
  );
};

export default SearchBar;
