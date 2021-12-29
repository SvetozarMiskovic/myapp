import React from 'react';
import '../../../styles/DisplayForm.css';

function DisplayForm(props) {
  return (
    <form
      className="display-form"
      id={props.selectedForm.formID}
      onSubmit={e => {
        e.preventDefault();
        const name = document.querySelector('.display-form-name').textContent;
        const desc = document.querySelector('.display-form-desc').textContent;
        const fields = [...document.querySelectorAll('.display-form-input')];
        const formID = document.querySelector('.display-form').id;

        localStorage.setItem(
          'DISPLAYED FORM RESULT',
          JSON.stringify({
            formName: name,
            formDesc: desc,
            formID: formID,
            inputs: fields.map(f => {
              return {
                type: f.type,
                placeholder: f.placeholder,
                id: f.id,
                value: f.value,
              };
            }),
          })
        );
        alert('Succesfully saved to local storage!');
      }}
    >
      <h2 className="display-form-name">{props.selectedForm.formName}</h2>
      <h4 className="display-form-desc">{props.selectedForm.formDesc}</h4>
      <ul className="display-form-list">
        <hr className="display-form-hr"></hr>
        {props.selectedForm.inputs.map(i => {
          return (
            <input
              key={i.id}
              className="display-form-input"
              type={i.type}
              placeholder={i.placeholder}
              id={i.id}
            ></input>
          );
        })}
      </ul>
      <input
        type="submit"
        className="submit-form"
        value="Submit the form!"
      ></input>
    </form>
  );
}

export default DisplayForm;
