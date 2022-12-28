import { parseISO, format } from 'date-fns';
import { Typography } from '@mui/material';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <Typography component="time" sx={{ fontSize: '13px' }} dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </Typography>
  );
}
