import { FunctionComponent, ReactNode } from 'react';

export interface IProps {
  title: string;
  description: string;
  date: string;
  author: string;
  cardTeaser?: boolean;
  href: string;
  children?: ReactNode;
}

const ArticleCard: FunctionComponent<IProps> = ({
  title,
  description,
  date,
  author,
  cardTeaser = true,
  href,
  children,
}) => (
  <section>
    <div>
      <div>
        <p>
          By:{' '}
          <span>
            {author} {title}
          </span>
        </p>
      </div>
      <p>|</p>
      <div>{date}</div>
    </div>
    {cardTeaser ? (
      <>
        <div>
          <p>{description}</p>
        </div>
        <div>{/*<button ref={href}>Read more</button>*/}</div>
      </>
    ) : (
      children
    )}
  </section>
);

export default ArticleCard;
