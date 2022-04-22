import NavProps from './Nav.interface';

import NavProvider from './NavProvider';

import styles from './Nav.module.scss';

const Nav: React.FC<NavProps> = ({ children }) => {
  return (
    <NavProvider>
      <nav className={styles.nav}>
        <ul className={styles.items}>{children}</ul>
      </nav>
    </NavProvider>
  );
};

export default Nav;
