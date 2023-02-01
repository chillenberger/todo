import React from 'react';
import TextForm from './form';

export default function ItemEditModal({ submitAction, cancelEdit, item }) {
  return (
    <div className="modal">
      <div className="modalInner">
        <p>Edit ToDo Item</p>
        <TextForm
          submitAction={submitAction}
          item={item}
        >
          <button onClick={cancelEdit} className="button" type="button">Cancel</button>
        </TextForm>
      </div>
    </div>
  );
}
