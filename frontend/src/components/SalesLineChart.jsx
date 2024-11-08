import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Box, Typography } from "@mui/material";

const SalesLineChart = () => {
  const [data, setData] = useState([]);

  // Fetch sales data from the endpoint
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/sales");
        // Format data if necessary (e.g., convert dates)
        const formattedData = response.data.map(item => ({
          date: item.date,
          total: item.total,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "100%", padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h6" component="div" gutterBottom>
        Sales Over Time
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#3f51b5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SalesLineChart;
