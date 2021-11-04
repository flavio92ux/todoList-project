import React, { useState, useEffect } from 'react';
import { Table, Dropdown } from 'react-bootstrap';
import { useId } from '../providers/listProvider';

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [background, setBackground] = useState({ id: '', color: '' });
  const [status, setStatus] = useState({ id: '', status: '' });

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

  const handleDropdown = ({ textContent }, listId) => {
    const validNames = ['Pending', 'In Progress', 'Done'];

    if (validNames.includes(textContent)) {
      setStatus({ id: listId, status: textContent });
    }
  };

  useEffect(() => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: status.status }),
    };

    fetch(`http://localhost:3001/${status.id}`, requestOptions);
  }, [status]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Status</th>
          <th>Change</th>
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
            <td>
              <Dropdown onClick={ (e) => handleDropdown(e.target, task.id) }>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Change Status
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Pending</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Done</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            {/* <td>{task.status}</td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListTasks;
