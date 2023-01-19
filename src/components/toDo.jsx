import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToDoContext } from '../context/ToDoContext';
import ItemEditModal from './modal';

export default function Item({ item, type }) {
  const [showEditModal, changeShowEditModal] = useState(false);
  const { deleteTodo, makeComplete, editToDo } = useContext(ToDoContext);

  const handleChecked = (e) => {
    setTimeout(() => {
      e.target.checked = false;
      makeComplete(item.id);
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
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        )}
      <div className="tableRowItem">
        {item.value}
      </div>
      {type === 'ToDo'
        && (
        <div>
          <input type="checkbox" onClick={(e) => handleChecked(e)} />
        </div>
        )}
      <div className="tableRowDelete">
        <button onClick={() => {
          deleteTodo(item.id);
        }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
