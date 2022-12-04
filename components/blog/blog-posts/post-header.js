import Avatar from '@/components/blog/components/avatar';
import Date from '@/components/common/date';
import CoverImage from '@/components/blog/components/cover-image';
import { Box } from '@mui/material';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <Box>{title}</Box>
      <div className="hidden md:block md:mb-12">{/*<Avatar name={author.name} picture={author.picture} />*/}</div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">{/*<Avatar name={author.name} picture={author.picture} />*/}</div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
