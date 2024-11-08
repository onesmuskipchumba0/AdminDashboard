import { Tooltip } from '@mui/material'
import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const Chart = () => {
    const sampleData = [
        {
            name: 'Data 1',
            data: 200,
        },
        {
            name: 'Data 2',
            data: 100,
        },
        {
            name: 'Data 3',
            data: 300,
        },
        {
            name: 'Data 4',
            data: 150,
        }
    ]
  return (
    <LineChart width={400} height={400} data={sampleData}>
        <Line type="monotone" dataKey="data" stroke="#8884d8" />
        <CartesianGrid/>
        <XAxis  dataKey={'name'}/>
        <YAxis/>
        <Tooltip/>
  </LineChart>
  )
}

export default Chart
