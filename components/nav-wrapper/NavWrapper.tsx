import List from '../list/List';
import ListItem from '../list/list-item/ListItem';
import NavItem from '../navigation/nav-item/NavItem';
import Nav from '../navigation/nav/Nav';
import NawWrapperProps from './NavWrapper.interface';

const NawWrapper: React.FC<NawWrapperProps> = ({ listType, direction }) => {
  return (
    <Nav direction={direction && direction}>
      <NavItem
        id='features'
        label='Features'
        icon={{
          src: '/images/icon-arrow-down.svg',
          width: 10,
          height: 6,
        }}
      >
        <List type={listType}>
          <ListItem href='#' icon={{ src: '/images/icon-todo.svg' }}>
            Todo List
          </ListItem>
          <ListItem href='#' icon={{ src: '/images/icon-calendar.svg' }}>
            Calendar
          </ListItem>
          <ListItem href='#' icon={{ src: '/images/icon-reminders.svg' }}>
            Reminders
          </ListItem>
          <ListItem href='#' icon={{ src: '/images/icon-planning.svg' }}>
            Planning
          </ListItem>
        </List>
      </NavItem>
      <NavItem
        id='company'
        label='Company'
        icon={{
          src: '/images/icon-arrow-down.svg',
          width: 10,
          height: 6,
        }}
      >
        <List type={listType}>
          <ListItem href='#'>History</ListItem>
          <ListItem href='#'>Our Team</ListItem>
          <ListItem href='#'>Blog</ListItem>
        </List>
      </NavItem>
      <NavItem id='careers' label='Careers' href='/careers' />
      <NavItem id='about' label='About' href='/about' />
    </Nav>
  );
};

export default NawWrapper;
