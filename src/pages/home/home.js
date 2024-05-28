import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './home.scss';

function Home({ changeContent }) {
  return (
    <div className="homepage">
      <Box className="card-container">
        <div
          onClick={() => changeContent('aboutme')}
          className="card-link card-lower"
        >
          <Card variant="outlined" className="card">
            <div className="card-content">
              <Typography variant="h5" component="h2" className="neon-text">
                About Me
              </Typography>
              <Typography variant="body2" component="p" className="neon-body">
                Learn more about me
              </Typography>
            </div>
            <img
              src="/home/about-me.png"
              alt="About Me"
              className="card-image"
            />
          </Card>
        </div>
        <div
          onClick={() => changeContent('gallery')}
          className="card-link card-higher"
        >
          <Card variant="outlined" className="card">
            <div className="card-content">
              <Typography variant="h5" component="h2" className="neon-text">
                Gallery
              </Typography>
              <Typography variant="body2" component="p" className="neon-body">
                View my creative stuff
              </Typography>
            </div>
            <img
              src="/home/creative.png"
              alt="Gallery"
              className="card-image"
            />
          </Card>
        </div>
      </Box>
    </div>
  );
}

Home.propTypes = {
  changeContent: PropTypes.func.isRequired,
};

export default Home;
