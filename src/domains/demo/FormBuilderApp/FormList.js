import React, { useState } from 'react';

import '../../../styles/FormList.css';
import SavedForms from './FormList comps/SavedForms';
import SingleForm from './FormList comps/SingleForm';
function FormList(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="form-holder">
      <SavedForms setOpen={setOpen} open={open}/>
      

      {open ? (
        <ul className="form-list">
          <hr></hr>
          {props.forms.map(form => {
            return (
              <SingleForm key={form.id} form={form} forms={props.forms} isEditing={props.isEditing} setIsEditing={props.setIsEditing} setFormEdit={props.setFormEdit} deleteForm={props.deleteForm} setSelectedForm={props.setSelectedForm}/>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default FormList;
