import { GlobalIcon } from '../nav/NavContext';

export default interface NavProps {
  children: React.ReactNode;
  direction?: 'horizontal';
  globalIcon?: GlobalIcon;
}
