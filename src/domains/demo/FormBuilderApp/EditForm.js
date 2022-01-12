import React from 'react';

function EditForm(props) {
  const editInputs = props.formEdit.inputs;

  function switchEdit(id) {
    editInputs.map(edit => {
      if (edit.id === id) {
        edit.edit = !edit.edit;
      }
    });
    props.setFormEdit({
      formName: props.formEdit.formName,
      formDesc: props.formEdit.formDesc,
      formID: props.formEdit.formID,
      inputs: [...editInputs],
    });
  }

  function deleteEditInput(id) {
    props.setFormEdit({
      formName: props.formEdit.formName,
      formDesc: props.formEdit.formDesc,
      formID: props.formEdit.formID,
      inputs: editInputs.filter(i => {
        return i.id !== id;
      }),
    });
  }

  function setEditPlaceholder(id, placeholder) {
    editInputs.map(i => {
      if (i.id === id) {
        i.placeholder = placeholder;
      }

      props.setFormEdit({
        formName: props.formEdit.formName,
        formDesc: props.formEdit.formDesc,
        formID: props.formEdit.formID,
        inputs: [...editInputs],
      });
    });
  }

  function setType(id, type) {
    editInputs.map(i => {
      if (i.id === id) {
        i.type = type;
      }
      props.setFormEdit({
        formName: props.formEdit.formName,
        formDesc: props.formEdit.formDesc,
        formID: props.formEdit.formID,
        inputs: [...editInputs],
      });
    });
  }

  return (
    <form
      id={props.formEdit.formID}
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        const formDesc = document.querySelector('.form-desc').textContent;
        const formName = document.querySelector('.form-name').textContent;

        props.setFormEdit({
          formDesc: formDesc,
          formName: formName,
          formID: props.formEdit.formID,
          inputs: [...props.formEdit.inputs],
        });

        console.log(props.formEdit);
        props.setIsEditing(!props.isEditing);
      }}
    >
      <h1 className="edit-mode">EDIT MODE!</h1>
      <div className="form-info">
        <h3
          suppressContentEditableWarning={true}
          contentEditable="true"
          className="form-name"
        >
          {props.formEdit.formName}
        </h3>
        <h5
          suppressContentEditableWarning={true}
          contentEditable="true"
          className="form-desc"
        >
          {props.formEdit.formDesc}
        </h5>
      </div>
      {props.formEdit.inputs?.map(inp => {
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
                    setEditPlaceholder(targetInp, value);
                  }
                } else return;
              }}
            ></input>
            <span>
              {inp.edit ? (
                <i
                  id={inp.id}
                  className="far fa-check-square"
                  onClick={e => {
                    const targetID = parseInt(e.target.id);
                    switchEdit(targetID);
                    const inputField =
                      e.target.parentElement.previousElementSibling;

                    inputField.value = '';
                  }}
                ></i>
              ) : (
                <i
                  id={inp.id}
                  className="far fa-edit"
                  onClick={e => {
                    const targetID = parseInt(e.target.id);

                    switchEdit(targetID);
                  }}
                ></i>
              )}

              <i
                id={inp.id}
                className="far fa-trash-alt"
                onClick={e => {
                  const targetID = parseInt(e.target.id);
                  deleteEditInput(targetID);
                }}
              ></i>
            </span>
            {inp.edit ? (
              <div className="edit-pick">
                <ul id={inp.id} className="edit-list">
                  <p>Choose input type!</p>
                  {props.sugTypes.map(t => {
                    return (
                      <div
                        className="option"
                        key={t}
                        onClick={e => {
                          const element = e.target;
                          const type = element.textContent;
                          const parentElement = e.target.parentElement;
                          const id = parseInt(parentElement.id);

                          setType(id, type);
                        }}
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
        value="Save the edited form!"
      ></input>
    </form>
  );
}

export default EditForm;
