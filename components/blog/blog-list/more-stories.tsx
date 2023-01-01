import PostPreview from './post-preview';
import { FunctionComponent } from 'react';
import Container from '@mui/material/Container';

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
