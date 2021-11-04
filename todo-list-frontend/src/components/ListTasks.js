import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useId } from '../providers/listProvider';

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [background, setBackground] = useState({ id: '', color: '' });

  const { id, setId } = useId();

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [id]);

  useEffect(() => {
    setBackground({ id, color: 'grey' });
  }, [id]);

  const handleClick = (listId) => {
    setId(listId);
  };

  return (
    <ListGroup>
      {console.log('ola')}
      {tasks.map((task) => (
        <ListGroup.Item
          key={ task.id }
          style={ background.id === task.id
            ? { background: background.color }
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
