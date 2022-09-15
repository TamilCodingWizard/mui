import React from 'react'
import { Box } from '@mui/material';
import TourCard from './TourCard';

const Content = () => {
  return (
    <Box  flex={2} padding={3}>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
    </Box>
  )
}

export default Content