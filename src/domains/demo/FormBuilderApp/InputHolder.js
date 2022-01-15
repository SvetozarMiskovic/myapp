import React, { useEffect, useState } from 'react';
import '../../../styles/InputHolder.css';
import FormInfo from './Edit&Holder comps/FormInfo';
import SingleInput from './Edit&Holder comps/SingleInput';

function InputHolder(props) {
  const [name, setName] = useState('Name of the form')
  const [desc, setDesc] = useState('Description of the form')
   useEffect(() => {
    localStorage.setItem('FORMS', JSON.stringify(props.forms));
  });

  function changeName(name){
    setName(name)
  }
  function changeDesc(desc){
    setDesc( desc)
  }
  return (
    <form
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        const id = new Date().getTime();
        
        props.setForms(
          props.forms.concat([
            {
              formName: name,
              formDesc: desc,
              inputs: [...props.inputs],
              formID: id,
            },
          ])
        );
        alert(
          'Succesfully submited the form! Click on "Saved Forms" to view them!'
        );
        props.setInputs([
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

      }}
    >
      <FormInfo name={name} changeName={changeName} changeDesc={changeDesc} desc={desc}/>

      {props.inputs.map(inp => {
        return (
          <SingleInput key={inp.id}inp={inp} setPlaceholder={props.setPlaceholder} toggleEdit={props.toggleEdit} deleteInput={props.deleteInput} setType={props.setType}sugTypes={props.sugTypes}/>
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
