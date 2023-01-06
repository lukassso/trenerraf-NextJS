import Layout from '@/components/common/layout';
import { getAllPostsForHome } from '@/lib/api';
const MoreStories = dynamic(() => import('@/components/blog/blog-list/more-stories'));
const HeroPost = dynamic(() => import('@/components/blog/blog-list/hero-post'));
import BoxContainer from './blog.styled';
import dynamic from 'next/dynamic';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { PAGE_URL } from '@/lib/constants';
import { NextSeo } from 'next-seo';

export const BLOG_DESCRIPTION =
  'Nowy rok to czas, kiedy wielu z nas postanawia zadbać o swoją kondycję lub sylwetkę. Pomogę Tobie zaplanować przyszłość i zrobić formę!';
export const BLOG_TITLE = 'Porady | Rafał Kiszło | Trener personalny Mokotów';
export const BLOG_TITLE_OG = 'Rafał Kiszło | Trener Personalny';
export const BLOG_DESCRIPTION_OG =
  'Jak słusznie zauważyli podopieczni Rafała Kiszło, samo posiadanie wiedzy nie sprawi, że osiągniesz wyznaczony cel. Pokażę Ci jak poprawić sylwetkę i osiągnąć sukces.';
export const BLOG_IMAGES_URL_OG = 'https://trenerrafal.pl/trener-rafal-og-porady.png';
export const BLOG_URL_OG = `${PAGE_URL}/blog`;

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
        {/*<NextSeo*/}
        {/*  openGraph={{*/}
        {/*    type: 'website',*/}
        {/*    url: `${PAGE_URL}/blog`,*/}
        {/*    title: allPosts[0].seoSettings.title,*/}
        {/*    description: allPosts[0].seoSettings.description,*/}
        {/*    images: [*/}
        {/*      {*/}
        {/*        url: 'https://trenerrafal.pl/trener-rafal-og-porady.png',*/}
        {/*        width: 1200,*/}
        {/*        height: 630,*/}
        {/*        alt: 'Trener personalny Rafał Kiszło',*/}
        {/*      },*/}
        {/*    ],*/}
        {/*  }}*/}
        {/*/>*/}
        <BoxContainer component="main" maxWidth="sm">
          <Box
            sx={(theme) => ({
              padding: 4,

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

export async function getServerSideProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
