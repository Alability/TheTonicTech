import * as React from 'react';
import Box from '@mui/material/Box';
import HeroSection from '../components/herosection';
import "./homepage.css"
import LatestNews from '../components/ourservices';
import Footer from '../components/footer';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, mt: 15, p: 0 }}>
      <HeroSection />
      <LatestNews />
      <Footer />
    </Box>
  );
}
