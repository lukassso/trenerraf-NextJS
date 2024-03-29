import React, { forwardRef, Ref } from 'react';
import Link, { LinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

type LinkRef = HTMLAnchorElement;
type NextLinkProps = Omit<MuiLinkProps, 'href' | 'classes'> & Pick<LinkProps, 'href' | 'as' | 'prefetch'>;

const NextLink = ({ href, as, prefetch, ...props }: LinkProps, ref: Ref<LinkRef>) => (
  <Link href={href} as={as} prefetch={prefetch} passHref>
    <MuiLink
      ref={ref}
      {...props}
      sx={{
        '&:hover': {
          color: '#0086b3',
        },
      }}
    />
  </Link>
);

export default forwardRef<LinkRef, NextLinkProps>(NextLink);
