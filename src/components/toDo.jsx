import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToDoContext } from '../context/ToDoContext';
import ItemEditModal from './modal';

export default function Item({ item, type }) {
  const [showEditModal, changeShowEditModal] = useState(false);
  const {
    deleteTodo,
    markComplete,
    markNotComplete,
    editToDo,
  } = useContext(ToDoContext);

  const handleChecked = (e) => {
    setTimeout(() => {
      e.target.checked = false;
      if (type === 'ToDo') {
        markComplete(item.id);
      } else {
        markNotComplete(item.id);
      }
    }, 200);
  };

  const handleEdit = () => {
    changeShowEditModal(!showEditModal);
  };

  const handleSubmit = (val) => {
    editToDo(item.id, val);
    changeShowEditModal(false);
  };
  return (
    <li className="tableRow">
      {type === 'ToDo' && showEditModal
      && (
      <ItemEditModal
        submitAction={handleSubmit}
        cancelEdit={handleEdit}
      />
      )}
      {type === 'ToDo'
        && (
        <div className="tableRowEdit">
          <button
            onClick={handleEdit}
            type="submit"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        )}
      <div className="tableRowItem">
        {item.value}
      </div>
      <div>
        <input type="checkbox" onClick={(e) => handleChecked(e)} />
      </div>
      <div className="tableRowDelete">
        <button
          onClick={() => {
            deleteTodo(item.id);
          }}
          type="submit"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
