import React from 'react';
import { Button } from 'react-bootstrap';
import { useId } from '../providers/listProvider';

function ManipulationButtons() {
  const { id, setId } = useId();

  const handleDelete = () => {
    const requestOptions = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3001/${id}`, requestOptions)
      .then(() => setId(null));
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
      <Button variant="secondary" id="button-addon2">
        Edit Task
      </Button>
      <Button variant="info" id="button-addon2">
        Change Status
      </Button>
    </>
  );
}

export default ManipulationButtons;
