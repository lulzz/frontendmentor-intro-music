import { useState } from 'react';
import { NavContext, Action } from './NavContext';

interface NavProviderProps {
  children: React.ReactNode;
  globalIcon: {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
  };
}

const NavProvider: React.FC<NavProviderProps> = ({ children, globalIcon }) => {
  const [action, setAction] = useState<Action>({
    active: '',
    toggle: false,
  });

  return (
    <NavContext.Provider value={{ action, setAction, globalIcon }}>
      <>{children}</>
    </NavContext.Provider>
  );
};

export default NavProvider;
