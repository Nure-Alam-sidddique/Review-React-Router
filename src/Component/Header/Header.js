import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    textDecoration: "none",
    marginBottom: "30px",
    position: "sticky",
    top: 0,
  },
  image: {
    marginTop: "-30px",
    marginBottom: "20px",
    width: "100%",
    height: "400px"
  },
});
const Header = () => {
    const classes = useStyle();
  return (
    <div>
      <nav className={classes.root}>
        <NavLink className={classes.root} to="/home">
          Home
        </NavLink>
        <NavLink className={classes.root} to="/courses">
          Courses
        </NavLink>
        <NavLink className={classes.root} to="/blog">
          Blog
        </NavLink>
        <NavLink className={classes.root} to="/about">
          About
        </NavLink>
      </nav>
      <img
        className={classes.image}
        src= "https://image.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg"
      alt ="Banner-phot" />
    </div>
  );
};

export default Header;