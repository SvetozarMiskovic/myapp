import React from 'react';
import '../../../styles/InputHolder.css'
import { useTranslation } from 'react-i18next';
import FormInfo from './Edit&Holder comps/FormInfo';
import SingleInput from './Edit&Holder comps/SingleInput';
import {Form, Button, Typography} from 'antd'
import AddInput from './AddInput';

const {Title} = Typography

function EditForm(props) {
  const {t} = useTranslation()
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
    <Form
    style={{display: 'flex', gap: '0',flexDirection: 'row',width: '100%',height: '100%', backgroundColor: '#2375ab',}}
      id={props.formEdit.formID}
      autoComplete="off"
      onFinish={e => {
      
        const newForms = props.forms.filter(form=>form.formID !== props.formEdit.formID)         
        newForms.push(props.formEdit)
        props.setForms(newForms)
        alert('Succesfully edited the form!')
        props.setIsEditing(!props.isEditing);
      }}
    >
      <div className='form-options' style={{width: 'fit-content', display: 'flex', flexDirection: 'column'
     , alignItems: 'center', borderRight: '0.7px solid white'}}>
       <Title level={2} style={{color: 'white', margin: '0', fontSize: '1.4rem'}}>EDIT MODE</Title>
       <AddInput inputs={props.inputs} setInputs={props.setInputs} forms={props.forms} formEdit={props.formEdit} setFormEdit={props.setFormEdit} isEditing={props.isEditing}/>
      <Button
      style={{ cursor: 'pointer' , fontWeight: 'bolder',  textAlign: 'center', fontSize: '1rem', alignSelf: 'center', color: '#2375ab',}}
        htmlType="submit"
        className="submit-form"
        
      >{t('sub_form')}</Button>
      
      </div>
      <div className='form-fields' style={{width: '100%'}}>
        <FormInfo name={props.formEdit.formName} changeName={setEditName} changeDesc={setEditDesc} desc={props.formEdit.formDesc}/>
        {props.formEdit.inputs?.map(inp => {
          return (
            <SingleInput key={inp.id} inp={inp} setPlaceholder={setEditPlaceholder} toggleEdit={switchEdit} deleteInput={deleteEditInput} setType={props.setType} sugTypes={props.sugTypes}/>
            
          );
        })}
      </div>
    </Form>
  );
}

export default EditForm;
