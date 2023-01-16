// originl app

/**
 * This App should:
 *  - Input a task
 *  - Add the task to a list
 *  - Display the list of tasks
 *  - Allow for completing a task
 *  - Allow for deleting a task
 *  - Add that item to a compeleted list
 */

import React from "react";

function ToDos() {
  const [todoItems, changeToDoItems] = React.useState([]);
  const [completedItems, changeCompletedItems] = React.useState([]);
  const [inputData, changeInputData] = React.useState("");

  const addTask = () => {
    changeToDoItems([...todoItems, inputData]);
    changeInputData("");
  };

  const handleDelete = (index) => {
    changeToDoItems([...todoItems]);
  };

  const handleInput = (e) => {
    changeInputData(e.target.value);
  };

  const handleComplete = (index) => {
    const newCompleted = todoItems.splice(index, 1);
    changeToDoItems([...todoItems]);
    changeCompletedItems([...completedItems, newCompleted]);
  };

  return (
    <div>
      <input onChange={(e) => handleInput(e)} value={inputData} />
      <button onClick={addTask}>Submit</button>
      <div className="mainC8R">
        <div className="ToDoC8R">
          <div className="tableHeader">ToDo Items</div>
          {todoItems.length > 0 &&
            todoItems.map((item, index) => {
              return (
                <div key={index} className="tableRow">
                  <div style={{ textAlign: "center" }}>{item}</div>
                  <button onClick={() => handleComplete(index)}>Done</button>
                  <button onClick={() => handleDelete(index)}>x</button>
                </div>
              );
            })}
        </div>
        <div className="CompletedToDosC8R">
          <div>Completed Items</div>
          {completedItems.length > 0 &&
            completedItems.map((item, index) => {
              return (
                <div key={index}>
                  {item}
                  <button onClick={() => handleDelete(index)}>x</button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export { ToDos };
