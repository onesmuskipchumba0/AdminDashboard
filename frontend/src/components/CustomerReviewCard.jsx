import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CustomerReviewCard = () => {
    const [customers, setCustomers] = useState([])

    const fetchCustomer = async () =>{
        try{
            const response = await axios.get("http://localhost:3000/customers")
            setCustomers(response.data)
            console.log(response.data)
        } catch(e){ console.log(e)}

    }
    useEffect(() => {
        fetchCustomer()
    }, [])
  return (
    <Box>
        {customers.map(e => (
            <Typography key={e.id}>{e.name}</Typography>
        ))}
    </Box>
  )
}

export default CustomerReviewCard
