import Avatar from '@/components/blog/components/avatar-component';
import Date from '@/components/common/date';
import CoverImage from '@/components/blog/components/cover-image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IBlogPostCard } from '@/interfaces/i-blog-post-card';
import { PostHeaderProps } from '@/components/blog/blog-posts/post-header';
import { HeroPostProps } from '@/components/blog/blog-list/hero-post';

const PostPreview: FunctionComponent<IBlogPostCard & HeroPostProps & PostHeaderProps> = ({
  title,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <div>
      <div className="mb-5">
        {/*<CoverImage slug={slug} title={title} responsiveImage={coverImage.responsiveImage} />*/}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/*<Avatar name={author.name} picture={author.picture} />*/}
    </div>
  );
};

export default PostPreview;
