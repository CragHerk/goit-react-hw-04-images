import React, { useState } from 'react';
import styles from './Searchbar.module.css';
import Loader from '../Loader/Loader';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    await onSubmit(searchQuery);

    setIsLoading(false);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.button__label}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images "
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>

      {isLoading && <Loader className={styles.loader} />}
    </header>
  );
};
export default Searchbar;
