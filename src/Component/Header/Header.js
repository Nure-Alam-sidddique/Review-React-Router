import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
  root: {
    backgroundImage:
      "url('https://image.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 380,
    marginTop: "-30px",
    marginBottom: "20px",
  },
  menu: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px",
    color: "white",
    padding: "10px 30px",
    textDecoration: "none",
    marginBottom: "30px",
    position: "sticky",
    top: 0,
    fontWeight: 400,
    marginRight: "20px",
    marginTop: "20px",
    fontSize:"20px"
    
  }
});
const Header = () => {
    const classes = useStyle();
  return (
    <div className={classes.root}>
        <nav className={classes.root}>
          <NavLink className={classes.menu} to="/home">
            Home
          </NavLink>
          <NavLink className={classes.menu} to="/courses">
            Courses
          </NavLink>
          <NavLink className={classes.menu} to="/blog">
            Blog
          </NavLink>
          <NavLink className={classes.menu} to="/about">
            About
          </NavLink>
        </nav>
    </div>
  );
};

export default Header;