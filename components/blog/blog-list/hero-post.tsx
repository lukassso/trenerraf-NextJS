import Date from '@/components/common/date';
import CoverImage from '@/components/blog/components/cover-image';
import AvatarComponent from '@/components/blog/components/avatar-component';
import Typography from '@mui/material/Typography';
import type { PostHeaderProps } from '@/components/blog/blog-posts/post-header';
import type { AvatarComponentProps } from '@/components/blog/components/avatar-component';
import { FC } from 'react';
import type { IBlogPostCard } from '@/interfaces/i-blog-post-card';
import NextLink from '@/components/common/next-link';
import Box from '@mui/material/Box';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  return (
    <>
      <CoverImage title={title} responsiveImage={coverImage} slug={slug} />
      <Box
        sx={{
          pt: 3,
        }}
      >
        <Typography variant="h3">
          <NextLink href={`/blog/${slug}`}>{title}</NextLink>
        </Typography>
        <div>
          <AvatarComponent name={name} avatarPicture={avatarPicture} />
          <Date dateString={date} />
        </div>
      </Box>
      <div>
        <Typography>{excerpt}</Typography>
      </div>
      <Stack justifyContent="flex-end" flexDirection={!matchMobileView ? 'row' : 'column'}>
        <NextLink href={`/blog/${slug}`}>
          <Button fullWidth endIcon={<NavigateNextIcon />} variant="outlined" size="small">
            Cały artykuł
          </Button>
        </NextLink>
      </Stack>
    </>
  );
};

export default HeroPost;
