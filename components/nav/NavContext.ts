import { createContext, useContext, Dispatch, SetStateAction } from 'react';

interface ContextProps {
  active: string | number;
  setActive: Dispatch<SetStateAction<string | number>>;
}

const setActive: Dispatch<SetStateAction<string | number>> = (active) => {};

export const NavContext = createContext<ContextProps>({
  active: '',
  setActive,
});

export const useNavContext = () => useContext(NavContext);
