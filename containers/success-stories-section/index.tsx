import CustomContainer from '@/components/custom-container';
import { Box, Stack } from '@mui/material';

export default function SuccessStoriesSection() {
  return (
    <CustomContainer sx={{ bgcolor: 'tomato' }} maxWidth={false}>
      <Box sx={{ bgcolor: '#d0a1ce', height: '25vh' }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {' '}
          Success Stories Section
        </Stack>
      </Box>
    </CustomContainer>
  );
}
