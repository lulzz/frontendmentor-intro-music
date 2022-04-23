import Icon from '../components/icon/Icon';
import SidebarProps from './Sidebar.interface';
import styles from './Sidebar.module.scss';
import { useSidebarContext } from './SidebarContext';

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { toggle, setToggle } = useSidebarContext();

  return (
    <>
      {toggle && <div className={styles.overlay}></div>}
      {toggle && (
        <div className={`${styles.sidebar} ${styles.right}`}>
          <div className={styles.header}>
            <div
              className={styles.iconWrapper}
              onClick={() => setToggle(!toggle)}
            >
              <Icon src='/images/icon-close-menu.svg' />
            </div>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
