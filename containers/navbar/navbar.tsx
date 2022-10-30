import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import { navigations } from './navbar.data';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar: FC = () => {
  const router = useRouter();

  const addRoute = (destination: string) => {
    const path = '/#';
    const concatStrings: string = path.concat(destination);
    console.log('concat', concatStrings);
    return concatStrings;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label, singlePage }) => (
        <>
          {router.pathname === '/' ? (
            singlePage ? (
              <Box
                component={ScrollLink}
                key={destination}
                activeClass="current"
                to={destination}
                spy={true}
                smooth={true}
                duration={350}
              >
                {label}
              </Box>
            ) : (
              <Link href={destination} prefetch={false}>
                <a>{label}</a>
              </Link>
            )
          ) : singlePage ? (
            <Link href={addRoute(destination)} prefetch={false}>
              <a>{label}</a>
            </Link>
          ) : (
            <Link href={destination} prefetch={false}>
              <a>{label}</a>
            </Link>
          )}
        </>
      ))}
    </Box>
  );
};

export default Navbar;
