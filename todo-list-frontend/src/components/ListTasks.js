import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

function ListTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <ListGroup>
      {console.log(tasks)}
      {tasks.map((task, index) => (
        <ListGroup.Item key={ index }>{task.task}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ListTasks;
