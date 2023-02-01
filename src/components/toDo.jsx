import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { ToDoContext } from '../context/ToDoContext';
import ItemEditModal from './modal';

export default function Item({ item }) {
  const [showEditModal, changeShowEditModal] = useState(false);
  const [isNoteShown, setIsNoteShown] = useState(false);
  const {
    deleteTodo,
    markComplete,
    markNotComplete,
    editToDo,
    editNote,
  } = useContext(ToDoContext);

  const handleChecked = (e) => {
    setTimeout(() => {
      e.target.checked = false;
      if (item.completed) {
        markNotComplete(item.id);
      } else {
        markComplete(item.id);
      }
    }, 200);
  };

  const handleEdit = () => {
    changeShowEditModal(!showEditModal);
  };

  const handleSubmit = (newItem, newNote) => {
    editToDo(item.id, newItem);
    editNote(item.id, newNote);
    changeShowEditModal(false);
  };

  const handleShowNote = () => {
    setIsNoteShown(!isNoteShown);
  };

  return (
    <li className="tableRow">
      { !item.completed && showEditModal
      && (
      <ItemEditModal
        submitAction={handleSubmit}
        cancelEdit={handleEdit}
        item={item}
      />
      )}
      {!item.completed
        && (
        <div className="tableRowEdit">
          <button
            onClick={handleEdit}
            type="submit"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            onClick={handleShowNote}
            type="button"
          >
            <FontAwesomeIcon icon={faNoteSticky} />
          </button>
        </div>
        )}
      <div className="tableRowItem" style={{ flexDirection: 'column' }}>
        <div>{item.value}</div>
        {isNoteShown && <div className="note">{item.note}</div>}
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
