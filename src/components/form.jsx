import React, { useRef, useEffect } from 'react';

export default function TextForm({ submitAction, prompt, item }) {
  const textRef = useRef();
  const textAreaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textRef.current.value.length > 0) {
      submitAction(
        textRef.current.value,
        textAreaRef.current.value,
      );
      textRef.current.value = '';
      textAreaRef.current.value = '';
    } else {
      alert('Must enter item string!');
    }
  };

  useEffect(() => {
    if (item?.value) {
      textRef.current.value = item.value;
    }
    if (item?.note) {
      textAreaRef.current.value = item.note;
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="toDoForm">
      <input
        type="text"
        className="toDoInput"
        placeholder={prompt}
        ref={textRef}
      />
      <textarea
        className="toDoTextArea"
        placeholder="Note"
        ref={textAreaRef}
      />
      <button type="submit" className="submitButton">Submit</button>
    </form>
  );
}
