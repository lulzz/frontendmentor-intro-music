import Image from 'next/image';
import Link from 'next/link';
import ListItemProps from './ListItem.interface';

import styles from './ListItem.module.scss';

const ListItem: React.FC<ListItemProps> = ({ children, icon, href }) => {
  return (
    <li>
      <Link href={href ?? '#'}>
        <a className={`${styles.listItem} ${icon && styles['icon']}`}>
          <span className={styles.iconWrapper}>
            {icon && (
              <Image
                src={icon.src}
                width={icon?.width ?? 20}
                height={icon?.width ?? 20}
                alt={icon?.alt ?? ''}
              />
            )}
          </span>
          <span className={styles.label}>{children}</span>
        </a>
      </Link>
    </li>
  );
};

export default ListItem;
