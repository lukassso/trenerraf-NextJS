import { Box, Stack } from '@mui/material';
import CustomContainer from '@/components/custom-container';
import { Link as ScrollLink } from 'react-scroll';

export default function AboutSection() {
  return (
    <CustomContainer sx={{ bgcolor: 'tomato' }} maxWidth={false}>
      <Box id="doswiadczenie" sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {' '}
          About Section
        </Stack>
      </Box>
    </CustomContainer>
  );
}
