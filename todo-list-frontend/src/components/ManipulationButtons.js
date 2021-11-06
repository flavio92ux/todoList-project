import React, { useEffect } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useId } from '../providers/listProvider';

function ManipulationButtons() {
  const {
    id,
    setId,
    disable,
    setDisable,
    query,
    setQuery,
    editMode, setEditMode, setTasks, changed, setChanged } = useId();

  const handleDelete = () => {
    const requestOptions = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3001/${id}`, requestOptions)
      .then(() => setId(null));

    setDisable(true);
    setChanged(!changed);
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
    setChanged(!changed);
    saveDb();
  };

  const generateQuery = (textContent) => {
    switch (textContent) {
    case 'Date':
      return 'createdAt';
    case 'Task':
      return 'task';
    default:
      return 'status';
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/sort?sortBy=${query}&sortOrder=asc`)
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [query]);

  const handleSort = ({ textContent }) => {
    const validValues = ['Date', 'Task', 'Status'];
    if (!validValues.includes(textContent)) return;

    setQuery(generateQuery(textContent));
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
      <DropdownButton
        id="dropdown-item-button"
        className="drop-button"
        title="Sort By"
        onClick={ (e) => handleSort(e.target) }
      >
        {['Date', 'Task', 'Status'].map((item) => (
          <Dropdown.Item key={ item }>{ item }</Dropdown.Item>
        ))}
      </DropdownButton>
      { editMode.edit
        && <Button onClick={ handleDone }>Ok</Button> }
    </div>
  );
}

export default ManipulationButtons;
