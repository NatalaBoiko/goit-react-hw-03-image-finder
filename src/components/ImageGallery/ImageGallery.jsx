import './ImageGallery.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        openModal={openModal}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};
