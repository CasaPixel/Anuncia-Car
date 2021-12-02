import React from 'react';
import PropTypes from 'prop-types';


const CustomAvatar = ({ name, avatar, size }) => {
  

  return (
    <h1>Pefil</h1>
  );
};

CustomAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired
};

export default CustomAvatar;