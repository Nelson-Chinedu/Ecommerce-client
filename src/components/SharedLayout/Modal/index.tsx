import React, { FunctionComponent, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import Modal from '@material-ui/core/Modal';

import { useStore } from 'src/store';

type Props = {
  children: ReactNode
}

const Index: FunctionComponent<Props> = ({ children }) => {
  const { uiStore } = useStore();

  const handleClose = () => {
    uiStore.toggleModalVisibility()
  }

  return(
    <Modal
      open={uiStore.modalVisibility}
      onClose={handleClose}
      aria-labelledby="product-modal"
      aria-describedby="modal-to-add-product"
    >
      <>
        {children}
      </>
    </Modal>
  )
};

export default observer(Index);
