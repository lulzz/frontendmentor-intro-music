import { useState } from 'react';
import { SidebarContext } from './SidebarContext';

interface SidebarProviderProps {
  children: React.ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ toggle, setToggle }}>
      <>{children}</>
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
