import Logo from '../logo/Logo';
import MenuIcon from '../menu-icon/MenuIcon';
import Nav from '../nav/Nav';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <MenuIcon />
      <Nav />
    </header>
  );
};

export default Header;
