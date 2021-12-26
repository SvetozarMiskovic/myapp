import React, { useState } from 'react';
import AddInput from './AddInput';
import InputHolder from './InputHolder';
import '../../../styles/FormBuilder.css';
function FormBuilder() {
  const [sugTypes, setSugTypes] = useState([
    'email',
    'password',
    'text',
    'number',
  ]);
  const [results, setResults] = useState([]);
  const [inputs, setInputs] = useState([
    { placeholder: 'Some random text', type: 'text', id: 1, edit: false },
    { placeholder: 'Some random text', type: 'text', id: 2, edit: false },
  ]);

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

  return (
    <div className="form-builder">
      <AddInput inputs={inputs} setInputs={setInputs} />

      <InputHolder
        setPlaceholder={setPlaceholderHandler}
        setType={setTypeHandler}
        deleteInput={deleteInputHanlder}
        toggleEdit={toggleEditHandler}
        sugTypes={sugTypes}
        setInputs={setInputs}
        inputs={inputs}
        results={results}
        setResults={setResults}
      />
    </div>
  );
}

export default FormBuilder;
