import React, { useEffect } from 'react';
import '../../../styles/InputHolder.css';

function InputHolder(props) {
  useEffect(() => {
    localStorage.setItem('FORMS', JSON.stringify(props.forms));
  });
  return (
    <form
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        const id = new Date().getTime();
        const formDesc = document.querySelector('.form-desc').textContent;
        const formName = document.querySelector('.form-name').textContent;
        props.setForms(
          props.forms.concat([
            {
              formName: formName,
              formDesc: formDesc,
              inputs: [...props.inputs],
              formID: id,
            },
          ])
        );
        alert(
          'Succesfully submited the form! Click on "Saved Forms" to view them!'
        );
      }}
    >
      <div className="form-info">
        <h3
          suppressContentEditableWarning={true}
          contentEditable="true"
          className="form-name"
        >
          Name of the form
        </h3>
        <h5
          suppressContentEditableWarning={true}
          contentEditable="true"
          className="form-desc"
        >
          Description of the form
        </h5>
      </div>

      {props.inputs.map(inp => {
        return (
          <div key={inp.id} className="single-input">
            <input
              className="input-field"
              id={inp.id}
              placeholder={inp.placeholder}
              type={inp.type}
              onChange={e => {
                if (inp.edit) {
                  const targetInp = parseInt(e.target.id);

                  const value = e.target.value;

                  if (value) {
                    props.setPlaceholder(targetInp, value);
                  }
                } else return;
              }}
            ></input>
            <span>
              {inp.edit ? (
                <i
                  onClick={e => {
                    const targetInp = parseInt(e.target.id);
                    props.toggleEdit(targetInp);
                    const inputField =
                      e.target.parentElement.previousElementSibling;

                    inputField.value = '';
                  }}
                  id={inp.id}
                  className="far fa-check-square"
                ></i>
              ) : (
                <i
                  onClick={e => {
                    const targetInp = parseInt(e.target.id);
                    props.toggleEdit(targetInp);
                  }}
                  id={inp.id}
                  className="far fa-edit"
                ></i>
              )}

              <i
                onClick={e => {
                  const targetInp = parseInt(e.target.id);
                  props.deleteInput(targetInp);
                }}
                id={inp.id}
                className="far fa-trash-alt"
              ></i>
            </span>
            {inp.edit ? (
              <div className="edit-pick">
                <ul id={inp.id} className="edit-list">
                  <p>Choose input type!</p>
                  {props.sugTypes.map(t => {
                    return (
                      <div
                        onClick={e => {
                          const element = e.target;
                          const type = element.textContent;
                          const parentElement = e.target.parentElement;
                          const id = parseInt(parentElement.id);

                          props.setType(id, type);
                        }}
                        className="option"
                        key={t}
                      >
                        {t}
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        );
      })}
      <input
        type="submit"
        className="submit-form"
        value="Submit the form!"
      ></input>
    </form>
  );
}

export default InputHolder;
