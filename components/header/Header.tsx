import Dropdown from '../dropdown/Dropdown';
import DropdownItem from '../dropdown/dropdown-item/DropdownItem';
import Logo from '../logo/Logo';
import MenuIcon from '../menu-icon/MenuIcon';
import NavItem from '../nav-item/NavItem';
import Nav from '../nav/Nav';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <MenuIcon />
      <Nav>
        <NavItem id='features' label='Features'>
          <Dropdown>
            <DropdownItem icon={{ src: '/images/icon-todo.svg' }}>
              Todo List
            </DropdownItem>
            <DropdownItem icon={{ src: '/images/icon-calendar.svg' }}>
              Calendar
            </DropdownItem>
            <DropdownItem icon={{ src: '/images/icon-reminders.svg' }}>
              Reminders
            </DropdownItem>
            <DropdownItem icon={{ src: '/images/icon-planning.svg' }}>
              Planning
            </DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem id='company' label='Company'>
          <Dropdown>
            <DropdownItem>History</DropdownItem>
            <DropdownItem>Our Team</DropdownItem>
            <DropdownItem>Blog</DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem id='careers' label='Careers' href='/careers' />
        <NavItem id='about' label='About' href='/about' />
      </Nav>
    </header>
  );
};

export default Header;
