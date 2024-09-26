import React from 'react';
import HeaderHero from './component/HeaderHero';
import Footer from './component/Footer';
import { Box } from '@mui/material'; 
import './index.css';

function App() {
  return (
    <Box sx={{ width: '100%', padding: '0 20px' }}>
      <HeaderHero />
      <Box sx={{ marginTop: '40px' }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
