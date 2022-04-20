import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link href='/' passHref>
      <a>
        <div className={styles.logo}>
          <Image
            src='/images/logo.svg'
            layout='responsive'
            width={84}
            height={27}
            alt='snap name logo'
          />
        </div>
      </a>
    </Link>
  );
};

export default Logo;
