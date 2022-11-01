import * as React from 'react';
import Box from '@mui/material/Box';
import HeroSection from '../components/herosection';
import "./blog.css"
import LatestNews from '../components/ourservices';
import Footer from '../components/footer';

export default function Blog() {
  return (
    <Box sx={{ flexGrow: 1, mt: 15, p: 0 }}>
      <HeroSection />
      <LatestNews />
      <Footer />
    </Box>
  );
}
