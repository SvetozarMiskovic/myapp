import React from 'react';
import {Layout, Typography, Card, Menu, Dropdown} from 'antd'
import {HomeFilled, FolderOpenFilled, ToolFilled, GithubFilled, InstagramFilled, FacebookFilled, StopOutlined, CloseSquareOutlined, MenuOutlined, GlobalOutlined  } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag"
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../../../styles/Tools.css'
const {Sider, Footer, Content} = Layout
const {Title} = Typography

const languages = [{
  code: 'en',
  codeName: 'English',
  countryCode: 'gb'
},{
  code: 'rs',
  codeName: 'Srpski',
  countryCode: 'rs'
}]

const langMenu=(
  <Menu style={{textAlign: 'center'}}>
    {languages.map(lang=>{
      return (
        <Menu.Item style={{fontSize: '1.3rem', display:'flex', textAlign: 'center', zIndex: 10}} key={lang.code} onClick={()=>i18next.changeLanguage(lang.code)} >
          <ReactCountryFlag countryCode={lang.countryCode} style={{marginRight: '0.5rem'}} svg /> <Title level={5} style={{color: '#2375ab'}} data-id={lang.codeName} >{lang.codeName}</Title>
        </Menu.Item>
      )
    })}
  </Menu>
)

function Tools() {
  const {t} = useTranslation();
  return (
    <div className='tools-page'>
    <Layout className='layout-packages'>
    <Sider className='sidebar' style={{ maxWidth: 'none', minWidth: 'none', width:'100%',  zIndex: 15}}>
   
     <div className='header-layout'>
     <CloseSquareOutlined style={{ fontSize: '2rem', color: 'white', width: '2rem'}} className={'close-menu'} onClick={()=>{
          document.querySelector('.sidebar').style.display= 'none'
        }}/>
       <div className='logo'></div>
       <Title level={2} style={{margin: 0}}>Front-end Dev</Title>
       <Title level={3} style={{margin: 0}}>Javascript/React</Title>
     </div>
     <div  style={{backgroundColor: '#fff', height: '100%', overflow: 'hidden',}}>
       <ul style={{width: '100%', margin: 0, display: 'flex', padding: 0,  flexDirection: 'column', listStyle: 'none', height: 'fit-content'}}>
        
         <Link to='/myapp' style={{margin: 0, padding: '1rem', borderBottom: '1px solid #2375ab', }} className='single-link home-link'>
          <HomeFilled className='home-filled' style={{marginRight: '0.5rem'}}/>{t('home')}
         </Link>
         
        <Link to='/npm-packages' style={{margin: 0, padding: '1rem', borderBottom: '1px solid #2375ab', }} className='single-link pkg-link'>
          <FolderOpenFilled className='folder-open' style={{marginRight: '0.5rem'}}/>{t('packages')}
        </Link>
             
        <Link to='/tools' style={{margin: 0, padding: '1rem', borderBottom: '1px solid #2375ab', }} className='single-link tool-link'>
          <ToolFilled className='tool-filled' style={{marginRight: '0.5rem'}}/>{t('tools')}
        </Link>
         
         
         
       </ul>
       </div>
       <Footer className='footer-sidebar'>
         <div className='media-links'>
         <div className='github'>
         <GithubFilled onClick={()=>{
           window.open('https://github.com/SvetozarMiskovic', '_blank');
         }}/>
         </div>
         <div className='instagram'>
         <InstagramFilled onClick={()=>{
           window.open('https://www.instagram.com/tosveevsot', '_blank');
         }}/>
         </div>
         <div className='facebook'>
         <FacebookFilled onClick={()=>{
           window.open('https://www.facebook.com/sveto.miskovic', '_blank');
         }}/>
         </div>
         
         </div>
         <Title style={{fontSize: '1rem ', margin: 0, color: 'white'}} level={4} className='created-by'>Created by SM! &copy;2022</Title>
       </Footer>
     
     
 </Sider>
 <MenuOutlined style={{color:'#2375ab', fontSize: '3rem',cursor: 'pointer', margin: '0.4rem',height: '2rem', width: '2rem',  zIndex: 16, position:'absolute',top: '1.5rem', left:'2rem',}} className='menu-icon' onClick={()=>{
        document.querySelector('.sidebar').style.display= 'block'
      }}/>
 <Content className='tools-content'>
      <Dropdown overlay={langMenu} placement='bottomCenter' trigger={['click']} className='lang-dropdown'>
        <GlobalOutlined style={{position: 'absolute', fontSize: '3rem', zIndex: 5, top: '2rem', right: '2rem', color: '#2375ab', cursor: 'pointer'}}/>
      </Dropdown>
    <Card title={t('under_construction')} className='tools-info' style={{backgroundColor: '#2375ab', }} headStyle={{color: 'white', fontWeight: 'bold',fontSize:'1.4rem', }}>
    <StopOutlined style={{fontSize: '4rem', color: 'white'}}/> 
    <Title level={1} style={{color: 'white'}}>{t('site_under_construction')}</Title>
    </Card>
 </Content>
 </Layout>
 </div>
  );
}

export default Tools;
