import React, { useEffect, useState } from 'react';
import AddInput from './AddInput';
import InputHolder from './InputHolder';
import '../../../styles/FormBuilder.css';
import FormList from './FormList';
import EditForm from './EditForm';

function FormBuilder(props) {
  const [formEdit, setFormEdit] = useState();
  const [sugTypes, setSugTypes] = useState([
    'email',
    'password',
    'text',
    'number',
  ]);
  const [initialInfo, setInitialinfo] = useState({
    name: 'Name of the form',
    desc: 'Description of the form...',
  });
  const [forms, setForms] = useState(() => {
    const lsforms = JSON.parse(localStorage.getItem('FORMS'));
    return lsforms ? lsforms : [];
  });
  const [inputs, setInputs] = useState([
    {
      placeholder: 'Some random text',
      type: 'text',
      id: 1,
      edit: false,
    },
    {
      placeholder: 'Some random text',
      type: 'text',
      id: 2,
      edit: false,
    },
  ]);
  useEffect(() => {
    localStorage.setItem('INPUTS', JSON.stringify(inputs));
  });
  function toggleEditHandler(id) {
    setInputs(
      inputs.map(i => {
        if (i.id !== id) return i;
        return {
          ...i,
          edit: !i.edit,
        };
      })
    );
  }

  function deleteInputHanlder(id) {
    setInputs(
      inputs.filter(i => {
        return i.id !== id;
      })
    );
  }

  function setTypeHandler(id, type) {
    setInputs(
      inputs.map(i => {
        if (i.id !== id) return i;
        return {
          ...i,
          type: `${type}`,
        };
      })
    );
  }

  function setPlaceholderHandler(id, placeholder) {
    setInputs(
      inputs.map(i => {
        if (i.id !== id) return i;
        return {
          ...i,
          placeholder: String(placeholder),
        };
      })
    );
  }

  function deleteFormHandler(id) {
    setForms(
      forms.filter(f => {
        return f.formID !== id;
      })
    );
  }

  return (
    <div className="form-builder">
      <div className='formbuilder-main' style={{width: '100%', height: 'auto'}}>
   
      {!props.isEditing ? (
        <InputHolder
          initialInfo={initialInfo}
          setInitialinfo={setInitialinfo}
          isEditing={props.isEditing}
          setIsEditing={props.setIsEditing}
          setPlaceholder={setPlaceholderHandler}
          setType={setTypeHandler}
          deleteInput={deleteInputHanlder}
          toggleEdit={toggleEditHandler}
          sugTypes={sugTypes}
          setInputs={setInputs}
          inputs={inputs}
          forms={forms}
          setForms={setForms}
          formEdit={formEdit}
        />
      ) : (
        <EditForm
          setFormEdit={setFormEdit}
          formEdit={formEdit}
          sugTypes={sugTypes}
          isEditing={props.isEditing}
          setIsEditing={props.setIsEditing}
          forms={forms}
          setForms={setForms}
        />
      )}
      </div>
   
      
      <div className='formbuilder-forms'>
      
        <FormList
          isEditing={props.isEditing}
          setIsEditing={props.setIsEditing}
          forms={forms}
          setForms={setForms}
          deleteForm={deleteFormHandler}
          setSelectedForm={props.setSelectedForm}
          formEdit={formEdit}
          setFormEdit={setFormEdit}
        />
      
      </div>
    </div>
  );
}

export default FormBuilder;
