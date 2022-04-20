import Image from 'next/image';

import styles from './MenuIcon.module.scss';

const MenuIcon: React.FC = () => {
  return (
    <div className={styles.iconMenu}>
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
