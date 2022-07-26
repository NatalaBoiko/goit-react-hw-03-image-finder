import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};
