import Date from '@/components/common/date';
import CoverImage from '@/components/blog/components/cover-image';
import { Box, Container, Typography } from '@mui/material';
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
  avatarPicture,
}) => {
  return (
    <>
      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} slug={slug} />
      <Container maxWidth="sm" sx={{ padding: 5 }}>
        <Date dateString={date} />
        <AvatarComponent name={name} avatarPicture={avatarPicture} />

        <Typography variant="h2" sx={{ pt: 5 }}>
          {title}
        </Typography>
      </Container>
    </>
  );
};
export default PostHeader;
