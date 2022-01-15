import React from "react";

function Buttons(props){
    return(
        <span>
          {props.inp.edit ? (
            <i
              onClick={e => {
                const targetInp = parseInt(e.target.id);
                props.toggleEdit(targetInp);
                const inputField =
                  e.target.parentElement.previousElementSibling;

                inputField.value = '';
              }}
              id={props.inp.id}
              className="far fa-check-square"
            ></i>
          ) : (
            <i
              onClick={e => {
                const targetInp = parseInt(e.target.id);
                props.toggleEdit(targetInp);
              }}
              id={props.inp.id}
              className="far fa-edit"
            ></i>
          )}

          <i
            onClick={e => {
              const targetInp = parseInt(e.target.id);
              props.deleteInput(targetInp);
            }}
            id={props.inp.id}
            className="far fa-trash-alt"
          ></i>
        </span>
    )
}

export default Buttons