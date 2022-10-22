import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import IArticle from '../components/interfaces/inteface-article';
import Layout from '../components/layout';
import { request } from '../lib/datocms';
import BlogPostCard from '../components/blog/blog-post-card';
import { BLOG_PAGE_QUERY } from '../lib/queries';
import SectionAwardedBlogPost from '../components/blog/section-awarded-blog-post';

interface IProps {
  posts: IArticle[];
}

const BlogPage: FunctionComponent<IProps> = ({ posts }) => {
  const title = 'Blog';
  const subtitle = 'subtitle blog';
  return (
    // @ts-ignore
    <Layout title={title} description={`${title} - ${subtitle}`}>
      {/*{posts.map(*/}
      {/*  (post) =>*/}
      {/*    post.awardedArticle && (*/}
      {/*      <SectionAwardedBlogPost*/}
      {/*        key={post.id}*/}
      {/*        title={post.title}*/}
      {/*        description={post.excerpt}*/}
      {/*        date={post.date}*/}
      {/*        author={post.author.name}*/}
      {/*        // labels={post.labels}*/}
      {/*        href={`/blog/${post.slug}`}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*)}*/}
      <section>
        {posts.map(
          (post) => (
            // !post.awardedArticle && (
            <BlogPostCard
              key={post.title}
              title={post.title}
              description={post.excerpt}
              date={post.date}
              author={post.author.name}
              href={`/blog/${post.slug}`}
              // labels={post.labels}
            />
          ),
          // ),
        )}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await request({
    query: BLOG_PAGE_QUERY,
    variables: null,
  });

  return {
    props: { posts: posts.allPosts },
  };
};

export default BlogPage;
