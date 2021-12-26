import react from 'react';
import '../../../styles/AddInput.css';
function AddInput(props) {
  return (
    <div className="add-input">
      <h3>Create an input field!</h3>
      <span
        onClick={() => {
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
        }}
      >
        <i className="far fa-plus-square"></i>
      </span>
    </div>
  );
}

export default AddInput;
