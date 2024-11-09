import { Box, Typography } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const PieChartComponent = () => {
  const [sales, setSales] = React.useState([]);
  const [loadingSales, setLoadingSales] = React.useState(true);

  const fetchSales = async () => {
    try {
      const response = await axios.get('http://localhost:3000/sales');
      console.log('Fetched sales data:', response.data);  // Debugging
      setSales(response.data);
    } catch (e) {
      console.error('Error fetching sales data:', e);
    } finally {
      setLoadingSales(false);
    }
  };

  React.useEffect(() => {
    fetchSales();
  }, []);

  // Calculate total sales per product and overall total sales
  const productSalesData = sales.reduce((acc, sale) => {
    const productIndex = acc.findIndex(item => item.name === sale.productName);
    if (productIndex !== -1) {
      acc[productIndex].value += sale.total;
    } else {
      acc.push({ name: sale.productName, value: sale.total });
    }
    return acc;
  }, []);

  const totalSales = productSalesData.reduce((sum, item) => sum + item.value, 0);
  console.log('Product Sales Data:', productSalesData);  // Debugging
  console.log('Total Sales:', totalSales);  // Debugging

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <Box classname='flex flex-col items-center w-full'>
      <Typography variant="h6" className='text-center' gutterBottom>Sales Breakdown by Product</Typography>
      {!loadingSales && productSalesData.length > 0 ? (
        <>
          <PieChart width={400} height={400}>
            <Pie
              data={productSalesData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {productSalesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          <Typography className='text-center' variant="body1" style={{ marginTop: 16 }}>
            Total Sales Amount: ${totalSales.toFixed(2)}
          </Typography>
        </>
      ) : (
        <Typography variant="body1">No sales data available</Typography>
      )}
    </Box>
  );
};

export default PieChartComponent;
