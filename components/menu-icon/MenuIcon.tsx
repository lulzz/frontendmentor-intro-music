import Image from 'next/image';
import { useSidebarContext } from '../../sidebar/SidebarContext';

import styles from './MenuIcon.module.scss';

const MenuIcon: React.FC = () => {
  const { toggle, setToggle } = useSidebarContext();

  return (
    <div className={styles.iconMenu} onClick={() => setToggle(!toggle)}>
      <Image
        src='/images/icon-menu.svg'
        layout='responsive'
        width={32}
        height={18}
        alt='hamburger menu icon'
      />
    </div>
  );
};

export default MenuIcon;
