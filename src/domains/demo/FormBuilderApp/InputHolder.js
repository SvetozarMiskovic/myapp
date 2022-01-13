import React, { useEffect, useState } from 'react';
import '../../../styles/InputHolder.css';

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
        document.querySelector('.form-name').textContent =
          props.initialInfo.name;
        document.querySelector('.form-desc').textContent =
          props.initialInfo.desc;
      }}
    >
      <div className="form-info">
        <input
          type={'text'}
          className="form-name"
          onBlur={(e)=>{
            if(e.target.value){
              return
            } else {
            const el = e.target;
            el.value = 'Name of the form'
          }
          }}
          onClick={(e)=>{
            const el = e.target;
            el.value = '';
           }}
           onChange={(e)=>{
             const value = e.target.value;           
             changeName(value)
           }}
           
           value={name}
           
        >
          
        </input>
        <input
          type={'text'}
          className="form-desc"
          onBlur={(e)=>{
            if(e.target.value){
              return
            } else {           
            const el = e.target;
            el.value = 'Description of the form...'
          }
          }}
          onChange={(e)=>{
            const value = e.target.value;
           changeDesc(value)
          }}
          onClick={(e)=>{
            const el = e.target;
            el.value = '';
           }}
           value={desc}
        >
          
        </input>
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
