import { links } from './data';
import Link from 'next/link';

const Navbar = () => {
  const navigationList = (
    <ul>
      {links.map((link) => {
        const { id, pathname, text } = link;
        return (
          <li key={id}>
            <Link href={pathname} prefetch={false}>
              <a>{text}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header>
      <div>
        <div>
          <div>
            {/*<Link href="/" passHref>*/}
            <div>logo</div>
            {navigationList}
            {/*</Link>*/}
          </div>
          {/*{!mobile && (*/}
          {/*    <div className={styles.hamburger}>*/}
          {/*        <MenuButton*/}
          {/*            isOpen={toggleMode}*/}
          {/*            onClick={() => setToggleMode((prev) => !prev)}*/}
          {/*            strokeWidth="3"*/}
          {/*            color="#e45410"*/}
          {/*            lineProps={{ strokeLinecap: 'round' }}*/}
          {/*            transition={{ type: 'spring', stiffness: 260, damping: 20 }}*/}
          {/*            width="26"*/}
          {/*            height="24"*/}
          {/*        />*/}
          {/*    </div>*/}
          {/*)}*/}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
