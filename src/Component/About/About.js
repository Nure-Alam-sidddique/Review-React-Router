import { Button } from '@mui/material';
import React from 'react';

const About = () => {
    return (
      <div>
        <h1>About Us</h1>
        <div>
          <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt ="img" />
        </div>
        <div>
          <h1>Achieve Your Goals With Educational</h1>
          <p>
            Lost the plot hobby such a fibber bleeding bits and bobs don't get
            shirty with me bugger all amte chinwag
          </p>
          <ul>
            <li>Upskill your Organizations</li>
            <li>Access more then 100k online courese</li>
            <li>Learn the leatest skills</li>
          </ul>
          <Button variant="outlined">Apply Now</Button>
        </div>
      </div>
    );
};

export default About;