import React from 'react';
import { Button } from 'react-bootstrap';
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

  return (
    <>
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
    </>
  );
}

export default ManipulationButtons;
