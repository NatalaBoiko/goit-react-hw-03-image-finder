import './Button.css';
import PropTypes from 'prop-types';

export const Button = ({ onloadMore }) => {
  return (
    <div className="Button-container" onClick={onloadMore}>
      <button type="button" className="Button">
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};
