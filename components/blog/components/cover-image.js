import { Image } from 'react-datocms';
import cn from 'classnames';
import NextLink from '@/components/common/next-link';

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
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
    <div className="sm:mx-0">
      {slug ? (
        <NextLink href={`/blog/${slug}`}>
          <a aria-label={title}>{image}</a>
        </NextLink>
      ) : (
        image
      )}
    </div>
  );
}
