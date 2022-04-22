import Image from 'next/image';
import DropdownItemProps from './DropdownItem.interface';
import styles from './DropdownItem.module.scss';

const DropdownItem: React.FC<DropdownItemProps> = ({ children, icon }) => {
  let options = {
    src: '',
    width: 20,
    height: 20,
    alt: '',
  };

  if (icon) options = { ...options, ...icon };

  return (
    <li className={`${styles.dropdownItem} ${icon && styles['icon']}`}>
      <span className={styles.iconWrapper}>
        {icon && (
          <Image
            src={options.src}
            width={options.width}
            height={options.width}
            alt={options.alt}
          />
        )}
      </span>
      <span className={styles.label}>{children}</span>
    </li>
  );
};

export default DropdownItem;
