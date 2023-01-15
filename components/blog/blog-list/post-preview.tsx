import Avatar from '@/components/blog/components/avatar-component';
import Date from '@/components/common/date';
import { FunctionComponent } from 'react';
import NextLink from '@/components/common/next-link';
import { Box, Button, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';

export interface PostPreviewProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const PostPreview: FunctionComponent<PostPreviewProps> = ({ title, date, excerpt, slug }) => {
  return (
    <Box
      sx={(theme) => ({
        p: 4,
        pt: 6,
        mb: 3,
        [theme.breakpoints.down('md')]: {
          backgroundColor: theme.palette.grey[200],
          borderRadius: 4,
        },
      })}
    >
      {/*<CoverImage slug={slug} title={title} responsiveImage={coverImage.responsiveImage} />*/}
      <Typography variant="h3">
        <NextLink href={`/blog/${slug}`}>{title}</NextLink>
      </Typography>
      <Date dateString={date} />

      <Box
        sx={{
          py: 5,
        }}
      >
        <Typography component="p">{excerpt}</Typography>
        {/*<Avatar name={author.name} picture={author.picture} />*/}
      </Box>
      <Stack justifyContent="flex-end" flexDirection="row" sx={{ pb: 3 }}>
        <NextLink href={`/blog/${slug}`}>
          <Button
            sx={{
              maxWidth: 200,
            }}
            variant="outlined"
            size="small"
          >
            <NavigateNextIcon />
          </Button>
        </NextLink>
      </Stack>
    </Box>
  );
};

export default PostPreview;
