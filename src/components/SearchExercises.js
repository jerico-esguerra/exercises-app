import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);

      console.log(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="2.313rem" justifyContent="center" p="1.25rem">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '2.75rem', xs: '1.875rem' } }} mb="3.063rem" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="4.5rem">
        <TextField
          height="4.75rem"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '0.25rem' }, width: { lg: '73.125rem', xs: '21.875rem' }, backgroundColor: '#fff', borderRadius: '2.5rem' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '10.813rem', xs: '5rem' }, height: '3.5rem', position: 'absolute', right: '0px', fontSize: { lg: '1.25rem', xs: '0.875rem' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises