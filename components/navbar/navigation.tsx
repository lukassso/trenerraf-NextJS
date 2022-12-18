import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { navigations } from './navigation.data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItem, Box } from '@mui/material';

const Navigation: ({ Element, onClick }: { Element: any; onClick?: () => void }) => JSX.Element = ({
  Element = MenuItem,
  onClick,
}) => {
  const router = useRouter();

  const addRoute = (destination: string) => {
    const path = '/#';
    const concatStrings: string = path.concat(destination);
    // console.log('concat', concatStrings);
    return concatStrings;
  };

  return (
    <>
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
                onClick={onClick}
                sx={{ cursor: 'pointer' }}
              >
                <Element>{label}</Element>
              </Box>
            ) : (
              <Link href={destination}>
                <Box component="a">
                  <Element>{label}</Element>
                </Box>
              </Link>
            )
          ) : singlePage ? (
            <Link href={addRoute(destination)}>
              <Box component="a">
                <Element>{label}</Element>
              </Box>
            </Link>
          ) : (
            <Link href={destination}>
              <Box component="a">
                <Element>{label}</Element>
              </Box>
            </Link>
          )}
        </>
      ))}
    </>
  );
};

export default Navigation;
