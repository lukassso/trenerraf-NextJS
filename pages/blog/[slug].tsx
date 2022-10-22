import { StructuredText, Image } from 'react-datocms';
import { FunctionComponent, useContext } from 'react';
import { GetStaticProps } from 'next';
import { renderRule, isCode } from 'datocms-structured-text-utils';
// @ts-ignore
// import { gruvboxDark, gruvboxLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import IArticle from '../../components/interfaces/inteface-article';
import SectionHeader from '../../components/blog/section-header';
import ArticleCard from '../../components/blog/article-card';
import Layout from '../../components/layout';
import { request } from '../../lib/datocms';
import { ARTICLE_QUERY, BLOG_POST_PATH_QUERY } from '../../lib/queries';
import BlogPostCard from '../../components/blog/blog-post-card';

interface IPost {
  title: string;
  author: string;
  slug: string;
  date: string;
}

interface IProps {
  postData: IArticle;
  morePosts: IArticle[];
  nextPost: IPost;
  prevPost: IPost;
}

const Post: FunctionComponent<IProps> = (props) => {
  const { postData, morePosts } = props;
  const title = `Article: ${postData.seoSettings?.title}`;
  const description = postData.seoSettings?.description;

  return (
    <Layout title={title} description={description}>
      <SectionHeader>
        <ArticleCard
          title={postData.title}
          date={postData.date}
          author={postData.author.name}
          description={postData.description}
          cardTeaser={false}
          // labels={postData.labels}
          href={`/blog/${postData.slug}`}
        >
          <article>
            <StructuredText
              data={postData.content}
              renderBlock={({ record }) => {
                switch (record.__typename) {
                  case 'ImageBlockRecord':
                    let responsiveImage = (record.image as any).responsiveImage;
                    return (
                      <p>
                        <Image data={responsiveImage} />
                      </p>
                    );
                  default:
                    return null;
                }
              }}
              customNodeRules={[
                renderRule(isCode, ({ node, key }) => {
                  return (
                    <div>test</div>
                    // <SyntaxHighlighter
                    //     key={key}
                    //     style={!dark ? gruvboxLight : gruvboxDark}
                    //     language={node.language || 'unknown'}
                    //     showLineNumbers={node.code.split(/\n/).length > 100}
                    //     wrapLines
                    // >
                    //     {node.code}
                    // </SyntaxHighlighter>
                  );
                }),
              ]}
            />
          </article>
        </ArticleCard>
      </SectionHeader>
      <section>
        <h3>Read Next</h3>
        {morePosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            date={post.date}
            author={post.author.name}
            href={`/blog/${post.slug}`}
          />
        ))}
      </section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: BLOG_POST_PATH_QUERY,
    variables: null,
  });
  return {
    paths: slugQuery.allPosts?.map((post: { slug: string }) => `/blog/${post.slug}`) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await request({
    query: ARTICLE_QUERY,
    variables: { slug: params?.slug },
  });
  return {
    props: {
      postData: data.post,
      morePosts: data.morePosts,
    },
    revalidate: 120,
  };
};

export default Post;
