import Date from '@/components/common/date';
import CoverImage from '@/components/blog/components/cover-image';
import { Container, Typography } from '@mui/material';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';
import { FC } from 'react';
import AvatarComponent, { AvatarComponentProps } from '@/components/blog/components/avatar-component';
import { Image } from 'react-datocms';

export interface PostHeaderProps {
  image: any;
  title: string;
  date: string;
  slug: string;
}
const PostHeader: FC<PostHeaderProps & AvatarComponentProps> = ({ title, date, image, slug, name, avatarPicture }) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        data={{
          ...image,
          alt: `Cover Image for ${title}`,
        }}
      />
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
