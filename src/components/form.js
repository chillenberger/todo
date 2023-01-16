import React from 'react';

function TextForm(props) {
  const [input, changeInput] = React.useState('')

  const handleInput = (e) => {
    changeInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if( input.length > 0) {
      props.submitAction(input);
      changeInput('');
    } else {
      alert('Must enter item string!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' className='submitInput' placeholder={props.prompt} value={input} onChange={(e) => handleInput(e)}/>
      <br/>
      <button type='submit' className='button'>Submit</button>
      {props.children}
    </form>
  )
}


export {
  TextForm
}
