import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const customModalStyles = {
  modal: {
    padding: 0,
    maxWidth: '90%',
    width: 'auto',
  },
};

const CustomModal = ({ image, onClose }) => {
  return (
    <Modal open={!!image} onClose={onClose} center styles={customModalStyles}>
      {image && <img src={image} alt="" />}
    </Modal>
  );
};

export default CustomModal;
