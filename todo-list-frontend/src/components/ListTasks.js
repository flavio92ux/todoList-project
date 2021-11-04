import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useId } from '../providers/listProvider';

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [background, setBackground] = useState({ id: '', color: '' });

  const { id, setId } = useId();

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [id, tasks]);

  useEffect(() => {
    setBackground({ id, color: 'grey' });
  }, [id]);

  const handleClick = (listId) => {
    setId(listId);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr
            key={ task.id }
            style={ background.id === task.id
              ? { background: background.color }
              : null }
            id={ task.id }
            onClick={ () => handleClick(task.id) }
          >
            <td>{index + 1}</td>
            <td>{task.task}</td>
            <td>{task.status}</td>
            {/* {`${task.task} - ${task.status}`} */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListTasks;
