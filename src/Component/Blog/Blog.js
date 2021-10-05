
import { Container, Grid } from "@mui/material";
import React from "react";
import LoadDataFromExternal from "../../Hooks/LoadDataFromExternal";
import BlogCard from "../BlogCard/BlogCard";

const Blog = () => {
    const [courses] = LoadDataFromExternal();
    return (
        <Container maxWidth="lg">
            <h1> Language Blog</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 3, sm: 8, md: 12 }}
        >
          {courses.slice(0,6).map((course) => (
            <Grid item xs={2} sm={4} md={4} key={course.id}>
              <BlogCard course={course}></BlogCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
};

export default Blog;