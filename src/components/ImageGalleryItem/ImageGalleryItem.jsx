import React, { useState } from 'react';
import CustomModal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={styles.gallery__item} onClick={openModal}>
        <img className={styles.image} src={image.webformatURL} alt="" />
      </li>
      {isModalOpen && (
        <CustomModal image={image.largeImageURL} onClose={closeModal} />
      )}
    </>
  );
};

export default ImageGalleryItem;
