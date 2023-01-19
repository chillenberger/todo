import React, { useRef } from 'react';

export default function TextForm({ submitAction, prompt }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.length > 0) {
      submitAction(inputRef.current.value);
      inputRef.current.value = '';
    } else {
      alert('Must enter item string!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="toDoForm">
      <input
        type="text"
        className="toDoInput"
        placeholder={prompt}
        ref={inputRef}
      />
      <button type="submit" className="submitButton">Submit</button>
    </form>
  );
}
