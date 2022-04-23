import ListProps from './List.interface';
import styles from './List.module.scss';

const List: React.FC<ListProps> = ({ children, type }) => {
  return (
    <ul
      className={`
        ${styles.list} 
        ${styles[type]}
      `}
    >
      {children}
    </ul>
  );
};

export default List;
