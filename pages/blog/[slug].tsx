import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '@/components/common/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { Image, StructuredText, StructuredTextGraphQlResponse } from 'react-datocms';
import { Box, Container } from '@mui/material';
import PostHeader from '@/components/blog/blog-posts/post-header';
import MoreStories from '@/components/blog/blog-list/more-stories';
import AppLoader from '@/components/common/app-loader';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';
import { LayoutProps } from '@/interfaces/i-layout-page';
import { AvatarComponentProps } from '@/components/blog/components/avatar-component';

interface PostProps {
  post: IBlogPostCard & LayoutProps & AvatarComponentProps;
  morePosts: any;
}
export default function Post({ post, morePosts }: PostProps) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout description={post.description} title={`${post.title} - Trener personalny Mokotów Rafał Kiszło`}>
      <div>
        {router.isFallback ? (
          <AppLoader />
        ) : (
          <>
            <Box component="article" sx={{ mt: 12 }}>
              <PostHeader
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                title={post.title}
                name={post?.author?.name}
                avatarPicture={post?.author?.picture.url}
              />
              {/*<PostBody content={post.content} />*/}
              <Container maxWidth="sm" sx={{ padding: 5 }}>
                <StructuredText
                  data={post.content}
                  renderBlock={({ record }) => {
                    switch (record.__typename) {
                      case 'ImageBlockRecord':
                        // @ts-ignore
                        let responsiveImage = record?.image?.responsiveImage;
                        return (
                          <p>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image data={responsiveImage} />
                          </p>
                        );
                      default:
                        return null;
                    }
                  }}
                />
              </Container>
            </Box>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }: any) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data?.post?.content || '');

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

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post: { slug: string }) => `/blog/${post.slug}`) || [],
    fallback: true,
  };
}
