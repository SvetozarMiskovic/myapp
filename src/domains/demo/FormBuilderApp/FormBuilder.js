import React, { useEffect, useState } from 'react';
import AddInput from './AddInput';
import InputHolder from './InputHolder';
import '../../../styles/FormBuilder.css';
import FormList from './FormList';
import { Route, Routes } from 'react-router-dom';
import DisplayForm from './DisplayForm';

function FormBuilder(props) {
  const [sugTypes, setSugTypes] = useState([
    'email',
    'password',
    'text',
    'number',
  ]);

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
      <AddInput inputs={inputs} setInputs={setInputs} forms={forms} />
      {forms.length > 0 ? (
        <FormList
          forms={forms}
          setForms={setForms}
          deleteForm={deleteFormHandler}
          setSelectedForm={props.setSelectedForm}
        />
      ) : null}
      <InputHolder
        setPlaceholder={setPlaceholderHandler}
        setType={setTypeHandler}
        deleteInput={deleteInputHanlder}
        toggleEdit={toggleEditHandler}
        sugTypes={sugTypes}
        setInputs={setInputs}
        inputs={inputs}
        forms={forms}
        setForms={setForms}
      />
    </div>
  );
}

export default FormBuilder;
