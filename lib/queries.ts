const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

export const BLOG_PAGE_QUERY = `
  query BlogPageQuery {
  allPosts(orderBy: title_ASC) {
    id
    title
    slug
    date
    excerpt
    author {
      id
      name
    }
  }
}
`;

export const BLOG_POST_PATH_QUERY = `
 query MyQuery {
  allPosts {
    slug
  }
 }
`;

export const ARTICLE_QUERY = `
query ArticleQuery($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    content {
      value
      links
      blocks {
        __typename
        ... on ImageBlockRecord {
          id
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000}) {
              ...responsiveImageFragment
            }
          }
        }
      }
    }
    author{
    name
    }
     seoSettings{
      description
      title
    }
    date
    id
    title
    slug
  }
  morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
  title
    id
    slug
    date
    author {
      name
    }
  }
}
${responsiveImageFragment}
`;
