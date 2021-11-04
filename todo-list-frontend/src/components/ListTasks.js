import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState('');
  const [background, setBackground] = useState({ id: '', color: '' });

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [tasks]);

  const handleClick = (listId) => {
    setId(listId);
    setBackground({ id, color: 'grey' });
  };

  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item
          key={ task.id }
          style={ background.id === task.id
            ? { backgroundColor: background.color }
            : null }
          id={ task.id }
          onClick={ () => handleClick(task.id) }
        >
          {task.task}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ListTasks;
