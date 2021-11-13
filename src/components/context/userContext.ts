import { createContext } from 'react';

interface IContext {
  isLoggedIn: boolean;
}

export const UserContext = createContext<IContext>({ isLoggedIn: null });
