import { createContext, useState } from 'react';

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }: any) => {
  const [state, setState] = useState({
    modal: '',
    id: '',
  });

  return (
    <ModalContext.Provider value={[state, setState]}>
      {children}
    </ModalContext.Provider>
  );
};
