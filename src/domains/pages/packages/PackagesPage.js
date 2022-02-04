import React from 'react';
import {Layout, Typography, Card, Dropdown, Menu} from 'antd'
import {HomeFilled, FolderOpenFilled, ToolFilled, GithubFilled, InstagramFilled, FacebookFilled, GlobalOutlined, MenuOutlined, CloseSquareOutlined } from '@ant-design/icons'
import ReactCountryFlag from "react-country-flag"
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../../../styles/PackagesPage.css';


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

function PackagesPage() {
  const {t} = useTranslation()
 
  
  return (
    <div className="packages-page" >
      <Layout className='layout-packages'>
       <Sider className='sidebar' style={{display:'flex',flexDirection: 'column', maxWidth: 'none', minWidth: 'none', width:'100%',  zIndex: 15}}>
      
        <div className='header-layout'>
        <CloseSquareOutlined style={{ fontSize: '2rem', color: 'white', width: '2rem'}} className={'close-menu'} onClick={()=>{
          document.querySelector('.sidebar').style.display= 'none'
        }}/>
          <div className='logo'></div>
          <Title level={2} style={{margin: 0}}>Front-end Dev</Title>
          <Title level={3} style={{margin: 0}}>Javascript/React</Title>
        </div>
        <div  style={{backgroundColor: '#fff', height: '100%', overflow: 'hidden',}}>
          <ul style={{width: '100%', height: '100%',margin: 0, display: 'flex', padding: 0,  flexDirection: 'column', listStyle: 'none', height: 'fit-content'}} onClick={()=>{
            document.querySelector('.sidebar').style.display= 'none'
          }} >
            
              
            <Link to='/myapp' style={{margin: 0, padding: '1rem', borderBottom: '1px solid #2375ab', }}  className='single-link home-link'>
            <HomeFilled style={{marginRight: '0.5rem'}} className='home-filled'/>{t('home')}
            </Link>
            
           
            
              <Link to='/npm-packages' style={{margin: 0, padding: '1rem', borderBottom: '1px solid #2375ab', }}  className='single-link pkg-link'>
              <FolderOpenFilled style={{marginRight: '0.5rem'}} className='folder-open'/>{t('packages')}
              </Link>
           
           
            
              <Link to='/tools' style={{margin: 0, padding: '1rem', borderBottom: '1px solid #2375ab', }}  className='single-link tool-link'>
              <ToolFilled style={{marginRight: '0.5rem'}} className='tool-filled'/>{t('tools')}
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
    <Content className="packages-content" style={{height: '100%'}}>
      
      <Card title={t('choose_package')} extra={
        <Dropdown overlay={langMenu} placement='bottomCenter' trigger={['click']} className=''>
          <GlobalOutlined style={{position: 'relative', fontSize: '2rem',   color: 'white', cursor: 'pointer', }}/>
          
        </Dropdown>
        
      } headStyle={{borderBottom:'1px solid white', color: 'white', fontSize: '1.2rem', fontWeight: 'bolder'}} bordered='false' style={{zIndex: '0' ,width: '100%', backgroundColor: "#2375ab", position:'relative'}} className='package-container'>
        
        <MenuOutlined className='menu-icon' style={{position: 'absolute', top: '1rem', right: '10rem', fontSize: '2rem', color:'white',cursor:'pointer'}} onClick={()=>{
          document.querySelector('.sidebar').style.display = 'block'
        }}/>
        <ul style={{width: '100%', height: '100%', display: 'flex',margin: 0, justifyContent: 'start', alignContent: 'center', textAlign: 'center'}}>
          <Link className='fb-cont' to='formbuilder' style={{padding: '1rem', margin: '0.4rem', backgroundColor: 'white', color: '#2375ab', fontWeight: 'bolder', borderRadius: '1rem',fontSize: '0.9rem ', cursor: 'pointer'}}>{t('form_builder')}
          <p style={{ borderTop: '1px #2375ab solid' , paddingTop: '0.3rem', margin: 0}}>{t('fbuilder_desc1')}<br></br>{t('fbuilder_desc2')}</p></Link>
        </ul>

      </Card>
      
      <div className="packages-display"  style={{overflowY: 'auto', position:'relative'}}>
        <Outlet />
      </div>
    </Content>
    </Layout>
    </div>
     
  );
}

export default PackagesPage;
