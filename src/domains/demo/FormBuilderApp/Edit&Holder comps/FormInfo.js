import React from "react";

function FormInfo(props){
    return(
<div className="form-info">
        <input
          type={'text'}
          className="form-name"
          onBlur={(e)=>{
            if(e.target.value){
              return
            } else {
            const el = e.target;
            el.value = 'Name of the form'
          }
          }}
          onClick={(e)=>{
            const el = e.target;
            el.value = '';
           }}
           onChange={(e)=>{
             const value = e.target.value;           
             props.changeName(value)
           }}
          
           value={props.name}
           
        >
          
        </input>
        <input
          type={'text'}
          className="form-desc"
          onBlur={(e)=>{
            if(e.target.value){
              return
            } else {           
            const el = e.target;
            el.value = 'Description of the form...'
          }
          }}
          onChange={(e)=>{
            const value = e.target.value;
           props.changeDesc(value)
          }}
          onClick={(e)=>{
            const el = e.target;
            el.value = '';
           }}
           value={props.desc}
           
        >
          
        </input>
      </div>
    )
}

export default FormInfo