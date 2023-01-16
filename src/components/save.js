//original apps.js

import "./styles.css";
import { ToDos } from "./components/todo-comp";

/**
 * This App should:
 *  - Input a task
 *  - Add the task to a list
 *  - Display the list of tasks
 *  - Allow for completing a task
 *  - Allow for deleting a task
 *  - Add Completed tasks to a done list
 *
 * Extras:
 *  - Style the App
 *  - Edit an existing task
 */

/*
  TODO:

  1.) Consider adding global css file with basic configuration in place
    - Check for comfort level changing styles
  2.) How do we determine the level of candidate?
    –
*/

export default function App() {
  return (
    <div className="App">
      <h1>Hello ToDo List</h1>
      <ToDos />
    </div>
  );
}
