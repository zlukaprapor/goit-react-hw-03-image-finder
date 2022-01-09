import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ul className={styles.ImageGallery} onClick={onImgClick}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          largeImg={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
