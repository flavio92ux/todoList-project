import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function InputTask() {
  const [inputContent, setInputContent] = useState('');

  const handleTask = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: 'ola', status: 'mundo' }),
    };

    fetch('http://localhost:3001/', requestOptions)
      .then((response) => response.json());
    // Codigo obtido de https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
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
