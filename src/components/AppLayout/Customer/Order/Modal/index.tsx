import React, { FunctionComponent, ReactNode } from 'react';
import Modal from '@material-ui/core/Modal';

import useModalControl from 'src/components/hooks/useModalControl';

type Props = {
  children: ReactNode;
};

export const CancelOrderModal: FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = useModalControl();

  const handleClose = () => {
    setState({ ...state, modal: '', id: '' });
  };

  return (
    <Modal
      open={state.modal === 'clientCancelOrderModal'}
      onClose={handleClose}
      aria-labelledby="order-cancel-modal"
      aria-describedby="modal-to-cancel-order"
    >
      <>{children}</>
    </Modal>
  );
};

export default CancelOrderModal;
