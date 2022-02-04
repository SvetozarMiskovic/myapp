import React from "react";

function InputField(props){
    return(
        <input
          className="input-field"
          style={{fontWeight: 'bolder'}}
          id={props.inp.id}
          placeholder={props.inp.placeholder}
          type={props.inp.type}
          onChange={e => {
            if (props.inp.edit) {
              const targetInp = parseInt(e.target.id);

              const value = e.target.value;

              if (value) {
                props.setPlaceholder(targetInp, value);
              }
            } else return;
          }}
        ></input>
    )
}

export default InputField