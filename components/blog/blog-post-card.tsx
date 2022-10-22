import Link from 'next/link';
import { FunctionComponent } from 'react';

interface IProps {
  title: string;
  description?: string;
  href: string;
  date: string;
  author: string;
}

const BlogPostCard: FunctionComponent<IProps> = ({ title, description, href, date, author }) => (
  <div>
    <div>
      <div>
        {date}
        {author}
      </div>
    </div>
    <Link href={href}>
      <a>
        <h3>{title}</h3>
      </a>
    </Link>
    <div>
      <p>{description}</p>
    </div>
    {/*<button ref={href}>Read more</button>*/}
  </div>
);

export default BlogPostCard;
