import React from 'react';
import Loader from '../Loader/Loader';
import styles from './Button.module.css';

const Button = ({ onClick, isLoading }) => {
  return (
    <div className={styles.div}>
      <button
        className={styles.button}
        type="button"
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : 'Load More'}
      </button>
    </div>
  );
};

export default Button;
