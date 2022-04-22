import Image from 'next/image';
import IconProps from './Icon.interface';

const Icon: React.FC<IconProps> = ({ src, width, height, alt }) => {
  return <Image src={src} width={width} height={height} alt={alt} />;
};

export default Icon;
