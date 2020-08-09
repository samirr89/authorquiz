import React from 'react';
const Continue=({show,onContinue})=>{
    return (
        <div className="row continue">
          {
              show?<div className="col-11">
               <button onClick={onContinue}  className="btn btn-primary">Continue</button>
              </div>:null

          }
        </div>
    )
}

 export default Continue;