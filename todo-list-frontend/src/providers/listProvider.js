import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const idContext = React.createContext('');

export const IdProvider = ({ children }) => {
  const [id, setId] = useState('ola');

  return (
    <idContext.Provider value={ { id, setId } }>
      { children }
    </idContext.Provider>
  );
};

IdProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useId = () => React.useContext(idContext);
