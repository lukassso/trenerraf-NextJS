import Date from '@/components/common/date';
import CoverImage from '@/components/blog/components/cover-image';
import { Box, Typography } from '@mui/material';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';
import { FC } from 'react';
import AvatarComponent, { AvatarComponentProps } from '@/components/blog/components/avatar-component';

export interface PostHeaderProps {
  title: string;
  date: string;
  slug: string;
}
const PostHeader: FC<PostHeaderProps & AvatarComponentProps & IBlogPostCard> = ({
  title,
  date,
  slug,
  coverImage,
  name,
  picture,
}) => {
  return (
    <>
      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} slug={slug} />
      <Typography variant="h2">{title}</Typography>
      <AvatarComponent name={name} picture={picture} />
      <Date dateString={date} />
    </>
  );
};
export default PostHeader;
