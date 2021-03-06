import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const idContext = React.createContext('');

export const IdProvider = ({ children }) => {
  const [id, setId] = useState();
  const [query, setQuery] = useState('');
  const [changed, setChanged] = useState();
  const [tasks, setTasks] = useState([]);
  const [disable, setDisable] = useState(true);
  const [editMode, setEditMode] = useState({ id: '', edit: false, input: '' });

  const allParameters = {
    id,
    setId,
    changed,
    setChanged,
    tasks,
    setTasks,
    disable,
    setDisable,
    editMode,
    setEditMode,
    query,
    setQuery,
  };

  return (
    <idContext.Provider value={ allParameters }>
      { children }
    </idContext.Provider>
  );
};

IdProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useId = () => React.useContext(idContext);
