interface Icon {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default interface ListItemProps {
  children: React.ReactNode;
  icon?: Icon;
  href: string;
}
