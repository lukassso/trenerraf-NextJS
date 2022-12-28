import PostPreview from './post-preview';
import { FunctionComponent } from 'react';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';
import { PostHeaderProps } from '@/components/blog/blog-posts/post-header';
import { HeroPostProps } from '@/components/blog/blog-list/hero-post';

interface IMoreStories {
  posts: IBlogPostCard[];
}

const MoreStories: FunctionComponent<HeroPostProps & PostHeaderProps & IMoreStories> = ({ posts }) => {
  return (
    <section>
      <h2>More Stories</h2>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            coverImage={post.coverImage}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
