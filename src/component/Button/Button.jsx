import React from 'react';
import styles from './Button.module.css';

const Button = ({ onBtnClick, text }) => (
  <button className={styles.btn} type="button" onClick={onBtnClick}>
    {text}
  </button>
);

export default Button;
