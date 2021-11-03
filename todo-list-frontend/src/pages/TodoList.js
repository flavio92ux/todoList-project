import React from 'react';
import InputTask from '../components/InputTask';
import ListTasks from '../components/ListTasks';
import ManipulationButtons from '../components/ManipulationButtons';
import TitleContainer from '../components/TitleContainer';

function TodoList() {
  return (
    <>
      <TitleContainer />
      <InputTask />
      <ListTasks />
      <ManipulationButtons />
    </>
  );
}

export default TodoList;
