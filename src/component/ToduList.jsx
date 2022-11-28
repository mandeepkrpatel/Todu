import React from 'react'

const ToduList = (props) => {
  return (
      <>
        <div> 
           <i class="bi bi-trash blue-color"
            onClick={() => {
            props.onSelect(props.id); 
            }}></i>
           <li>{props.text} </li>
        </div>
      </>
  )
}

export default ToduList;