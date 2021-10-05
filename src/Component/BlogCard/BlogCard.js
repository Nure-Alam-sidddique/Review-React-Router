import {

    Card,
    CardContent,
    CardMedia, Rating, Typography
} from "@mui/material";
import React from 'react';
const BlogCard = (props) => {
    // console.log(props.courses);
    const { courseTitle, imageUrl, website, description, rating } = props.course;
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {courseTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {website}
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
        </CardContent>
      </Card>
    );
};

export default BlogCard;


