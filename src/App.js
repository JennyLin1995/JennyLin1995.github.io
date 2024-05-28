import React, { useState } from 'react';
import './App.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PageContent from './pages/page-content';

const theme = createTheme({
  typography: {
    fontFamily: ['Major Mono Display', 'monospace'].join(','),
  },
});

function App() {
  const [currentContent, setCurrentContent] = useState('home');

  const changeContent = (content) => {
    setCurrentContent(content);
  };

  const Icon = () => {
    let sizeVariance = 20 * Math.random();
    return (
      <div className="pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={20 + sizeVariance}
          height={20 + sizeVariance}
          viewBox="0 0 80 80"
        >
          <path d="M 22 8.734375 L 22 64.328125 L 36.34375 54.273438 L 45.605469 72.628906 L 54.722656 67.921875 L 45.140625 50.1875 L 63.054688 46.230469 L 61.632813 44.933594 Z M 24 13.265625 L 58.859375 45.109375 L 42.125 48.800781 L 51.996094 67.078125 L 46.480469 69.925781 L 37.089844 51.308594 L 24 60.484375 Z M 28 24 C 27.449219 24 27 24.449219 27 25 C 27 25.550781 27.449219 26 28 26 C 28.550781 26 29 25.550781 29 25 C 29 24.449219 28.550781 24 28 24 Z M 28 28 C 27.449219 28 27 28.449219 27 29 C 27 29.550781 27.449219 30 28 30 C 28.550781 30 29 29.550781 29 29 C 29 28.449219 28.550781 28 28 28 Z M 28 32 C 27.449219 32 27 32.449219 27 33 C 27 33.550781 27.449219 34 28 34 C 28.550781 34 29 33.550781 29 33 C 29 32.449219 28.550781 32 28 32 Z M 28 36 C 27.449219 36 27 36.449219 27 37 C 27 37.550781 27.449219 38 28 38 C 28.550781 38 29 37.550781 29 37 C 29 36.449219 28.550781 36 28 36 Z M 28 40 C 27.449219 40 27 40.449219 27 41 C 27 41.550781 27.449219 42 28 42 C 28.550781 42 29 41.550781 29 41 C 29 40.449219 28.550781 40 28 40 Z M 28 44 C 27.449219 44 27 44.449219 27 45 C 27 45.550781 27.449219 46 28 46 C 28.550781 46 29 45.550781 29 45 C 29 44.449219 28.550781 44 28 44 Z M 28 48 C 27.449219 48 27 48.449219 27 49 C 27 49.550781 27.449219 50 28 50 C 28.550781 50 29 49.550781 29 49 C 29 48.449219 28.550781 48 28 48 Z M 28 52 C 27.449219 52 27 52.449219 27 53 C 27 53.550781 27.449219 54 28 54 C 28.550781 54 29 53.550781 29 53 C 29 52.449219 28.550781 52 28 52 Z"></path>
        </svg>
      </div>
    );
  };

  const renderIcon = (count) => {
    let icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(<Icon key={i} />);
    }
    return icons;
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div
          className={`attention-scroll left ${currentContent !== 'aboutme' ? 'invisible' : ''}`}
        >
          {renderIcon(6)}
        </div>

        <div className="container">
          <Box className="header">
            <div
              to="/"
              className="card-link"
              onClick={() => changeContent('home')}
            >
              <Typography variant="h2" gutterBottom className="neon-text">
                Hi!
              </Typography>
            </div>
            <Typography variant="h3" gutterBottom className="neon-text">
              i Am <span className="highlight">jennifeR lindneR</span>
            </Typography>
            <Typography variant="h4" gutterBottom className="neon-text">
              a full stacK deVeloper frOm Berlin, Germany
            </Typography>
          </Box>
          <Box className="content">
            <PageContent
              currentContent={currentContent}
              changeContent={changeContent}
            />
          </Box>
        </div>
        <Box className="menu-socials">
          <div
            className={`menu-icon ${currentContent === 'home' ? 'active' : ''}`}
            onClick={() => changeContent('home')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 64 64"
            >
              <path d="M 30.996094 6.015625 C 30.933594 6.015625 30.875 6.019531 30.8125 6.03125 C 30.75 6.046875 30.6875 6.0625 30.625 6.085938 C 30.566406 6.113281 30.511719 6.144531 30.453125 6.179688 C 30.425781 6.199219 30.386719 6.207031 30.359375 6.230469 L 18 16.460938 L 18 13.058594 C 18 12.503906 17.554688 12.058594 17 12.058594 C 16.445313 12.058594 16 12.503906 16 13.058594 L 16 18.058594 C 16 18.074219 16.007813 18.089844 16.011719 18.109375 L 14 19.769531 L 14 9.054688 C 14 8.503906 13.554688 8.054688 13 8.054688 C 12.445313 8.054688 12 8.503906 12 9.054688 L 12 21.058594 C 12 21.167969 12.03125 21.273438 12.0625 21.375 L 1.359375 30.230469 C 0.933594 30.582031 0.878906 31.210938 1.226563 31.636719 C 1.425781 31.875 1.714844 32 2 32 C 2.226563 32 2.453125 31.925781 2.640625 31.769531 L 6 28.988281 L 6 54 L 3 54 C 2.445313 54 2 54.449219 2 55 C 2 55.550781 2.445313 56 3 56 L 59 56 C 59.554688 56 60 55.550781 60 55 C 60 54.449219 59.554688 54 59 54 L 56 54 L 56 28.988281 L 59.359375 31.769531 C 59.546875 31.925781 59.773438 32 60 32 C 60.285156 32 60.570313 31.875 60.769531 31.640625 C 61.121094 31.210938 61.0625 30.582031 60.636719 30.230469 L 31.636719 6.230469 C 31.609375 6.207031 31.574219 6.199219 31.542969 6.179688 C 31.484375 6.140625 31.429688 6.109375 31.363281 6.085938 C 31.304688 6.0625 31.25 6.046875 31.1875 6.03125 C 31.125 6.019531 31.0625 6.015625 30.996094 6.015625 Z M 31 8.296875 L 54 27.332031 L 54 44 L 38 44 L 38 36 C 38 34.898438 37.101563 34 36 34 L 26 34 C 24.898438 34 24 34.898438 24 36 L 24 44 L 8 44 L 8 27.332031 Z M 31 18 C 28.242188 18 26 20.242188 26 23 C 26 25.757813 28.242188 28 31 28 C 33.757813 28 36 25.757813 36 23 C 36 20.242188 33.757813 18 31 18 Z M 31 19.792969 C 32.769531 19.792969 34.207031 21.230469 34.207031 23 C 34.207031 24.769531 32.769531 26.207031 31 26.207031 C 29.230469 26.207031 27.792969 24.769531 27.792969 23 C 27.792969 21.230469 29.230469 19.792969 31 19.792969 Z M 26 36 L 36 36 L 36 53.949219 L 26 53.949219 Z M 33 43 C 32.445313 43 32 43.449219 32 44 L 32 46 C 32 46.550781 32.445313 47 33 47 C 33.554688 47 34 46.550781 34 46 L 34 44 C 34 43.449219 33.554688 43 33 43 Z M 8 46 L 24 46 L 24 54 L 8 54 Z M 38 46 L 54 46 L 54 54 L 38 54 Z M 11 48 C 10.445313 48 10 48.449219 10 49 L 10 51 C 10 51.550781 10.445313 52 11 52 C 11.554688 52 12 51.550781 12 51 L 12 49 C 12 48.449219 11.554688 48 11 48 Z M 16 48 C 15.445313 48 15 48.449219 15 49 L 15 51 C 15 51.550781 15.445313 52 16 52 C 16.554688 52 17 51.550781 17 51 L 17 49 C 17 48.449219 16.554688 48 16 48 Z M 21 48 C 20.445313 48 20 48.449219 20 49 L 20 51 C 20 51.550781 20.445313 52 21 52 C 21.554688 52 22 51.550781 22 51 L 22 49 C 22 48.449219 21.554688 48 21 48 Z M 41 48 C 40.445313 48 40 48.449219 40 49 L 40 51 C 40 51.550781 40.445313 52 41 52 C 41.554688 52 42 51.550781 42 51 L 42 49 C 42 48.449219 41.554688 48 41 48 Z M 46 48 C 45.445313 48 45 48.449219 45 49 L 45 51 C 45 51.550781 45.445313 52 46 52 C 46.554688 52 47 51.550781 47 51 L 47 49 C 47 48.449219 46.554688 48 46 48 Z M 51 48 C 50.445313 48 50 48.449219 50 49 L 50 51 C 50 51.550781 50.445313 52 51 52 C 51.554688 52 52 51.550781 52 51 L 52 49 C 52 48.449219 51.554688 48 51 48 Z"></path>
            </svg>
          </div>
          <div
            className={`menu-icon ${currentContent === 'aboutme' ? 'active' : ''}`}
            onClick={() => changeContent('aboutme')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 64 64"
            >
              <path d="M 30.824219 0 C 22.800781 0 15.976563 5.46875 14.230469 13.296875 L 11.78125 24.269531 C 11.273438 26.53125 10.375 28.65625 9.101563 30.589844 L 7.4375 33.109375 C 6.945313 33.859375 6.8125 34.78125 7.074219 35.636719 C 7.339844 36.496094 7.96875 37.191406 8.804688 37.535156 C 10.097656 38.074219 11.558594 38.570313 13.148438 39.035156 L 8.257813 41.378906 C 4.457031 43.195313 2 47.089844 2 51.300781 L 2 59 C 2 60.652344 3.347656 62 5 62 L 59 62 C 60.652344 62 62 60.652344 62 59 L 62 51.300781 C 62 47.089844 59.546875 43.195313 55.746094 41.378906 L 50.808594 39.015625 C 52.425781 38.550781 53.90625 38.058594 55.199219 37.53125 C 56.027344 37.1875 56.65625 36.503906 56.925781 35.644531 C 57.191406 34.785156 57.0625 33.859375 56.570313 33.109375 L 54.710938 30.261719 C 53.476563 28.375 52.597656 26.304688 52.09375 24.109375 L 49.824219 14.203125 C 48.136719 6.847656 41.75 1.472656 34.230469 1.042969 C 33.207031 0.359375 32.035156 0 30.824219 0 Z M 30.824219 2 C 31.707031 2 32.5625 2.285156 33.296875 2.828125 C 33.457031 2.949219 33.652344 3.019531 33.851563 3.023438 C 40.597656 3.292969 46.367188 8.074219 47.875 14.648438 L 50.144531 24.554688 C 50.703125 26.984375 51.675781 29.269531 53.035156 31.355469 L 54.894531 34.199219 C 55.0625 34.453125 55.105469 34.761719 55.015625 35.050781 C 54.964844 35.21875 54.820313 35.523438 54.4375 35.675781 C 52.652344 36.410156 50.492188 37.082031 48.03125 37.6875 L 42.484375 35.035156 C 43.550781 33.378906 44.417969 31.5625 45.015625 29.734375 C 46.242188 29.273438 47.363281 27.773438 47.898438 25.777344 C 48.214844 24.597656 48.277344 23.410156 48.078125 22.433594 C 47.828125 21.214844 47.195313 20.410156 46.296875 20.171875 C 46.171875 20.136719 46.023438 20.109375 45.855469 20.105469 C 45.746094 19.304688 45.570313 18.515625 45.328125 17.75 C 45.15625 17.222656 44.597656 16.929688 44.070313 17.097656 C 43.542969 17.265625 43.253906 17.828125 43.421875 18.355469 C 43.734375 19.347656 43.921875 20.382813 43.96875 21.433594 C 43.988281 21.789063 44.195313 22.113281 44.511719 22.277344 C 44.832031 22.4375 45.210938 22.421875 45.511719 22.222656 C 45.691406 22.109375 45.78125 22.105469 45.777344 22.105469 C 45.832031 22.121094 46.011719 22.324219 46.117188 22.832031 C 46.253906 23.503906 46.199219 24.386719 45.96875 25.261719 C 45.472656 27.101563 44.527344 27.878906 44.234375 27.878906 C 43.792969 27.878906 43.402344 28.171875 43.277344 28.59375 C 41.589844 34.261719 37.179688 40 32 40 C 26.820313 40 22.410156 34.261719 20.722656 28.59375 C 20.597656 28.171875 20.210938 27.878906 19.765625 27.878906 C 19.472656 27.878906 18.527344 27.101563 18.035156 25.261719 C 17.800781 24.386719 17.746094 23.503906 17.882813 22.832031 C 17.988281 22.324219 18.171875 22.117188 18.21875 22.105469 C 18.21875 22.105469 18.304688 22.105469 18.488281 22.222656 C 18.789063 22.417969 19.167969 22.4375 19.488281 22.277344 C 19.804688 22.113281 20.015625 21.792969 20.03125 21.433594 C 20.078125 20.390625 20.261719 19.359375 20.578125 18.371094 C 20.742188 17.84375 20.449219 17.277344 19.921875 17.113281 C 19.398438 16.941406 18.835938 17.238281 18.671875 17.765625 C 18.429688 18.53125 18.25 19.3125 18.144531 20.105469 C 17.976563 20.113281 17.832031 20.136719 17.707031 20.171875 C 16.804688 20.410156 16.171875 21.214844 15.921875 22.433594 C 15.722656 23.410156 15.789063 24.597656 16.105469 25.777344 C 16.636719 27.773438 17.761719 29.273438 18.984375 29.734375 C 19.585938 31.5625 20.449219 33.378906 21.519531 35.035156 L 15.910156 37.71875 C 13.503906 37.117188 11.367188 36.4375 9.570313 35.6875 C 9.289063 35.574219 9.074219 35.339844 8.984375 35.050781 C 8.933594 34.882813 8.882813 34.550781 9.109375 34.207031 L 10.769531 31.6875 C 12.175781 29.546875 13.175781 27.199219 13.734375 24.703125 L 16.183594 13.730469 C 17.722656 6.824219 23.746094 2 30.824219 2 Z M 26.171875 12.125 C 25.582031 12.179688 25.023438 12.496094 24.683594 13.015625 L 23.078125 15.449219 C 22.773438 15.910156 22.902344 16.53125 23.363281 16.835938 C 23.53125 16.945313 23.722656 17 23.910156 17 C 24.238281 17 24.554688 16.84375 24.75 16.550781 L 26.351563 14.117188 L 27.914063 14.878906 C 30.761719 16.269531 33.941406 17 37.113281 17 L 39.667969 17 C 40.21875 17 40.667969 16.554688 40.667969 16 C 40.667969 15.445313 40.21875 15 39.667969 15 L 37.113281 15 C 34.246094 15 31.367188 14.335938 28.792969 13.078125 L 27.226563 12.316406 C 26.886719 12.152344 26.523438 12.09375 26.171875 12.125 Z M 41.296875 36.6875 L 54.882813 43.183594 C 57.992188 44.671875 60 47.855469 60 51.300781 L 60 59 C 60 59.550781 59.550781 60 59 60 L 5 60 C 4.449219 60 4 59.550781 4 59 L 4 51.300781 C 4 47.859375 6.007813 44.667969 9.117188 43.183594 L 22.703125 36.6875 C 25.160156 39.789063 28.402344 42 32 42 C 35.597656 42 38.839844 39.789063 41.296875 36.6875 Z M 22.140625 42.011719 C 21.753906 41.953125 21.355469 42.128906 21.140625 42.484375 C 20.859375 42.960938 21.011719 43.574219 21.484375 43.859375 L 31.484375 49.859375 C 31.644531 49.953125 31.820313 50 32 50 C 32.179688 50 32.355469 49.953125 32.515625 49.859375 L 42.515625 43.859375 C 42.988281 43.574219 43.140625 42.957031 42.859375 42.484375 C 42.574219 42.011719 41.960938 41.859375 41.484375 42.140625 L 32 47.832031 L 22.515625 42.140625 C 22.398438 42.070313 22.269531 42.027344 22.140625 42.011719 Z M 32 52 C 31.449219 52 31 52.445313 31 53 L 31 57 C 31 57.554688 31.449219 58 32 58 C 32.550781 58 33 57.554688 33 57 L 33 53 C 33 52.445313 32.550781 52 32 52 Z M 7 54 C 6.449219 54 6 54.445313 6 55 L 6 57 C 6 57.554688 6.449219 58 7 58 C 7.550781 58 8 57.554688 8 57 L 8 55 C 8 54.445313 7.550781 54 7 54 Z M 12 54 C 11.449219 54 11 54.445313 11 55 L 11 57 C 11 57.554688 11.449219 58 12 58 C 12.550781 58 13 57.554688 13 57 L 13 55 C 13 54.445313 12.550781 54 12 54 Z M 17 54 C 16.449219 54 16 54.445313 16 55 L 16 57 C 16 57.554688 16.449219 58 17 58 C 17.550781 58 18 57.554688 18 57 L 18 55 C 18 54.445313 17.550781 54 17 54 Z M 22 54 C 21.449219 54 21 54.445313 21 55 L 21 57 C 21 57.554688 21.449219 58 22 58 C 22.550781 58 23 57.554688 23 57 L 23 55 C 23 54.445313 22.550781 54 22 54 Z M 27 54 C 26.449219 54 26 54.445313 26 55 L 26 57 C 26 57.554688 26.449219 58 27 58 C 27.550781 58 28 57.554688 28 57 L 28 55 C 28 54.445313 27.550781 54 27 54 Z M 37 54 C 36.449219 54 36 54.445313 36 55 L 36 57 C 36 57.554688 36.449219 58 37 58 C 37.550781 58 38 57.554688 38 57 L 38 55 C 38 54.445313 37.550781 54 37 54 Z M 42 54 C 41.449219 54 41 54.445313 41 55 L 41 57 C 41 57.554688 41.449219 58 42 58 C 42.550781 58 43 57.554688 43 57 L 43 55 C 43 54.445313 42.550781 54 42 54 Z M 47 54 C 46.449219 54 46 54.445313 46 55 L 46 57 C 46 57.554688 46.449219 58 47 58 C 47.550781 58 48 57.554688 48 57 L 48 55 C 48 54.445313 47.550781 54 47 54 Z M 52 54 C 51.449219 54 51 54.445313 51 55 L 51 57 C 51 57.554688 51.449219 58 52 58 C 52.550781 58 53 57.554688 53 57 L 53 55 C 53 54.445313 52.550781 54 52 54 Z M 57 54 C 56.449219 54 56 54.445313 56 55 L 56 57 C 56 57.554688 56.449219 58 57 58 C 57.550781 58 58 57.554688 58 57 L 58 55 C 58 54.445313 57.550781 54 57 54 Z"></path>
            </svg>
          </div>
          <div
            className={`menu-icon ${currentContent === 'gallery' ? 'active' : ''}`}
            onClick={() => changeContent('gallery')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 64 64"
            >
              <path d="M 3 8 C 1.347656 8 0 9.347656 0 11 L 0 53 C 0 54.652344 1.347656 56 3 56 L 61 56 C 62.652344 56 64 54.652344 64 53 L 64 11 C 64 9.347656 62.652344 8 61 8 Z M 3 10 L 61 10 C 61.550781 10 62 10.449219 62 11 L 62 53 C 62 53.550781 61.550781 54 61 54 L 3 54 C 2.449219 54 2 53.550781 2 53 L 2 11 C 2 10.449219 2.449219 10 3 10 Z M 17 14 C 16.398438 14 16 14.445313 16 15 L 16 17 C 16 17.550781 16.398438 18 17 18 C 17.601563 18 18 17.554688 18 17 L 18 15 C 18 14.445313 17.601563 14 17 14 Z M 11.894531 15.335938 C 11.761719 15.351563 11.628906 15.398438 11.5 15.472656 C 10.980469 15.773438 10.859375 16.359375 11.136719 16.839844 L 12.136719 18.570313 C 12.320313 18.894531 12.65625 19.074219 13 19.074219 C 13.132813 19.09375 13.328125 19.039063 13.5 18.9375 C 14.019531 18.636719 14.140625 18.050781 13.863281 17.570313 L 12.863281 15.839844 C 12.660156 15.480469 12.289063 15.285156 11.894531 15.335938 Z M 22.109375 15.339844 C 21.714844 15.285156 21.34375 15.480469 21.136719 15.839844 L 20.136719 17.574219 C 19.859375 18.050781 19.980469 18.636719 20.5 18.9375 C 20.675781 19.039063 20.871094 19.097656 21 19.074219 C 21.347656 19.074219 21.683594 18.890625 21.867188 18.574219 L 22.867188 16.839844 C 23.144531 16.359375 23.023438 15.773438 22.5 15.472656 C 22.371094 15.398438 22.238281 15.355469 22.109375 15.339844 Z M 8.464844 19 C 8.082031 18.945313 7.699219 19.113281 7.472656 19.5 C 7.171875 20.019531 7.363281 20.589844 7.839844 20.867188 L 9.570313 21.867188 C 9.730469 21.960938 9.875 22.042969 10.054688 22.03125 C 10.414063 22.007813 10.738281 21.847656 10.9375 21.5 C 11.238281 20.980469 11.050781 20.410156 10.570313 20.136719 L 8.839844 19.136719 C 8.71875 19.066406 8.59375 19.019531 8.464844 19 Z M 25.53125 19 C 25.40625 19.019531 25.28125 19.066406 25.160156 19.136719 L 23.425781 20.136719 C 22.949219 20.410156 22.761719 20.980469 23.0625 21.5 C 23.261719 21.847656 23.585938 22.007813 23.945313 22.03125 C 24.125 22.042969 24.269531 21.957031 24.425781 21.863281 L 26.160156 20.863281 C 26.640625 20.589844 26.824219 20.019531 26.527344 19.5 C 26.300781 19.109375 25.914063 18.945313 25.53125 19 Z M 17.074219 20.007813 C 14.320313 20.007813 12.082031 22.246094 12.082031 25 C 12.082031 27.753906 14.320313 29.992188 17.074219 29.992188 C 19.828125 29.992188 22.066406 27.753906 22.066406 25 C 22.066406 22.246094 19.828125 20.007813 17.074219 20.007813 Z M 17.074219 21.992188 C 18.738281 21.992188 20.082031 23.335938 20.082031 25 C 20.082031 26.664063 18.738281 28.007813 17.074219 28.007813 C 15.410156 28.007813 14.066406 26.664063 14.066406 25 C 14.066406 23.335938 15.410156 21.992188 17.074219 21.992188 Z M 7 24 C 6.445313 24 6 24.398438 6 25 C 6 25.601563 6.445313 26 7 26 L 9 26 C 9.554688 26 10 25.601563 10 25 C 10 24.398438 9.554688 24 9 24 Z M 25 24 C 24.445313 24 24 24.398438 24 25 C 24 25.601563 24.445313 26 25 26 L 27 26 C 27.554688 26 28 25.601563 28 25 C 28 24.398438 27.554688 24 27 24 Z M 9.945313 28 C 9.816406 28.019531 9.691406 28.066406 9.570313 28.136719 L 7.839844 29.136719 C 7.363281 29.410156 7.171875 29.980469 7.472656 30.5 C 7.671875 30.847656 7.996094 31.007813 8.355469 31.03125 C 8.535156 31.042969 8.679688 30.957031 8.839844 30.863281 L 10.570313 29.863281 C 11.050781 29.589844 11.238281 29.019531 10.9375 28.5 C 10.710938 28.109375 10.324219 27.945313 9.945313 28 Z M 24.054688 28 C 23.671875 27.945313 23.289063 28.113281 23.0625 28.5 C 22.761719 29.019531 22.949219 29.589844 23.425781 29.867188 L 25.160156 30.867188 C 25.320313 30.960938 25.464844 31.042969 25.640625 31.03125 C 26.003906 31.007813 26.324219 30.847656 26.527344 30.5 C 26.824219 29.980469 26.640625 29.410156 26.160156 29.136719 L 24.425781 28.136719 C 24.308594 28.066406 24.183594 28.019531 24.054688 28 Z M 13.109375 30.925781 C 12.714844 30.875 12.339844 31.070313 12.136719 31.429688 L 11.136719 33.160156 C 10.859375 33.640625 10.980469 34.226563 11.5 34.527344 C 11.675781 34.628906 11.871094 34.683594 12 34.660156 C 12.347656 34.660156 12.683594 34.480469 12.867188 34.160156 L 13.867188 32.429688 C 14.144531 31.949219 14.023438 31.363281 13.5 31.0625 C 13.371094 30.988281 13.238281 30.941406 13.109375 30.925781 Z M 20.894531 30.925781 C 20.761719 30.941406 20.628906 30.988281 20.5 31.0625 C 19.980469 31.363281 19.859375 31.949219 20.136719 32.425781 L 21.136719 34.160156 C 21.320313 34.484375 21.65625 34.660156 22 34.660156 C 22.132813 34.683594 22.328125 34.625 22.5 34.527344 C 23.019531 34.226563 23.140625 33.640625 22.863281 33.160156 L 21.863281 31.425781 C 21.660156 31.070313 21.289063 30.875 20.894531 30.925781 Z M 17 32 C 16.398438 32 16 32.445313 16 33 L 16 35 C 16 35.554688 16.398438 36 17 36 C 17.601563 36 18 35.554688 18 35 L 18 33 C 18 32.445313 17.601563 32 17 32 Z M 48 32.859375 C 47.222656 32.859375 46.445313 33.140625 45.878906 33.707031 L 39.492188 40.09375 L 36.097656 36.699219 C 35 35.597656 33 35.597656 31.902344 36.699219 L 18.597656 50 L 13.042969 50 C 12.417969 50 12 50.398438 12 51 C 12 51.601563 12.523438 52 13.042969 52 L 58.980469 52 C 59.5 52 60.023438 51.601563 60.023438 51 C 60.023438 50.398438 59.5 50 58.980469 50 L 32.414063 50 L 47.292969 35.121094 C 47.671875 34.742188 48.328125 34.742188 48.707031 35.121094 L 58.292969 44.707031 C 58.683594 45.097656 59.316406 45.097656 59.707031 44.707031 C 60.097656 44.316406 60.097656 43.683594 59.707031 43.292969 L 50.121094 33.707031 C 49.554688 33.140625 48.777344 32.859375 48 32.859375 Z M 34 37.800781 C 34.25 37.800781 34.5 37.898438 34.699219 38.097656 L 38.09375 41.492188 L 29.585938 50 L 21.402344 50 L 33.300781 38.097656 C 33.5 37.898438 33.75 37.800781 34 37.800781 Z M 5 50 C 4.398438 50 4 50.398438 4 51 C 4 51.601563 4.398438 52 5 52 L 9 52 C 9.601563 52 10 51.601563 10 51 C 10 50.398438 9.601563 50 9 50 Z"></path>
            </svg>
          </div>
          <div className="socials-icon">
            <a
              href="https://github.com/JennyLin1995.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 64 64"
              >
                <path d="M 31 2 C 15.011719 2 2 15.011719 2 31 C 2 43.648438 10.144531 54.425781 21.457031 58.378906 C 21.617188 58.492188 21.808594 58.5625 22.011719 58.566406 C 24.839844 59.492188 27.863281 60 31 60 C 46.988281 60 60 46.988281 60 31 C 60 15.011719 46.988281 2 31 2 Z M 31 4 C 45.886719 4 58 16.113281 58 31 C 58 42.660156 50.570313 52.613281 40.199219 56.386719 C 40.089844 56.0625 40 55.582031 40 55.253906 L 40 50 C 40 47.90625 38.976563 45.625 37.96875 44.09375 C 43.519531 43.15625 49.863281 40.277344 49.863281 29.53125 C 49.863281 26.585938 48.941406 23.988281 47.125 21.800781 C 47.523438 20.488281 48.015625 17.71875 46.640625 14.242188 C 46.53125 13.964844 46.300781 13.75 46.015625 13.65625 C 45.734375 13.570313 43.167969 12.902344 37.839844 16.398438 C 35.671875 15.839844 33.378906 15.550781 31 15.542969 C 28.632813 15.550781 26.335938 15.839844 24.175781 16.398438 C 18.847656 12.898438 16.273438 13.566406 15.996094 13.65625 C 15.710938 13.75 15.480469 13.964844 15.371094 14.242188 C 13.992188 17.722656 14.484375 20.488281 14.890625 21.800781 C 13.066406 23.988281 12.144531 26.585938 12.144531 29.53125 C 12.144531 40.179688 18.375 43.113281 23.878906 44.089844 C 23.1875 44.964844 22.460938 46.097656 22.140625 47.25 C 20.71875 47.644531 17.804688 47.65625 15.847656 44.304688 C 15.777344 44.175781 14.066406 41.136719 10.691406 40.902344 C 10.15625 40.90625 8.796875 40.992188 8.46875 42.03125 C 8.105469 43.183594 9.378906 44.058594 9.925781 44.429688 C 9.960938 44.453125 10.015625 44.484375 10.050781 44.503906 C 10.113281 44.535156 11.570313 45.300781 12.65625 48.035156 C 12.882813 48.75 14.871094 54.136719 22.007813 53.1875 C 22.011719 53.976563 22.007813 54.375 22 54.691406 L 22 55.25 C 22 55.574219 21.902344 56.0625 21.792969 56.378906 C 11.421875 52.605469 4 42.652344 4 31 C 4 16.113281 16.113281 4 31 4 Z M 30.757813 7.003906 C 26.859375 7.046875 23.003906 8.074219 19.609375 10.015625 C 19.128906 10.285156 18.960938 10.898438 19.234375 11.375 C 19.417969 11.699219 19.753906 11.882813 20.105469 11.882813 C 20.273438 11.882813 20.441406 11.839844 20.597656 11.75 C 24.734375 9.390625 29.617188 8.507813 34.339844 9.265625 C 34.882813 9.355469 35.394531 8.984375 35.484375 8.4375 C 35.570313 7.890625 35.199219 7.378906 34.65625 7.289063 C 33.363281 7.082031 32.058594 6.988281 30.757813 7.003906 Z M 38.65625 8.386719 C 38.269531 8.402344 37.90625 8.648438 37.765625 9.035156 C 37.570313 9.554688 37.832031 10.128906 38.351563 10.324219 C 39.0625 10.589844 39.765625 10.894531 40.453125 11.238281 C 40.597656 11.3125 40.75 11.347656 40.902344 11.347656 C 41.265625 11.347656 41.617188 11.148438 41.796875 10.796875 C 42.042969 10.308594 41.84375 9.703125 41.351563 9.453125 C 40.605469 9.078125 39.828125 8.738281 39.050781 8.449219 C 38.921875 8.402344 38.789063 8.382813 38.65625 8.386719 Z M 44.984375 15.546875 C 46.058594 18.707031 45.324219 20.996094 45.058594 21.644531 C 44.914063 22.003906 44.988281 22.414063 45.25 22.699219 C 46.980469 24.59375 47.859375 26.890625 47.859375 29.53125 C 47.859375 39.667969 41.851563 41.703125 35.96875 42.355469 C 35.574219 42.398438 35.242188 42.671875 35.125 43.050781 C 35.003906 43.429688 35.125 43.84375 35.425781 44.105469 C 36.214844 44.78125 38 47.714844 38 50 L 38 55.253906 C 38 55.273438 38.003906 56.144531 38.289063 56.992188 C 35.96875 57.644531 33.527344 58 31 58 C 28.46875 58 26.023438 57.640625 23.699219 56.988281 C 23.988281 56.136719 23.996094 55.265625 23.996094 55.25 L 24 54.714844 C 24.003906 54.261719 24.011719 53.648438 24 51.996094 C 23.996094 51.691406 23.859375 51.410156 23.625 51.21875 C 23.390625 51.03125 23.082031 50.960938 22.785156 51.023438 C 16.070313 52.488281 14.617188 47.640625 14.5625 47.4375 C 14.550781 47.402344 14.539063 47.371094 14.527344 47.335938 C 13.566406 44.898438 12.300781 43.65625 11.546875 43.09375 C 13.175781 43.667969 14.085938 45.257813 14.109375 45.292969 C 16.753906 49.820313 21.121094 49.9375 23.40625 48.914063 C 23.722656 48.773438 23.941406 48.480469 23.988281 48.140625 C 24.191406 46.710938 25.761719 44.820313 26.554688 44.125 C 26.851563 43.863281 26.96875 43.449219 26.847656 43.074219 C 26.730469 42.695313 26.402344 42.421875 26.011719 42.378906 C 20.144531 41.710938 14.144531 39.660156 14.144531 29.53125 C 14.144531 26.894531 15.023438 24.59375 16.761719 22.699219 C 17.023438 22.414063 17.097656 22.003906 16.949219 21.644531 C 16.683594 20.996094 15.945313 18.714844 17.015625 15.550781 C 17.867188 15.578125 19.941406 15.941406 23.433594 18.3125 C 23.675781 18.476563 23.984375 18.527344 24.265625 18.449219 C 26.355469 17.867188 28.6875 17.554688 31 17.542969 C 33.320313 17.554688 35.652344 17.867188 37.746094 18.449219 C 38.027344 18.527344 38.332031 18.476563 38.574219 18.3125 C 42.085938 15.929688 44.160156 15.574219 44.984375 15.546875 Z M 21.375 34.394531 C 20.984375 34.347656 20.589844 34.527344 20.386719 34.886719 L 19.386719 36.617188 C 19.109375 37.097656 19.273438 37.707031 19.75 37.984375 C 19.90625 38.074219 20.078125 38.117188 20.25 38.117188 C 20.59375 38.117188 20.929688 37.9375 21.113281 37.617188 L 22.113281 35.886719 C 22.390625 35.410156 22.230469 34.796875 21.75 34.519531 C 21.628906 34.453125 21.503906 34.410156 21.375 34.394531 Z M 40.625 34.394531 C 40.496094 34.410156 40.367188 34.453125 40.25 34.519531 C 39.769531 34.796875 39.609375 35.410156 39.886719 35.890625 L 40.886719 37.621094 C 41.070313 37.941406 41.40625 38.121094 41.75 38.121094 C 41.921875 38.121094 42.09375 38.074219 42.25 37.984375 C 42.730469 37.707031 42.890625 37.097656 42.613281 36.621094 L 41.613281 34.890625 C 41.40625 34.53125 41.011719 34.347656 40.625 34.394531 Z M 36.1875 36.34375 C 36.058594 36.324219 35.921875 36.332031 35.785156 36.371094 C 35.253906 36.511719 34.9375 37.058594 35.078125 37.59375 L 35.597656 39.527344 C 35.71875 39.972656 36.121094 40.265625 36.5625 40.265625 C 36.652344 40.265625 36.738281 40.253906 36.824219 40.234375 C 37.355469 40.089844 37.675781 39.542969 37.53125 39.007813 L 37.015625 37.078125 C 36.90625 36.675781 36.570313 36.398438 36.1875 36.34375 Z M 25.816406 36.34375 C 25.429688 36.398438 25.09375 36.675781 24.984375 37.078125 L 24.46875 39.011719 C 24.324219 39.542969 24.644531 40.089844 25.175781 40.234375 C 25.261719 40.257813 25.347656 40.265625 25.4375 40.265625 C 25.875 40.265625 26.28125 39.972656 26.402344 39.527344 L 26.921875 37.59375 C 27.0625 37.0625 26.746094 36.511719 26.214844 36.371094 C 26.078125 36.332031 25.945313 36.328125 25.816406 36.34375 Z M 31 37 C 30.445313 37 30 37.445313 30 38 L 30 40 C 30 40.554688 30.445313 41 31 41 C 31.554688 41 32 40.554688 32 40 L 32 38 C 32 37.445313 31.554688 37 31 37 Z"></path>
              </svg>
            </a>
          </div>
          <div className="socials-icon">
            <a
              href="https://www.linkedin.com/in/jennilin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 64 64"
              >
                <path d="M 13 6 C 9.140625 6 6 9.140625 6 13 L 6 51 C 6 54.859375 9.140625 58 13 58 L 51 58 C 54.859375 58 58 54.859375 58 51 L 58 13 C 58 9.140625 54.859375 6 51 6 Z M 13 8 L 51 8 C 53.757813 8 56 10.242188 56 13 L 56 51 C 56 53.757813 53.757813 56 51 56 L 13 56 C 10.242188 56 8 53.757813 8 51 L 8 13 C 8 10.242188 10.242188 8 13 8 Z M 12 12 C 11.445313 12 11 12.449219 11 13 L 11 15 C 11 15.550781 11.445313 16 12 16 C 12.554688 16 13 15.550781 13 15 L 13 13 C 13 12.449219 12.554688 12 12 12 Z M 17 12 C 16.445313 12 16 12.449219 16 13 L 16 15 C 16 15.550781 16.445313 16 17 16 C 17.554688 16 18 15.550781 18 15 L 18 13 C 18 12.449219 17.554688 12 17 12 Z M 22 12 C 21.445313 12 21 12.449219 21 13 L 21 15 C 21 15.550781 21.445313 16 22 16 C 22.554688 16 23 15.550781 23 15 L 23 13 C 23 12.449219 22.554688 12 22 12 Z M 27 12 C 26.445313 12 26 12.449219 26 13 L 26 15 C 26 15.550781 26.445313 16 27 16 C 27.554688 16 28 15.550781 28 15 L 28 13 C 28 12.449219 27.554688 12 27 12 Z M 32 12 C 31.445313 12 31 12.449219 31 13 L 31 15 C 31 15.550781 31.445313 16 32 16 C 32.554688 16 33 15.550781 33 15 L 33 13 C 33 12.449219 32.554688 12 32 12 Z M 37 12 C 36.445313 12 36 12.449219 36 13 L 36 15 C 36 15.550781 36.445313 16 37 16 C 37.554688 16 38 15.550781 38 15 L 38 13 C 38 12.449219 37.554688 12 37 12 Z M 42 12 C 41.445313 12 41 12.449219 41 13 L 41 15 C 41 15.550781 41.445313 16 42 16 C 42.554688 16 43 15.550781 43 15 L 43 13 C 43 12.449219 42.554688 12 42 12 Z M 47 12 C 46.445313 12 46 12.449219 46 13 L 46 15 C 46 15.550781 46.445313 16 47 16 C 47.554688 16 48 15.550781 48 15 L 48 13 C 48 12.449219 47.554688 12 47 12 Z M 52 12 C 51.445313 12 51 12.449219 51 13 L 51 15 C 51 15.550781 51.445313 16 52 16 C 52.554688 16 53 15.550781 53 15 L 53 13 C 53 12.449219 52.554688 12 52 12 Z M 19.5 18 C 17.019531 18 15 20.019531 15 22.5 C 15 24.980469 17.019531 27 19.5 27 C 21.980469 27 24 24.980469 24 22.5 C 24 20.019531 21.980469 18 19.5 18 Z M 19.5 19.671875 C 21.058594 19.671875 22.328125 20.941406 22.328125 22.5 C 22.328125 24.058594 21.058594 25.328125 19.5 25.328125 C 17.941406 25.328125 16.671875 24.058594 16.671875 22.5 C 16.671875 20.941406 17.941406 19.671875 19.5 19.671875 Z M 39.875 27.4375 C 37.558594 27.4375 35.726563 28.253906 34.433594 29.3125 L 34.433594 28.972656 C 34.433594 28.421875 33.988281 27.972656 33.433594 27.972656 L 27 27.972656 C 26.449219 27.972656 26 28.421875 26 28.972656 L 26 51 C 26 51.550781 26.449219 52 27 52 L 33.703125 52 C 34.257813 52 34.703125 51.550781 34.703125 51 L 34.703125 39.886719 C 34.703125 36.574219 35.523438 35.34375 37.730469 35.34375 C 39.855469 35.34375 40.214844 36.800781 40.214844 40.066406 L 40.214844 51 C 40.214844 51.550781 40.660156 52 41.214844 52 L 47.921875 52 C 48.476563 52 48.921875 51.550781 48.921875 51 L 48.921875 38.722656 C 48.925781 33.144531 47.851563 27.4375 39.875 27.4375 Z M 16 28 C 15.445313 28 15 28.449219 15 29 L 15 51 C 15 51.550781 15.445313 52 16 52 L 23 52 C 23.554688 52 24 51.550781 24 51 L 24 29 C 24 28.449219 23.554688 28 23 28 Z M 39.875 29.4375 C 45.746094 29.4375 46.925781 32.988281 46.925781 38.722656 L 46.925781 50 L 42.214844 50 L 42.214844 40.0625 C 42.214844 37.714844 42.214844 33.339844 37.730469 33.339844 C 32.703125 33.339844 32.703125 38.265625 32.703125 39.886719 L 32.703125 50 L 28 50 L 28 29.972656 L 32.4375 29.972656 L 32.4375 31.925781 C 32.4375 32.476563 32.972656 32.925781 33.527344 32.925781 C 33.898438 32.925781 34.238281 32.71875 34.410156 32.390625 C 35.128906 31.027344 36.992188 29.4375 39.875 29.4375 Z M 17 30 L 22 30 L 22 50 L 17 50 Z"></path>
              </svg>
            </a>{' '}
          </div>
          <div className="socials-icon">
            <a href="mailto:jenni.lin@web.de?subject=Contact%20Inquiry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 64 64"
              >
                <path d="M 7 8 C 4.242188 8 2 10.242188 2 13 L 2 47 C 2 49.757813 4.242188 52 7 52 L 57 52 C 59.757813 52 62 49.757813 62 47 L 62 13 C 62 10.242188 59.757813 8 57 8 Z M 8.847656 10 L 55.152344 10 L 32.585938 26.34375 C 32.234375 26.597656 31.761719 26.597656 31.410156 26.34375 Z M 5.796875 10.257813 L 30.238281 27.960938 C 30.765625 28.34375 31.382813 28.53125 32 28.53125 C 32.617188 28.53125 33.234375 28.34375 33.761719 27.960938 L 58.203125 10.257813 C 59.257813 10.722656 60 11.773438 60 13 L 60 47 C 60 48.652344 58.652344 50 57 50 L 54 50 L 54 21.792969 C 54 21.417969 53.789063 21.074219 53.453125 20.902344 C 53.121094 20.730469 52.71875 20.761719 52.414063 20.984375 L 32.585938 35.34375 C 32.234375 35.597656 31.761719 35.597656 31.410156 35.34375 L 11.589844 20.984375 C 11.285156 20.761719 10.882813 20.730469 10.546875 20.902344 C 10.210938 21.074219 10 21.417969 10 21.796875 L 10 50 L 7 50 C 5.347656 50 4 48.652344 4 47 L 4 13 C 4 11.773438 4.742188 10.722656 5.796875 10.257813 Z M 52 23.75 L 52 44 C 51.449219 44 51 44.445313 51 45 L 51 47 C 51 47.554688 51.449219 48 52 48 L 52 50 L 12 50 L 12 48 C 12.550781 48 13 47.554688 13 47 L 13 45 C 13 44.445313 12.550781 44 12 44 L 12 23.753906 L 30.238281 36.960938 C 31.292969 37.726563 32.707031 37.726563 33.761719 36.960938 Z M 17 44 C 16.449219 44 16 44.445313 16 45 L 16 47 C 16 47.554688 16.449219 48 17 48 C 17.550781 48 18 47.554688 18 47 L 18 45 C 18 44.445313 17.550781 44 17 44 Z M 22 44 C 21.449219 44 21 44.445313 21 45 L 21 47 C 21 47.554688 21.449219 48 22 48 C 22.550781 48 23 47.554688 23 47 L 23 45 C 23 44.445313 22.550781 44 22 44 Z M 27 44 C 26.449219 44 26 44.445313 26 45 L 26 47 C 26 47.554688 26.449219 48 27 48 C 27.550781 48 28 47.554688 28 47 L 28 45 C 28 44.445313 27.550781 44 27 44 Z M 32 44 C 31.449219 44 31 44.445313 31 45 L 31 47 C 31 47.554688 31.449219 48 32 48 C 32.550781 48 33 47.554688 33 47 L 33 45 C 33 44.445313 32.550781 44 32 44 Z M 37 44 C 36.449219 44 36 44.445313 36 45 L 36 47 C 36 47.554688 36.449219 48 37 48 C 37.550781 48 38 47.554688 38 47 L 38 45 C 38 44.445313 37.550781 44 37 44 Z M 42 44 C 41.449219 44 41 44.445313 41 45 L 41 47 C 41 47.554688 41.449219 48 42 48 C 42.550781 48 43 47.554688 43 47 L 43 45 C 43 44.445313 42.550781 44 42 44 Z M 47 44 C 46.449219 44 46 44.445313 46 45 L 46 47 C 46 47.554688 46.449219 48 47 48 C 47.550781 48 48 47.554688 48 47 L 48 45 C 48 44.445313 47.550781 44 47 44 Z"></path>
              </svg>
            </a>
          </div>
        </Box>
        <div
          className={`attention-scroll right ${currentContent !== 'aboutme' ? 'invisible' : ''}`}
        >
          {renderIcon(7)}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
