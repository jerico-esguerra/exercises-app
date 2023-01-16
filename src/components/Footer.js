import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="5rem" bgcolor="#FFF3F4">
    <Stack gap="2.5rem" sx={{ alignItems: 'center' }} flexWrap="wrap" px="2.5rem" pt="1.5rem">
      <img src={Logo} alt="logo" style={{ width: '12.5rem', height: '2.5625rem' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '1.75rem', xs: '1.25rem' } }} mt="2.5625rem" textAlign="center" pb="2.5rem">Made By Jerico Esguerra 💪</Typography>
  </Box>
);

export default Footer;
