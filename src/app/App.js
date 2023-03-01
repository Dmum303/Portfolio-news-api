// import logo from './logo.svg';
import './App.css';
import Feed from '../feed/Feed';
import Landing from '../landing/Landing';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FONTS, COLORS } from '../theme';

import { useNavigate, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ThemeProvider theme={{ fonts: FONTS, colors: COLORS }}>
        <Routes>
          <Route path="/" element={<Landing navigate={useNavigate()} />} />
          <Route path="/feed" element={<Feed navigate={useNavigate()} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
