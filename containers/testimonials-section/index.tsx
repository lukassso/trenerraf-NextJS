import CustomContainer from '@/components/custom-container';
import { Box, Stack } from '@mui/material';

export default function TestimonialsSection() {
  return (
    <CustomContainer sx={{ bgcolor: 'tomato' }} maxWidth={false}>
      <Box id="opinie" sx={{ bgcolor: '#d0b5a1', height: '70vh' }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {' '}
          Testimonials Section
        </Stack>
      </Box>
    </CustomContainer>
  );
}
