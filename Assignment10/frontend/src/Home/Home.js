import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Cards from '../Components/Card'; 
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Home = () => {
  const highlights = [
    {
      title: 'Jobs Available',
      description: 'Over 10,000 active listings from tech to marketing.',
      Icon: WorkIcon,
    },
    {
      title: 'Trusted by Companies',
      description: 'More than 1,000 companies find their talent with us.',
      Icon: BusinessIcon,
    },
    {
      title: 'Successful Placements',
      description: 'Helping over 5,000 job seekers land their dream jobs.',
      Icon: ThumbUpIcon,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 3, bgcolor: '#B5E4F8'}}>
      <Typography variant="h2" component="h1" padding={'208px'} align='center' color={'#1E6F91'} gutterBottom>
      "Don't wait for right opportunity:<br/> Create It."
      </Typography>
    </Box>
  );
};
export default Home;


