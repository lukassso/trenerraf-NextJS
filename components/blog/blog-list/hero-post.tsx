import Date from '@/components/common/date';
import CoverImage from '@/components/blog/components/cover-image';
import Link from 'next/link';
import AvatarComponent from '@/components/blog/components/avatar-component';
import Typography from '@mui/material/Typography';
import type { PostHeaderProps } from '@/components/blog/blog-posts/post-header';
import type { AvatarComponentProps } from '@/components/blog/components/avatar-component';
import { FC } from 'react';
import type { IBlogPostCard } from '@/interfaces/i-blog-post-card';

export interface HeroPostProps {
  excerpt: string;
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
