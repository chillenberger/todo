import React from 'react'
import ItemEditModal from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ToDoItem(props){
  const [showEditModal, changeShowEditModal] = React.useState(false)

  const handleChecked = (e) => {
    let timerId = setTimeout(() => {
      e.target.checked = false;
      props.doneAction(props.index);
    }, 100)
  }

  const handleEdit = () => {
    changeShowEditModal(!showEditModal)
  }

  const editSubmit = (val) => {
    props.editAction(props.index, val)
    changeShowEditModal(false)
  }

  return(
    <div className='tableRow' >
      {showEditModal &&
        <ItemEditModal
          submitAction={editSubmit}
          cancelEdit={handleEdit}/>
      }
      <div className='tableRowEdit'>
        <button onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit}/>
        </button>
      </div>
      <div className='tableRowItem'>
        {props.item}
      </div>
      <div>
        <input type='checkbox' onClick={(e)=>handleChecked(e)} />
      </div>
      <div className='tableRowDelete'>
        <button onClick={() => props.deleteAction(props.index)}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>
    </div>
  )
}

function CompleteItem(props){
  return (
    <div className='tableRow'>
      <div className='tableRowItem'>
        {props.item}
      </div>
      <div className='tableRowDelete'>
        <button onClick={() => props.deleteAction(props.index)}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>
    </div>
  )
}

export {
  ToDoItem,
  CompleteItem
}
