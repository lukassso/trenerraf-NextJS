import Layout from '@/components/common/layout';
import { getAllPostsForHome } from '@/lib/api';
const MoreStories = dynamic(() => import('@/components/blog/blog-list/more-stories'));
const HeroPost = dynamic(() => import('@/components/blog/blog-list/hero-post'));
import BoxContainer from './blog.styled';
import dynamic from 'next/dynamic';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import {
  BLOG_DESCRIPTION,
  BLOG_DESCRIPTION_OG,
  BLOG_IMAGES_URL_OG,
  BLOG_TITLE,
  BLOG_TITLE_OG,
  BLOG_URL_OG,
} from '@/lib/seo-links';

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout
        description={BLOG_DESCRIPTION}
        title={BLOG_TITLE}
        ogTitle={BLOG_TITLE_OG}
        ogDescription={BLOG_DESCRIPTION_OG}
        ogUrl={BLOG_URL_OG}
        ogImageUrl={BLOG_IMAGES_URL_OG}
      >
        <Box></Box>
        <BoxContainer component="main" maxWidth="sm" sx={{ pb: 16 }}>
          <Typography
            sx={{
              p: 4,
            }}
            component="h1"
          >
            Trener Personalny - Porady
          </Typography>
          <Box
            sx={(theme) => ({
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '85vh',
              [theme.breakpoints.down('md')]: {
                backgroundColor: theme.palette.grey[200],
                borderRadius: 4,
              },
            })}
          >
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
          </Box>
        </BoxContainer>
        <Divider />
        <Container
          sx={{
            pt: 10,
          }}
          maxWidth="sm"
        >
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
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
