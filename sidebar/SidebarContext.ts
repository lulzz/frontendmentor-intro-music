import { createContext, useContext, Dispatch, SetStateAction } from 'react';

interface ContextProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const setToggle: Dispatch<SetStateAction<boolean>> = (toggle) => {};

export const SidebarContext = createContext<ContextProps>({
  toggle: false,
  setToggle,
});

export const useSidebarContext = () => useContext(SidebarContext);
