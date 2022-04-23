import Icon from '../../icon/Icon.interface';

export default interface NavItemProps {
  id: number | string;
  label: string;
  href?: string;
  icon?: Icon;
  children?: React.ReactNode;
}
