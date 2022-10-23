import CustomContainer from '@/components/custom-container';
import { Box, Stack } from '@mui/material';

export default function ExperiencesSection() {
  return (
    <CustomContainer sx={{ bgcolor: 'tomato' }} maxWidth={false}>
      <Box sx={{ bgcolor: '#a1d0a3', height: '70vh' }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {' '}
          Experiences Section
        </Stack>
      </Box>
    </CustomContainer>
  );
}
