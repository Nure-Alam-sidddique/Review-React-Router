import { Container, Grid } from "@mui/material";
import React from "react";
import LoadDataFromExternal from "../../Hooks/LoadDataFromExternal";
import Course from "../Course/Course";

const Courses = () => {
  const [courses] = LoadDataFromExternal();
  console.log(courses);
  return (
    <Container maxWidth="lg">
      <h2>Find The Right Online Course For You</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        {courses.slice(0, 4).map((course) => (
          <Grid item xs={12} sm={6} md={3} key={course.id}>
            <Course course={course}></Course>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
