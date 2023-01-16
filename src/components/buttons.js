import React from 'react'


function LinkButton(props) {
  return (
    <div className='listButtonC8R'>
      <a className='button' href={props.link}>
        {props.children}
      </a>
    </div>
  )
}


export {
  LinkButton
}
