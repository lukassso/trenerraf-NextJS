import CustomContainer from '@/components/common/custom-container';
import { Box, Stack } from '@mui/material';

export default function AskYourselfSection() {
  return (
    <CustomContainer sx={{ bgcolor: 'tomato' }} maxWidth={false}>
      <Box sx={{ bgcolor: '#d0a1ca', height: '20vh' }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {' '}
          Ask Yourself Section
        </Stack>
      </Box>
    </CustomContainer>
  );
}
