import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
const CardHomeCat = ({image, orders, title}) => {
  return (
    <Card className='px-3  flex-1 flex flex-col pl-5 hover:ring-2 hover:ring-green-300 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100  duration-500 ease-in-out'>
        <CardContent className='flex flex-row justify-center gap-3 items-center'>
            <img src={image} alt={title} className='bg-green-300 p-5 rounded-full w-20 h-20 object-cover'/>
            <Box className='flex flex-col'>
                <Typography variant='h4' className='font-bold'>{orders || "75"}</Typography>
                <Typography className='text-[24px]'>{title || "Total orders"}</Typography>
            </Box>
        </CardContent>
    </Card>
  )
}

export default CardHomeCat
