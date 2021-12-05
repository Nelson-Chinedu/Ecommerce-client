import { useContext } from 'react';
import { ModalContext } from 'src/components/context/modalContext';

const useModalControl = () => {
  const [state, setState] = useContext(ModalContext);
  return [state, setState];
};

export default useModalControl;
