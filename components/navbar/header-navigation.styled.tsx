import { styled } from '@mui/system';
import { MenuItem } from '@mui/material';

export const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '40px',
}));

export const BoxStyle = styled('p')(({ theme }) => ({
  display: 'flex',
  padding: '0 10px',
}));
