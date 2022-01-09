import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, src, largeImg }) => (
  <li className={styles.ImageGalleryItem} key={id}>
    <img
      src={src}
      alt=""
      className={styles.ImageGalleryItemImage}
      data-img={largeImg}
      height="240"
      width="320"
    />
  </li>
);
export default ImageGalleryItem;
