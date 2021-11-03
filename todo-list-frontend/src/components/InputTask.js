import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function InputTask() {
  const [inputContent, setInputContent] = useState('');

  const handleTask = () => {
    console.log(inputContent);
    setInputContent('');
  };

  return (
    <InputGroup
      className="mb-3"
    >
      <FormControl
        placeholder="Type your new task here!"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={ inputContent }
        onChange={ (e) => setInputContent(e.target.value) }
      />
      <Button
        variant="primary"
        id="button-addon2"
        onClick={ handleTask }
      >
        New Task
      </Button>
    </InputGroup>
  );
}

export default InputTask;
