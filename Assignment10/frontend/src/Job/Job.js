import React, {useEffect, useState} from 'react';
import { Box, Grid, Typography, Button, CardContent, CardActions } from '@mui/material';
import Cards from '../Components/Card';
import axios from 'axios';

const Job = () => {
  const [jobDetails, setJobDetails] = useState([]);
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/get/jobs');
        setJobDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchJobDetails();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, m:0, bgcolor:'#B5E4F8'}}>
      <Typography variant="h4" component="h1" padding={'20px'} align='center' color={'#1E6F91'}  gutterBottom>
        Jobs Listing
      </Typography>
        {jobDetails.map((job) => (
            <Cards elevation={3}> 
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {job.jobTitle}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {job.companyName}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {job.description}  
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  Salary: ${job.salary}  
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" href={job.applyLink} target="_blank">
                  Apply Now
                </Button>
              </CardActions>
            </Cards>
        ))}
    </Box>
  );
};

export default Job;
