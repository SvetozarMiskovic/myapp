import React from "react";
import { useTranslation } from "react-i18next";
import {Input, Space, Typography} from "antd"

const {Title} = Typography

function FormInfo(props){
  const {t} = useTranslation()
    return(
<Space className="form-info" direction="vertical" style={{width: '100%',  padding: '1rem', borderBottom: '1px solid white', marginBottom: '0.4rem'}}>
  <Title level={3} style={{color: 'white'}}>{t('form_info')}</Title>
        <Input
        style={{width: '100%', fontWeight: 'bold'}}
        placeholder="Name of the form"
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
             props.changeName(value)
           }}
          
           value={props.name}
           
        >
          
        </Input>
        <Input
        style={{width: '100%', fontWeight: 'bold'}}
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
           props.changeDesc(value)
          }}
          onClick={(e)=>{
            const el = e.target;
            el.value = '';
           }}
           value={props.desc}
           
        >
          
        </Input>
      </Space>
    )
}

export default FormInfo