import Link from 'next/link';
import ButtonProps from './Button.interface';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ children, variant, href }) => {
  return (
    <Link href={`${href}`}>
      <a className={`${styles.button} ${styles[variant]}`}>{children}</a>
    </Link>
  );
};

export default Button;
