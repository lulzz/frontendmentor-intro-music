import { useState } from 'react';
import { NavContext, Action } from './NavContext';

interface NavProviderProps {
  children: React.ReactNode;
}

const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const [action, setAction] = useState<Action>({
    active: '',
    toggle: false,
  });

  return (
    <NavContext.Provider value={{ action, setAction }}>
      <>{children}</>
    </NavContext.Provider>
  );
};

export default NavProvider;
