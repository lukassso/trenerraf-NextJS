import React from 'react';
import { styled, Container, SxProps } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fixed?: boolean;
  sx?: SxProps;
  // full?: boolean; // origin
};

// ----- Cell BasicStyle -----
const StyledContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.common.black,
}));

const CustomContainer = ({ children, maxWidth, fixed, sx }: Props) => {
  return (
    <>
      <StyledContainer maxWidth={maxWidth} fixed={fixed} sx={sx}>
        {children}
      </StyledContainer>
    </>
  );
};

export default CustomContainer;
