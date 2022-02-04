import {Form, Button, Typography, Input, Space} from 'antd';
import React from 'react';
import '../../../styles/DisplayForm.css';

const {Title} = Typography

function DisplayForm(props) {
  return (
    <Form
      className="display-form"
      style={{backgroundColor: '#2375ab', width: '100%', position: 'relative', overflowY: 'auto'}}
      id={props.selectedForm.formID}
      onFinish={e => {
       
        const name = document.querySelector('.display-form-name').textContent;
        const desc = document.querySelector('.display-form-desc').textContent;
        const fields = [...document.querySelectorAll('.display-form-input')];
        const formID = document.querySelector('.display-form').id;

        localStorage.setItem(
          'DISPLAYED FORM RESULT',
          JSON.stringify({
            formName: name,
            formDesc: desc,
            formID: formID,
            inputs: fields.map(f => {
              return {
                type: f.type,
                placeholder: f.placeholder,
                id: f.id,
                value: f.value,
              };
            }),
          })
        );
        alert('Succesfully saved to local storage!');
      }}
    >
      <Space direction='vertical' className='display-form-info' style={{marginBottom: '1rem',padding: '1rem', borderBottom: '1px solid white', width: '100%'}}> 
        <Title level={2} style={{margin: 0, padding: 0, color: 'white'}}className="display-form-name">{props.selectedForm.formName}</Title>
        <Title level={3} style={{margin: 0, padding: 0, color: 'white'}}className="display-form-desc">{props.selectedForm.formDesc}</Title>
      </Space>
      
      <ul className="display-form-list" style={{margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'center'}}>
        
        {props.selectedForm.inputs.map(i => {
          return (
            <Input
              key={i.id}
              className="display-form-input"
              type={i.type}
              placeholder={i.placeholder}
              id={i.id}
              style={{fontSize: '1.5rem', width: 'auto', padding: 0, margin: '1rem'}}
            ></Input>
          );
        })}
      </ul>
      <Button
      style={{color: '#2375ab', padding: '1.5rem',fontSize: '1.3rem',textAlign:'center', margin: '0.8rem', display: 'flex', alignItems: 'center'}}
        htmlType="submit"
        className="submit-form"
        value="Send the form!"
      >Send the form</Button>
    </Form>
  );
}

export default DisplayForm;
