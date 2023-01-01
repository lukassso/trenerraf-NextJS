import Layout from '@/components/common/layout';
import { getAllPostsForHome } from '@/lib/api';
const MoreStories = dynamic(() => import('@/components/blog/blog-list/more-stories'));
const HeroPost = dynamic(() => import('@/components/blog/blog-list/hero-post'));
import BoxRoot from './blog.styled';
import dynamic from 'next/dynamic';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout
        description="Nowy rok to czas, kiedy wielu z nas postanawia zadbać o swoją kondycję lub sylwetkę. Pomogę Tobie zaplanować przyszłość i zrobić formę!"
        title="Rafał Kiszło | Trening personalny Mokotów"
      >
        <BoxRoot component="main" maxWidth="sm">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              author={heroPost.author.name}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              name={heroPost.title}
              avatarPicture={heroPost?.author?.picture.url}
              coverImage={heroPost.coverImage.responsiveImage}
              description={heroPost.description}
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
