import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button } from 'antd';
import '../../../styles/FormList.css';
import SingleForm from './FormList comps/SingleForm';
import EmptyList from './FormList comps/EmptyList';

function FormList(props) {
    const {t} = useTranslation()
    return (
      <Card title={t('saved_forms')} extra={<Button type='secondary' style={{color: '#2375ab', fontWeight: 'bold'}} onClick={()=>{
        props.setForms([])
      }}>{t('delete_all')}</Button>}headStyle={{color: 'white',fontWeight: 'bolder', fontSize: '1.4rem', borderBottom: '1px solid white'}} style={{width: '100%', backgroundColor: '#2375ab', height:'100%', }} className="form-holder">  
      {props.forms.length > 0 ? null : <EmptyList/>}
      {<ul className="form-list" style={{margin: 0, padding: 0, flexWrap: 'wrap', display:'flex', flexDirection: 'column',  width: '100%'}}>
        
            {props.forms.map(form => {
              return (
                <SingleForm key={form.formID} form={form} forms={props.forms} isEditing={props.isEditing} setIsEditing={props.setIsEditing} setFormEdit={props.setFormEdit} deleteForm={props.deleteForm} setSelectedForm={props.setSelectedForm}/>
                
              );
            })}
      </ul>}
        
      </Card>
    );
  
   
    
  }
  


export default FormList;
