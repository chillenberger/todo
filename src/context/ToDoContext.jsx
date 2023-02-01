import React, { createContext, useReducer, useMemo } from 'react';
import _uniqueId from 'lodash/uniqueId';

const ToDoContext = createContext();

const initialState = { toDoItems: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'addToDo': {
      return { toDoItems: [...state.toDoItems, action.payload] };
    }
    case 'deleteToDo': {
      return { toDoItems: [...state.toDoItems.filter((item) => item.id !== action.payload)] };
    }
    case 'markComplete': {
      const items = [...state.toDoItems];
      const markIndex = state.toDoItems.indexOf(
        ...state.toDoItems.filter((i) => i.id === action.payload),
      );
      items[markIndex].completed = true;
      return { toDoItems: [...items] };
    }
    case 'markNotComplete': {
      const items = [...state.toDoItems];
      const markIndex = state.toDoItems.indexOf(
        ...state.toDoItems.filter((i) => i.id === action.payload),
      );
      items[markIndex].completed = false;
      return { toDoItems: [...items] };
    }
    case 'editToDo': {
      const newTodoItems = [...state.toDoItems];
      const editIndex = state.toDoItems.indexOf(
        ...state.toDoItems.filter((i) => i.id === action.payload.id),
      );
      newTodoItems[editIndex].value = action.payload.value;
      return { toDoItems: [...newTodoItems] };
    }
    case 'editNote': {
      const items = [...state.toDoItems];
      const markIndex = state.toDoItems.indexOf(
        ...state.toDoItems.filter((i) => i.id === action.payload.id),
      );
      items[markIndex].note = action.payload.note;
      return { toDoItems: [...items] };
    }
    default: {
      return state;
    }
  }
}

export default function ToDoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({
    toDoItems: state.toDoItems,
    addToDo: (newValue, newNote) => {
      dispatch({
        type: 'addToDo',
        payload: {
          value: newValue,
          completed: false,
          id: _uniqueId(),
          note: newNote || 'None',
        },
      });
    },
    deleteTodo: (id) => {
      dispatch({ type: 'deleteToDo', payload: id });
    },
    markComplete: (id) => {
      dispatch({ type: 'markComplete', payload: id });
    },
    markNotComplete: (id) => {
      dispatch({ type: 'markNotComplete', payload: id });
    },
    editNote: (id, newNote) => {
      dispatch({ type: 'editNote', payload: { id, note: newNote } });
    },
    editToDo: (id, newValue) => {
      dispatch({ type: 'editToDo', payload: { id, value: newValue } });
    },
  }), [state, dispatch]);

  return (
    <ToDoContext.Provider value={value}>
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext };
