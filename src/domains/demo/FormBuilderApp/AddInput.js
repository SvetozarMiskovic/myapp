import React from 'react';
import '../../../styles/AddInput.css';

function AddInput(props) {
  return (
    <div className="add-input">
      <h3>Create an input field!</h3>
      <span
        onClick={() => {
          if(props.isEditing){
            const uID = new Date().getTime();
            props.setFormEdit({
              formDesc: props.formEdit.formDesc,
              formName: props.formEdit.formName,
              formID: props.formEdit.formID,
              inputs: props.formEdit.inputs.concat([
                {
                  placeholder: 'Some random text',
                  type: 'text',
                  id: uID,
                  edit: false,
                },
              ]),
            });
          } else {

          
          const uID = new Date().getTime();
          props.setInputs(currentState => {
            return currentState.concat([
              {
                placeholder: 'Some random text',
                type: 'text',
                id: uID,
                edit: false,
              },
            ]);
          });
        }
        }}

      >
        <i className="far fa-plus-square"></i>
      </span>
    </div>
  );
}

export default AddInput;
