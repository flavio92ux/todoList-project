import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function InputTask() {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Type your new task here!"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        New Task
      </Button>
      <Button variant="outline-secondary" id="button-addon2">
        Remove Task
      </Button>
      <Button variant="outline-secondary" id="button-addon2">
        Edit Task
      </Button>
      <Button variant="outline-secondary" id="button-addon2">
        Change Status
      </Button>
    </InputGroup>
  );
}

export default InputTask;