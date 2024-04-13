import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, CardActionArea } from '@mui/material';
import axios from 'axios';
import Cards from '../Components/Card';

const Company = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/company/getAllCompanies');
        setCompanies(response.data);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth: '100%', bgcolor: '#B5E4F8'}}>
      <Typography variant="h4" component="h1"  align='center' color={'#1E6F91'} gutterBottom sx={{ mb: 4 }}>
        Company Gallery
      </Typography>
        {companies.map((company) => (
            <Cards sx={{ maxWidth: 400, m: 'auto' }}>
              <CardActionArea>
                <Box sx={{ 
                    backgroundImage: `url(http://localhost:3000/${company.imagePath})`,
                    backgroundSize: 'cover',
                    maxWidth: '700px',
                    backgroundPosition: 'center',
                    height: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '10px',
                    boxSizing: 'border-box',
                  }}>
                  <Typography variant="h6" component="h3" sx={{ color: '#fff', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                    {company.name}
                  </Typography>
                </Box>
              </CardActionArea>
            </Cards>
        ))}
    </Box>
  );
};

export default Company;