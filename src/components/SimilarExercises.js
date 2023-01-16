import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '6.25rem', xs: '0rem' } }}>
    <Typography sx={{ fontSize: { lg: '2.75rem', xs: '1.5625rem' }, ml: '1.25rem' }} fontWeight={700} color="#000" mb="2.0625rem">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '2.75rem', xs: '1.5625rem' }, ml: '1.25rem', mt: { lg: '6.25rem', xs: '3.75rem' } }} fontWeight={700} color="#000" mb="2.0625rem">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;
