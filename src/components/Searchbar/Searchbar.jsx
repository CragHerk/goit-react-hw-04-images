import React, { useState, useRef } from 'react';
import styles from './Searchbar.module.css';
import Loader from '../Loader/Loader';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    await onSubmit(searchQuery);

    setIsLoading(false);
  };

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.button__label} onClick={handleFocusInput}>
            GO
            {isLoading && <Loader className={styles.loader} />}
          </span>
        </button>

        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search for images"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
