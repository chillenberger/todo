import './styling/App.css';
import React, { useContext } from 'react';
import TextForm from './components/form';
import ItemList from './components/list';
import { ToDoContext } from './context/ToDoContext';

export default function App() {
  const { toDoItems, addToDo } = useContext(ToDoContext);

  return (
    <div className="App">
      <div className="headContainer">
        <h1>My ToDo List</h1>
        <TextForm
          submitAction={addToDo}
          prompt="Add ToDo Item"
        />
      </div>
      <div className="listContainer">
        <ItemList
          title="ToDo Items"
          link="https://www.youtube.com/watch?v=DEGs-J5nfqQ"
          items={toDoItems.filter((item) => !item.completed)}
          message="You Have Nothing To Do"
        />
        <ItemList
          title="Completed Items"
          link="https://www.youtube.com/watch?v=btPJPFnesV4"
          items={toDoItems.filter((item) => item.completed)}
          message="You Have Done Nothing"
        />
      </div>
    </div>
  );
}
