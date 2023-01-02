import Avatar from '@/components/blog/components/avatar-component';
import Date from '@/components/common/date';
import { FunctionComponent } from 'react';
import NextLink from '@/components/common/next-link';

export interface PostPreviewProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const PostPreview: FunctionComponent<PostPreviewProps> = ({ title, date, excerpt, slug }) => {
  return (
    <div>
      <div>{/*<CoverImage slug={slug} title={title} responsiveImage={coverImage.responsiveImage} />*/}</div>
      <h3>
        <NextLink href={`/blog/${slug}`}>{title}</NextLink>
      </h3>
      <div>
        <Date dateString={date} />
      </div>
      <p>{excerpt}</p>
      {/*<Avatar name={author.name} picture={author.picture} />*/}
    </div>
  );
};

export default PostPreview;
