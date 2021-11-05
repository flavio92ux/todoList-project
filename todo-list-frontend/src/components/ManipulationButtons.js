import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useId } from '../providers/listProvider';

function ManipulationButtons() {
  const { id, setId, disable, editMode, setEditMode } = useId();

  const handleDelete = () => {
    const requestOptions = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3001/${id}`, requestOptions)
      .then(() => setId(null));
  };

  const handleEdit = () => {
    setEditMode({ id, edit: true });
  };

  const saveDb = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: editMode.input }),
    };

    fetch(`http://localhost:3001/${editMode.id}`, requestOptions);
  };

  const handleDone = () => {
    setEditMode({ ...editMode, edit: false });
    saveDb();
  };

  const generateBody = (textContent) => {
    switch (textContent) {
    case 'Date':
      return { sortBy: 'createdAt', sortOrder: 'asc' };
    case 'Task':
      return { sortBy: 'task', sortOrder: 'asc' };
    default:
      return { sortBy: 'status', sortOrder: 'asc' };
    }
  };

  const handleSort = ({ textContent }) => {
    const validValues = ['Date', 'Task', 'Status'];
    if (!validValues.includes(textContent)) return;

    const body = generateBody(textContent);

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body,
    };

    fetch('http://localhost:3001/sort', requestOptions)
      .then((response) => response.json())
      .then((data) => setId(data[0].id));
  };

  return (
    <div>
      <Button
        variant="danger"
        id="button-addon2"
        onClick={ handleDelete }
      >
        x
      </Button>
      <Button
        variant="secondary"
        id="button-addon2"
        disabled={ disable }
        onClick={ handleEdit }
      >
        Edit Task
      </Button>
      { editMode.edit
        && <Button onClick={ handleDone }>Ok</Button> }
      <DropdownButton id="dropdown-item-button" className="drop-button" title="Sort By">
        {['Date', 'Task', 'Status'].map((item) => (
          <Dropdown.Item
            key={ item }
          >
            { item }
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default ManipulationButtons;
