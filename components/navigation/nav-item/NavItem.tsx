import { Action, useNavContext } from '../nav/NavContext';
import styles from './NavItem.module.scss';

import NavItemProps from './NavItem.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '../../icon/Icon';
import IconProps from '../../icon/Icon.interface';

const NavItem: React.FC<NavItemProps> = ({
  children,
  id,
  label,
  href,
  icon,
}) => {
  const { action, setAction, globalIcon } = useNavContext();
  const router = useRouter();

  const handleToggleActiveNavItem = (id: string | number, action: Action) => {
    if (id !== action.active) {
      setAction({
        active: id,
        toggle: true,
      });
    } else {
      setAction({
        active: id,
        toggle: !action.toggle,
      });
    }
  };

  const handleIcon = (iconProps: IconProps) => {
    return (
      <Icon
        src={iconProps ? iconProps.src : ''}
        width={iconProps && iconProps.width}
        height={iconProps && iconProps.height}
        alt={iconProps && iconProps.alt}
      />
    );
  };

  return (
    <li className={styles.navItem}>
      <div className={`${styles.linkBox}`}>
        <Link href={href ?? '#'}>
          <a
            onClick={() => handleToggleActiveNavItem(id, action)}
            className={`${styles.link} ${
              (action.active === id || router.asPath === href) && styles.color
            }`}
          >
            {label}
          </a>
        </Link>
        <div
          className={`${styles.iconBox} ${
            action.active === id && action.toggle && styles.active
          }`}
        >
          {children && globalIcon
            ? globalIcon && handleIcon(globalIcon)
            : icon && handleIcon(icon)}
        </div>
      </div>
      {children && action.active === id && action.toggle && <>{children}</>}
    </li>
  );
};

export default NavItem;
