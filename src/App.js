import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
const App = ()=>{
  const [inputList,setInputList] = useState("")
  const [Items, setItems] = useState([]);
  const itemEvent = (event)=>{
    setInputList(event.target.value)
  };
  const listofItems= ()=>{
    setItems((oldItems) =>{
      return [...oldItems,inputList]; 
    })
    setInputList("");
  };
  const deleteItems = (id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
}
return(
    <>
    <div className="main_div">
    <div className="center_div">
        <br/>
        <h1>ToDoList</h1>
        <br/>
        <input className="input" type="text" placeholder="Add Item"
        value={inputList} onChange={itemEvent}/>
        <button className="btn" onClick={listofItems}>+</button>
        <ol>
         {Items.map((itemval , index) => {
            {
            return <ToDoList key={index} id={index} text = {itemval}
            onSelect = {deleteItems}
             />
            }
          } )}
        </ol>
    </div>
    </div>
    </>
)
};
export default App;