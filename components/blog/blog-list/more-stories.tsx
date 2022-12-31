import PostPreview, { PostPreviewProps } from './post-preview';
import { FunctionComponent } from 'react';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';
import { PostHeaderProps } from '@/components/blog/blog-posts/post-header';
import { HeroPostProps } from '@/components/blog/blog-list/hero-post';
import { Container } from '@mui/material';

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
    <Container component="section" maxWidth="sm" sx={{ padding: 5 }}>
      <h2>More Stories</h2>
      <div>
        {posts.map((post) => (
          <PostPreview key={post.slug} title={post.title} date={post.date} slug={post.slug} excerpt={post.excerpt} />
        ))}
      </div>
    </Container>
  );
};

export default MoreStories;
