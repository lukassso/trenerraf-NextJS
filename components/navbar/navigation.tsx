import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { navigations } from './navigation.data';
import { useRouter } from 'next/router';
import { MenuItem, Box } from '@mui/material';
import NextLink from '@/components/common/next-link';

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
      {navigations.map(({ path: destination, label, singlePage, id }) => (
        <div key={`${id}.${label}`}>
          {router.pathname === '/' ? (
            singlePage ? (
              <Box
                component={ScrollLink}
                activeClass="current"
                to={destination}
                spy={true}
                smooth={true}
                duration={350}
                onClick={onClick}
                sx={{ 
                  color: '#101010',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#0086b3',
                  }
              }}
                href={destination}
              >
                <Element >{label}</Element>
              </Box>
            ) : (
              <NextLink key={`${label}-${id}`} href={destination}>
                <Element>{label}</Element>
              </NextLink>
            )
          ) : singlePage ? (
            <NextLink key={`${destination}_${id}`} href={addRoute(destination)}>
              <Element>{label}</Element>
            </NextLink>
          ) : (
            <NextLink key={`${id}${destination}`} href={destination}>
              <Element>{label}</Element>
            </NextLink>
          )}
        </div>
      ))}
    </>
  );
};

export default Navigation;
