import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';

const Course = (props) => {
    // console.log(props.course);
  const { writerName, imageUrl, courseTitle, description, price, rating } = props.course;
    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              color="primary"
              gutterBottom
              variant="h6"
              component="div"
            >
              {courseTitle}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {writerName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Price: $ {price}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
};

export default Course;