import { createContext, useContext, Dispatch, SetStateAction } from 'react';

export interface GlobalIcon {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}
export interface Action {
  active: string | number;
  toggle: boolean;
}

interface ContextProps {
  action: Action;
  setAction: Dispatch<SetStateAction<Action>>;
  globalIcon?: GlobalIcon;
}

const setAction: Dispatch<SetStateAction<Action>> = (action) => {};

export const NavContext = createContext<ContextProps>({
  action: {
    active: '',
    toggle: false,
  },
  setAction,
});

export const useNavContext = () => useContext(NavContext);
