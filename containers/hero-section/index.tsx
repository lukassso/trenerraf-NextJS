import CustomContainer from '@/components/custom-container';
import { Box, Stack } from '@mui/material';

export default function HeroSection() {
  return (
    <CustomContainer sx={{ bgcolor: 'tomato' }} maxWidth={false}>
      <Box sx={{ bgcolor: '#7d9b5d', height: '30vh' }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {' '}
          Hero Section
        </Stack>
      </Box>
    </CustomContainer>
  );
}
