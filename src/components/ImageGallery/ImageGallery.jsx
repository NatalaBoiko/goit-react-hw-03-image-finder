export const ImageGallery = ({ images }) => (
  <ul>
    {images.map(({ id, webformatURL, tags }) => (
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    ))}
  </ul>
);
