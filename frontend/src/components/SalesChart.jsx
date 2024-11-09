/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography, Button } from '@mui/material';
import { format, parseISO } from 'date-fns';

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch sales data from API
    axios.get('http://localhost:3000/sales')
      .then(response => {
        // Map and format the data for the chart
        const formattedData = response.data.map(item => ({
          ...item,
          date: format(parseISO(item.date), 'MMM d'),
        }));
        setSalesData(formattedData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Custom tooltip to display sales details
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{
          backgroundColor: '#ffffff',
          padding: 1,
          borderRadius: 1,
          boxShadow: 2,
        }}>
          <Typography variant="body2"><strong>{`Total: $${payload[0].value}`}</strong></Typography>
          <Typography variant="body2">{`Date: ${label}`}</Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box className='w-full' sx={{ padding: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
      <Typography variant="h6">Chart Order</Typography>
      <Typography variant="body2" color="text.secondary">
        The sales from Sedap over the last year
      </Typography>
      <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="date" />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="total" stroke="#009ef7" fill="#009ef7" fillOpacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
        <Button variant="outlined" color="primary" sx={{ textTransform: 'none' }}>
          Save Report
        </Button>
      </Box>
    </Box>
  );
};

export default SalesChart;
