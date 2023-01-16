import React from 'react';
import {TextForm} from './form'

export default function ItemEditModal(props) {
  return (
    <div className='modal'>
      <div className='modalInner'>
        <p>Edit ToDo Item</p>
        <TextForm
          submitAction={props.submitAction}>
        <button onClick={props.cancelEdit} className='button'>Cancel</button>
        </TextForm>
      </div>
    </div>
  )
}
