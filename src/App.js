import './App.css';
import React from 'react';
import {
  ToDoItem,
  CompleteItem
} from './components/todo';

import { TextForm } from './components/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { LinkButton } from './components/buttons';

function App() {
  const [todoItems, changeToDoItems] = React.useState([]);
  const [completedItems, changeCompletedItems] = React.useState([]);

  const addTask = (val) => {
    changeToDoItems([...todoItems, val]);
  };

  const handleToDoDelete = (index) => {
    todoItems.splice(index, 1);
    changeToDoItems([...todoItems]);
  };

  const handleCompleteDelete = (index) => {
    completedItems.splice(index, 1);
    changeCompletedItems([...completedItems]);
  }

  const handleComplete = (index) => {
    const newCompleted = todoItems.splice(index, 1);
    changeToDoItems([...todoItems]);
    changeCompletedItems([...completedItems, newCompleted]);
  };

  const editTask = (index, value) => {
    todoItems[index] = value;
    changeToDoItems([...todoItems]);
  }

  const listToDos = todoItems.map((item, index) => {
      return (
        <ToDoItem
          item={item}
          key={index}
          index={index}
          doneAction={handleComplete}
          deleteAction={handleToDoDelete}
          editAction={editTask}
        />
      );
    })

  const listCompleted = completedItems.map((item, index) => {
      return (
        <CompleteItem
          item={item}
          key={index}
          deleteAction={handleCompleteDelete}
        />
      );
    })

  return (
    <div className="App">
      <div className="headContainer">
        <h1>My ToDo List</h1>
        <div>
          <TextForm
            submitAction={addTask}
            prompt='Add ToDo Item'
          />
        </div>
      </div>
      <div className="listContainer">
        <div className="list">
          <h2 className="tableHeader">ToDo Items</h2>
          {todoItems.length>0?listToDos:
          <LinkButton
            link='https://www.youtube.com/watch?v=DEGs-J5nfqQ'>
            You have nothing to do
            <FontAwesomeIcon icon={faLink}/>
          </LinkButton>}
        </div>
        <div className="list">
          <h2 className="tableHeader">Completed Items</h2>
            {completedItems.length>0?listCompleted:
            <LinkButton
              link='https://www.youtube.com/watch?v=btPJPFnesV4'>
              You have done nothing!
              <FontAwesomeIcon icon={faLink}/>
            </LinkButton>}
        </div>
      </div>
    </div>
  );
}

export default App;
