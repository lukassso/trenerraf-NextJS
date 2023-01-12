import { Image } from 'react-datocms';
import cn from 'classnames';
import NextLink from '@/components/common/next-link';
import { Box } from '@mui/material';

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      data={{
        ...responsiveImage,
        alt: `${title}`,
      }}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <Box className="sm:mx-0">
      {slug ? (
        <NextLink href={`/blog/${slug}`} aria-label={title}>
          {image}
        </NextLink>
      ) : (
        image
      )}
    </Box>
  );
}
