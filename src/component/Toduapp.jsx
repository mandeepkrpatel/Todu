import React, { useState } from 'react'
import ToduList from './ToduList';

function Toduapp() {

  const [inputList,setInputList] = useState("");
  const[Items,setItems] =  useState([]);

  const itemEvent = (event)=>{
    setInputList(event.target.value)
  };

  const listOfitems = () =>{
    setItems((oldItems) => {
      return[...oldItems,inputList]
    });
    setInputList("");

  };
  const deleteItem = (id) =>{
    console.log("deleteddd");

    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index) => {
        return index !==id;
      })
    })

  };

  return (
    <div className='main_container'>
        <div className='center'>
          <h1>TuDo List</h1>
          <div className='form'>
            <input type="text" placeholder='Add a Item' 
            value={inputList}
            onChange={itemEvent}/>
            <button onClick={listOfitems}>Add</button>
            <ol>
              {Items.map((itemval,index)=>{
                return <ToduList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
                />
              })}

            </ol>
            

          </div>

        </div>


    </div>
  )
}

export default Toduapp