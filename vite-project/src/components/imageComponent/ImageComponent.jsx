import React from 'react';
import PropTypes from 'prop-types';
import './ImageComponent.css';

const ImageComponent = ({ src, alt, className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={src} alt={alt} className="image" />
    </div>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

ImageComponent.defaultProps = {
  alt: 'Image',
  className: '',
};

export default ImageComponent;

