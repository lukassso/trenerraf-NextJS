import Layout from '@/components/common/layout';
import { getAllPostsForHome } from '@/lib/api';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import { BoxRoot } from './blog.styled';
import MoreStories from '@/components/blog/blog-list/more-stories';
import HeroPost from '@/components/blog/blog-list/hero-post';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout description="Blog page description" title="Blog page title">
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <BoxRoot component="main" maxWidth="sm">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </BoxRoot>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
