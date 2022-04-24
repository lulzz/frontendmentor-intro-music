import Sidebar from '../../sidebar/Sidebar';
import SidebarProvider from '../../sidebar/SidebarProvider';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import MenuIcon from '../menu-icon/MenuIcon';
import NavWrapper from '../nav-wrapper/NavWrapper';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <SidebarProvider>
        <MenuIcon />
        <Sidebar>
          <NavWrapper listType='menu' />
        </Sidebar>
      </SidebarProvider>
      <div className={styles.headerNav}>
        <NavWrapper listType='dropdown' direction='horizontal' />
      </div>
      <div className={styles.buttonGroup}>
        <Button variant='text' href='#'>
          Login
        </Button>
        <Button variant='outlined' href='#'>
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;
