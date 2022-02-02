import React, { useEffect, useState } from 'react';
import '../../../styles/InputHolder.css';
import FormInfo from './Edit&Holder comps/FormInfo';
import SingleInput from './Edit&Holder comps/SingleInput';
import AddInput from './AddInput';
import {Form, Button} from 'antd'


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
    <Form
    style={{display: 'flex', gap: '0',flexDirection: 'row',width: '100%',height: '100%', backgroundColor: '#2375ab',}}
      autoComplete="off"
      onFinish={e => {
        
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
        changeName('Name of the form!')
        changeDesc('Description of the form!')

      }}
    >
      
      <div className='form-options' style={{width: 'fit-content', display: 'flex', flexDirection: 'column'
     , alignItems: 'center', borderRight: '0.7px solid white'}}>
      <AddInput inputs={props.inputs} setInputs={props.setInputs} forms={props.forms} formEdit={props.formEdit} setFormEdit={props.setFormEdit} isEditing={props.isEditing}/>
         <Button
         style={{ cursor: 'pointer' , fontWeight: 'bolder',  textAlign: 'center', fontSize: '1rem', alignSelf: 'center', backgroundColor: 'white', color: '#2375ab'}}
         type="text"
        htmlType='submit'
        className="submit-form"
        
      >Submit the form!</Button> 
     
      </div>
       
     
     <div className='form-fields' style={{width: '100%'}}>
        <FormInfo name={name} changeName={changeName} changeDesc={changeDesc} desc={desc}/>
        
        {props.inputs.map(inp => {
          return (
            <SingleInput key={inp.id}inp={inp} setPlaceholder={props.setPlaceholder} toggleEdit={props.toggleEdit} deleteInput={props.deleteInput} setType={props.setType}sugTypes={props.sugTypes}/>
          );
        })}
     </div>

        
    
      
         
      
      
      
    </Form>
  );
}

export default InputHolder;
