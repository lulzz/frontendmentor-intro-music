import NavProps from './Nav.interface';

import NavProvider from './NavProvider';

import styles from './Nav.module.scss';

const Nav: React.FC<NavProps> = ({ children, direction, globalIcon }) => {
  return (
    <NavProvider globalIcon={globalIcon ?? { src: '' }}>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.items}  ${direction && styles['horizontal']}`}>
          {children}
        </ul>
      </nav>
    </NavProvider>
  );
};

export default Nav;
