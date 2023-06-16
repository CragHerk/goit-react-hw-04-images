import React, { useState } from 'react';
import ReactModal from 'react-modal';
import searchImages from '../Utils/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async query => {
    setIsLoading(true);
    const imageData = await searchImages(query);
    setImages(imageData);
    setIsLoading(false);
    setSearchQuery(query);
  };

  const loadMoreImages = async () => {
    setIsLoading(true);
    const nextPageData = await searchImages(searchQuery, images.length + 1);
    setImages(prevImages => [...prevImages, ...nextPageData]);
    setIsLoading(false);
  };

  ReactModal.setAppElement('#root');

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={loadMoreImages} isLoading={isLoading} />
      )}
    </div>
  );
};
