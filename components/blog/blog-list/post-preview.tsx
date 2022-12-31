import Avatar from '@/components/blog/components/avatar-component';
import Date from '@/components/common/date';
import Link from 'next/link';
import { FunctionComponent } from 'react';

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
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
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
