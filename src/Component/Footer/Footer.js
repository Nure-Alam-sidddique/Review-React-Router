import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const footerStyle = makeStyles({
    root: {
        marginTop:"40px"
    }
})
const Footer = () => {
    const classes = footerStyle();
    return (
        <AppBar position="static" color="primary" className={classes.root}>
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="body1" color="inherit" textAlign="center">
                        &copy; 2021 Language Learning Center
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default Footer;