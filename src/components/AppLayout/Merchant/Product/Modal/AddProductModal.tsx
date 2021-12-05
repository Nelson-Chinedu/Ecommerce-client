import React, { FunctionComponent, ReactNode } from 'react';
import Modal from '@material-ui/core/Modal';

import useModalControl from 'src/components/hooks/useModalControl';

type Props = {
  children: ReactNode;
};

export const AddProduct: FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = useModalControl();

  const handleClose = () => {
    setState({ ...state, modal: '', id: '' });
  };

  return (
    <Modal
      open={state.modal === 'addProductModal'}
      onClose={handleClose}
      aria-labelledby="product-modal"
      aria-describedby="modal-to-add-product"
    >
      <>{children}</>
    </Modal>
  );
};

export default AddProduct;
