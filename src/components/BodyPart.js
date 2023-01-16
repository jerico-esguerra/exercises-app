import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '0.25rem solid #FF2625', background: '#fff', borderBottomLeftRadius: '1.25rem', width: '16.875rem', height: '17.625rem', cursor: 'pointer', gap: '2.9375rem' } : { background: '#fff', borderBottomLeftRadius: '1.25rem', width: '16.875rem', height: '17.625rem', cursor: 'pointer', gap: '2.9375rem' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '2.5rem', height: '2.5rem' }} />
    <Typography fontSize="1.5rem" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
