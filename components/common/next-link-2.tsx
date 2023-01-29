import { Button, ButtonProps } from '@mui/material';
import NextLink from 'next/link';

export default function NextLink2(props: ButtonProps<'a'>) {
  return <Button component={NextLink} {...props} />;
}
