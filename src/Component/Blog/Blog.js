
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';

const Blog= () => {
    return (
      <Card sx={{ maxWidth: 345 }} variant="">
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">

            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
        
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    );
};

export default Blog;