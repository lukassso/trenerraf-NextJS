import PostPreview from './post-preview';
import { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import { SectionMainHeader } from '@/components/common/section-main-header';

type post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};
interface IMoreStories {
  posts: post[];
}

const MoreStories: FunctionComponent<IMoreStories> = ({ posts }) => {
  return (
    <>
      <SectionMainHeader sectionTitle="Więcej artykułów" />
      <Box>
        {posts.map((post) => (
          <PostPreview key={post.slug} title={post.title} date={post.date} slug={post.slug} excerpt={post.excerpt} />
        ))}
      </Box>
    </>
  );
};

export default MoreStories;
