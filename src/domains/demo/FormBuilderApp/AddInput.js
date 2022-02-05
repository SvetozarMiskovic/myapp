import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import '../../../styles/AddInput.css';

const {Title} = Typography

function AddInput(props) {
  const {t} = useTranslation()
  return (
    <div className="add-input" style={{width: '100%'}}>
      
      <span
      style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', gap: '0.5rem',  padding: '0.6rem 0 0.6rem 0',  cursor: 'pointer'}}
        onClick={() => {
          if(props.isEditing){
            const uID = new Date().getTime();
            props.setFormEdit({
              formDesc: props.formEdit.formDesc,
              formName: props.formEdit.formName,
              formID: props.formEdit.formID,
              inputs: props.formEdit.inputs.concat([
                {
                  placeholder: 'Some random text',
                  type: 'text',
                  id: uID,
                  edit: false,
                },
              ]),
            });
          } else {

          
          const uID = new Date().getTime();
          props.setInputs(currentState => {
            return currentState.concat([
              {
                placeholder: 'Some random text',
                type: 'text',
                id: uID,
                edit: false,
              },
            ]);
          });
        }
        }}
        >
        <i className="far fa-plus-square" style={{fontSize: '1.2rem'}}></i>
        <Title level={3} style={{ margin: 0, fontSize: '1.2rem'}} className='addinput-title'>{t('add_inp')}</Title>
      </span>
    </div>
  );
}

export default AddInput;
