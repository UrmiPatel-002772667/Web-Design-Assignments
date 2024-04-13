import React from "react";
import { Box, Typography, CardMedia, CardContent, CardActionArea } from '@mui/material';
import Cards from '../Components/Card';

import people from "./People";
const About = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 0, bgcolor: '#B5E4F8'}}>
      <Typography variant="h3" component="h1" align='center' color={'#1E6F91'} padding={'20px'} gutterBottom>
        Meet Our Team
      </Typography>
        {people.map((member, index) => (
            <Cards title={member.name} >
              <CardActionArea >
                <CardContent>
                  <CardMedia component="img" height="300" image={member.photo} alt="Member Photo"/>
                  <Typography gutterBottom variant="h4"  color={'#1E6F91'} component="div">
                    {member.role}
                  </Typography>
                  <Typography variant="body2"  color={'#1E6F91'}>
                    {member.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Cards>
        ))}
    </Box>
  );
};
export default About;
