// src/components/CustomArrows.js
import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        right: '10px', // Position to the right
        transform: 'translateY(-50%)',
        color: 'blue', // Customize color here
        zIndex: 1,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        left: '10px', // Position to the left
        transform: 'translateY(-50%)',
        color: 'blue', // Customize color here
        zIndex: 1,
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

export { NextArrow, PrevArrow };
