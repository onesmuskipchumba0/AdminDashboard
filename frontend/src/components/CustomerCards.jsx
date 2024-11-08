import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './CustomArrows';

const CustomerCards = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customer data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Slider {...settings} className="mt-5 px-5">
      {customers.map(customer => (
        <div key={customer.id} className="px-2">
          <Card
            className="rounded-lg ml-12 my-5 items-center hover:ring-2 hover:ring-blue-400 overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100  duration-500 ease-in-out"
            style={{
              width: '300px', // Fixed width for all cards
              height: '400px', // Fixed height for all cards
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <CardMedia
              component="img"
              image={`https://randomuser.me/api/portraits/men/${customer.id}.jpg`}
              alt={customer.name}
              className='mt-4'
              style={{ height: '150px', objectFit: 'contain' }} // Fixed image height
            />
            <CardContent style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <Typography variant="h6" className="text-gray-800 font-semibold">{customer.name}</Typography>
              <Typography variant="body2" className="text-gray-600">{customer.email}</Typography>
              <Typography variant="body2" className="text-gray-600">{customer.phone}</Typography>
              <Typography variant="body2" className="text-gray-600">{customer.address}</Typography>
              <Typography variant="body2" className="text-gray-600 mt-2">
                <strong>Loyalty Points:</strong> {customer.loyaltyPoints}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-1">{customer.notes}</Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default CustomerCards;
