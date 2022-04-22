import DropdownProps from './Dropdown.interface';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  return <ul className={styles.dropdown}>{children}</ul>;
};

export default Dropdown;
