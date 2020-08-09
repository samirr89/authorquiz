import React from 'react';
const Book=({title,onClick})=>{
    return (
        <div onClick={()=>{onClick(title)}} className="answer">
          <h4>{title}</h4>
        </div>
    )
}

 export default Book;