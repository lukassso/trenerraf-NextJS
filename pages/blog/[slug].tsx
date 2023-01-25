import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '@/components/common/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api';
import { Image, StructuredText } from 'react-datocms';
import { Box, Container } from '@mui/material';
import PostHeader from '@/components/blog/blog-posts/post-header';
const MoreStories = dynamic(() => import('@/components/blog/blog-list/more-stories'));
import AppLoader from '@/components/common/app-loader';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';
import { AvatarComponentProps } from '@/components/blog/components/avatar-component';
import dynamic from 'next/dynamic';
import Divider from '@mui/material/Divider';
import {
  BLOG_IMAGES_URL_OG,
  INDEX_DESCRIPTION_OG,
  INDEX_IMAGES_URL_OG,
  INDEX_TITLE_OG,
  INDEX_URL_OG,
} from '@/lib/seo-links';
import { ArticleJsonLd } from 'next-seo';
import { PAGE_URL } from '@/lib/constants';

interface PostProps {
  post: IBlogPostCard & AvatarComponentProps;
  morePosts: any;
}
export default function Post({ post, morePosts }: PostProps) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      description={post.seoSettings.description}
      title={`Porady | ${post.seoSettings.title}`}
      ogUrl={`${PAGE_URL}/blog/${post.slug}`}
      ogImageUrl={post.ogImage.url}
      ogTitle={`Porady | ${post.seoSettings.title}`}
      ogDescription={post.seoSettings.description}
    >
      <ArticleJsonLd
        type="Article"
        url={`${PAGE_URL}/blog/${post.slug}`}
        title={`Porady | ${post.seoSettings.title}`}
        images={[post.ogImage.url]}
        datePublished={post.date}
        // dateModified="2015-02-05T09:00:00+08:00"
        authorName={post?.author?.name}
        description={post.excerpt}
      />
      <Box>
        {router.isFallback ? (
          <AppLoader />
        ) : (
          <>
            <Box component="article" sx={{ mt: 12 }}>
              <PostHeader
                image={post.coverImage.responsiveImage}
                date={post.date}
                slug={post.slug}
                title={post.seoSettings.title}
                name={post?.author?.name}
                avatarPicture={post?.author?.picture.url}
              />
              <Container maxWidth="sm" sx={{ padding: 5 }}>
                <StructuredText
                  data={post.content}
                  renderBlock={({ record }) => {
                    switch (record.__typename) {
                      case 'ImageBlockRecord':
                        // @ts-ignore
                        let responsiveImage = record?.image?.responsiveImage;
                        return (
                          <>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image data={{ ...responsiveImage, alt: post.name }} />;
                          </>
                        );
                      default:
                        return null;
                    }
                  }}
                />
              </Container>
            </Box>
            <Divider />
            <Container
              sx={{
                pt: 10,
              }}
              maxWidth="sm"
            >
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
          </>
        )}
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post: { slug: string }) => `/blog/${post.slug}`) || [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const data = await getPostAndMorePosts(params.slug, preview);
  // const content = await markdownToHtml(data?.post?.content || '');

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        // content,
      },
      morePosts: data?.morePosts ?? [],
    },
  };
}
