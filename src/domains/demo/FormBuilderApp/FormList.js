import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/FormList.css';
function FormList(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="form-holder">
      <h4
        onClick={() => {
          setOpen(!open);
        }}
      >
        Saved forms!
      </h4>

      {open ? (
        <ul className="form-list">
          <hr></hr>
          {props.forms.map(form => {
            return (
              <div className="form-item-holder" key={form.formID}>
                <Link
                  to={`/displayform:${form.formID}`}
                  className="form-item"
                  key={form.formID}
                  id={form.formID}
                  onClick={() => {
                    props.setSelectedForm({
                      formDesc: form.formDesc,
                      formID: form.formID,
                      formName: form.formName,
                      inputs: [...form.inputs],
                    });
                  }}
                >
                  {form.formName}
                </Link>
                <i
                  key={form.formID + 1}
                  id={form.formID}
                  onClick={e => {
                    const ID = parseInt(e.target.id);

                    props.deleteForm(ID);
                  }}
                  className="far fa-trash-alt delete-form"
                ></i>
                <i
                  key={form.formID + 2}
                  id={form.formID}
                  className="far fa-edit edit-form"
                  onClick={e => {
                    const editBtn = e.target;
                    const editID = parseInt(editBtn.id);
                    const formToEdit = props.forms.find(
                      form => form.formID === editID
                    );
                    props.setFormEdit(formToEdit);
                    props.setIsEditing(!props.isEditing);
                  }}
                ></i>
              </div>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default FormList;
