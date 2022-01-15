import React from 'react';
import FormInfo from './Edit&Holder comps/FormInfo';
import SingleInput from './Edit&Holder comps/SingleInput';
function EditForm(props) {
  let editInputs = props.formEdit.inputs;

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
  function setEditName(name){
    props.setFormEdit({
      formDesc: props.formEdit.formDesc,
      formName: name,
      formID: props.formEdit.formID,
      inputs: [...editInputs],
    });
  }

  function setEditDesc(desc){
    props.setFormEdit({
      formDesc: desc,
      formName: props.formEdit.formName,
      formID: props.formEdit.formID,
      inputs: [...editInputs],
    });
  }
  return (
    <form
      id={props.formEdit.formID}
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault(); 
        const newForms = props.forms.filter(form=>form.formID !== props.formEdit.formID)         
        newForms.push(props.formEdit)
        props.setForms(newForms)
        alert('Succesfully edited the form!')
        props.setIsEditing(!props.isEditing);
      }}
    >
      <h1 className="edit-mode">EDIT MODE!</h1>
      <FormInfo name={props.formEdit.formName} changeName={setEditName} changeDesc={setEditDesc} desc={props.formEdit.formDesc}/>
      
      {props.formEdit.inputs?.map(inp => {
        return (
          <SingleInput key={inp.id} inp={inp} setPlaceholder={setEditPlaceholder} toggleEdit={switchEdit} deleteInput={deleteEditInput} setType={props.setType} sugTypes={props.sugTypes}/>
          
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
