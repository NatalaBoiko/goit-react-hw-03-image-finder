import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => openModal(largeImageURL)}>
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};
