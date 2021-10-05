import { Container, Grid } from "@mui/material";
import React from "react";
import LoadDataFromExternal from "../../Hooks/LoadDataFromExternal";
import Course from "../Course/Course";

const Courses = () => {
  const [courses] = LoadDataFromExternal();
  console.log(courses);
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
      >
        {courses.map((course) => (
          <Grid item xs={2} sm={4} md={4} key={course.id}>
            <Course course={course}></Course>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
