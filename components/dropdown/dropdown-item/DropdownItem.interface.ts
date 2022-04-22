interface Icon {
  src: string;
  width?: number | 20;
  height?: number | 20;
  alt?: string | '';
}

export default interface DropdownItemProps {
  children: React.ReactNode;
  icon?: Icon;
}
