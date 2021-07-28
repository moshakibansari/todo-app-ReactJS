import React from "react";
const ToDoList = (props)=>{
    
     return (
         <>
         <div className="todo">
       
         <li> <i className="fa fa-times icon" aria-hidden="true"
         onClick={()=>{
             props.onSelect(props.id)
         }}/>{props.text}</li>
         </div>
         </>
     )
     
};
export default ToDoList;