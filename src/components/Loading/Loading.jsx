import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import './Loading.scss';
import PropTypes from 'prop-types';

const blockName = 'loading-container';
const Loading = ({message}) => {
  return (
    <div className={blockName}>
      <FontAwesomeIcon icon={faSpinner} spin />
      {message}
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
