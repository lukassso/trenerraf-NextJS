import PostPreview from './post-preview';
import { FunctionComponent } from 'react';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';

interface IMoreStories {
  posts: IBlogPostCard[];
}

const MoreStories: FunctionComponent<IMoreStories> = ({ posts }) => {
  return (
    <section>
      <h2>More Stories</h2>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            // coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
