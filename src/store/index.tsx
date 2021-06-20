import { createContext, useContext } from 'react';
import { enableStaticRendering } from 'mobx-react-lite';

const isServer = typeof window ==='undefined';
enableStaticRendering(isServer);

import { UIStore } from 'src/store/UIStore';
import { UserStore } from 'src/store/UserStore';

const storeContext = createContext({
  uiStore: new UIStore(),
  userStore: new UserStore()
});

export const useStore = () => useContext(storeContext)