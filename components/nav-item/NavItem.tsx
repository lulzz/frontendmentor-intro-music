import { useNavContext } from '../nav/NavContext';
import styles from './NavItem.module.scss';

import NavItemProps from './NavItem.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: React.FC<NavItemProps> = ({ children, id, label, href }) => {
  const { active, setActive } = useNavContext();
  const router = useRouter();

  return (
    <li className={styles.navItem} onClick={() => setActive(id)}>
      <Link href={href ?? '#'}>
        <a
          className={`${
            (active === id || router.asPath === href) && styles.color
          }`}
        >
          {label}
        </a>
      </Link>
      {children && active === id && <>{children}</>}
    </li>
  );
};

export default NavItem;
