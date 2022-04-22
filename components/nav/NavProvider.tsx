import { useState } from 'react';
import { NavContext } from './NavContext';

interface NavProviderProps {
  children: React.ReactNode;
}

const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const [active, setActive] = useState<string | number>('');

  return (
    <NavContext.Provider value={{ active, setActive }}>
      <>{children}</>
    </NavContext.Provider>
  );
};

export default NavProvider;
