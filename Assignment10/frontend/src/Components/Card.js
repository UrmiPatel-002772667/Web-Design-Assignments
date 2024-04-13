import React from "react";
import { Card, CardContent, Typography } from '@mui/material';

const Cards = ({ title, children }) => (
  <Card style={{ maxWidth: 600, margin: 'auto', marginTop: '20px' }}>
    <CardContent>
      {title && (
        <Typography variant="h5" component="h2" style={{ marginBottom: 20 }}>
          {title}
        </Typography>
      )}
      {children}
    </CardContent>
  </Card>
);

export default Cards;

