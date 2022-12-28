import Date from '@/components/common/date';
import CoverImage from '@/components/blog/components/cover-image';
import Link from 'next/link';
import AvatarComponent, { AvatarComponentProps } from '@/components/blog/components/avatar-component';
import { Typography } from '@mui/material';
import { PostHeaderProps } from '@/components/blog/blog-posts/post-header';
import { FC } from 'react';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';

interface HeroPostProps {
  excerpt: any;
}

const HeroPost: FC<HeroPostProps & PostHeaderProps & AvatarComponentProps & IBlogPostCard> = ({
  avatarPicture,
  coverImage,
  title,
  slug,
  date,
  name,
  excerpt,
}) => {
  return (
    <>
      <CoverImage title={title} responsiveImage={coverImage} slug={slug} />
      <div>
        <Typography variant="h3">
          <Link href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        </Typography>
        <div>
          <Date dateString={date} />
        </div>
      </div>
      <div>
        <p>{excerpt}</p>
        <AvatarComponent name={name} avatarPicture={avatarPicture} />
      </div>
    </>
  );
};

export default HeroPost;
