import React from 'react';
import TextForm from './form';

export default function ItemEditModal({ submitAction, cancelEdit }) {
  return (
    <div className="modal">
      <div className="modalInner">
        <p>Edit ToDo Item</p>
        <TextForm
          submitAction={submitAction}
        >
          <button onClick={cancelEdit} className="button" type="button">Cancel</button>
        </TextForm>
      </div>
    </div>
  );
}
