import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
// import PostBody from '@/components/post-body';
import Layout from '@/components/common/layout';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { Image, StructuredText } from 'react-datocms';
import { Box } from '@mui/material';
import PostHeader from '@/components/blog/blog-posts/post-header';
import MoreStories from '@/components/blog/blog-list/more-stories';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview} description="blog post description" title="blog post title">
      <div>
        {router.isFallback ? (
          <Box>Loading…</Box>
        ) : (
          <>
            <Box component="article" sx={{ mt: 24 }}>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/*<meta property="og:image" content={post.ogImage.url} />*/}
              </Head>
              <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
              {/*<PostBody content={post.content} />*/}
              <StructuredText
                data={post.content}
                renderBlock={({ record }) => {
                  switch (record.__typename) {
                    case 'ImageBlockRecord':
                      let responsiveImage = record.image.responsiveImage;
                      return (
                        <p>
                          <Image data={responsiveImage} />
                        </p>
                      );
                    default:
                      return null;
                  }
                }}
              />
            </Box>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
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
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
}
