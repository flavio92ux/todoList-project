import React from 'react';
import { Button } from 'react-bootstrap';

function ManipulationButtons() {
  return (
    <>
      <Button variant="danger" id="button-addon2">
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
