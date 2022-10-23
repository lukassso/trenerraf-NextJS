import bg from '../../images/backgrounds/bckg-blog-posts.png';
import ArticleCard, { IProps } from './article-card';
import { FunctionComponent } from 'react';

const SectionAwardedBlogPost: FunctionComponent<IProps> = ({ title, description, date, author, href }) => (
  <div>
    <ArticleCard title={title} description={description} date={date} author={author} cardTeaser href={href} />
  </div>
);

export default SectionAwardedBlogPost;
