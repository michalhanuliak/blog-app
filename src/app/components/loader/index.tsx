import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import LoaderContainer from './loader';

const Loader = ({...props }) => {
  const { color } = props;

  return (
    <LoaderContainer>
      <PropagateLoader loading color={color} />
    </LoaderContainer>
  );
};

Loader.defaultProps = {
  color: '#EF4400',
};

export default Loader;
