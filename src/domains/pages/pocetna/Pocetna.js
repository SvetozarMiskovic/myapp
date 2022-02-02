import React from 'react';
import { useState } from 'react';
import '../../../styles/Pocetna.css';
import { Layout,Card, Typography, Menu, Dropdown, Button} from 'antd';
import {HomeFilled, FolderOpenFilled, ToolFilled, GithubFilled, InstagramFilled, FacebookFilled, MailFilled, SendOutlined, PhoneFilled, CopyOutlined, InfoCircleOutlined, GlobalOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import SucAlert from './SucAlert';
import ReactCountryFlag from "react-country-flag"
import { useTranslation } from 'react-i18next';

const {Content, Sider, Footer} = Layout
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

function Pocetna(props) {
  const {t} = useTranslation();
  const [alert, isAlert] = useState(false)

  const langMenu=(
    <Menu style={{textAlign: 'center'}}>
      {languages.map(lang=>{
        return (
          <Menu.Item style={{fontSize: '1.3rem', display:'flex', textAlign: 'center'}} key={lang.code} onClick={()=>i18next.changeLanguage(lang.code)}>
            <ReactCountryFlag countryCode={lang.countryCode} style={{marginRight: '0.5rem'}} svg /> <Title level={5} style={{color: '#2375ab'}} data-id={lang.codeName} >{lang.codeName}</Title>
          </Menu.Item>
        )
      })}
    </Menu>
  )
  const aboutMenu=(
    <Menu style={{textAlign: 'center'}}>
      <Menu.Item key={'about-menu'} style={{color: '#2375ab'}}>
        <Title level={5} style={{fontSize: '1rem', display: 'inline', color:'#2375ab'}}>{t('read_text1')}<br></br>
        {t('read_text2')}<br></br>
        {t('read_text3')}</Title>
      </Menu.Item>
    </Menu>
  )

  const menu = (
    <Menu style={{textAlign: 'center'}}>
      <Menu.Item key={'email-menu'} style={{color:'#2375ab'}} onClick={()=>{
        window.location = 'mailto:sveto.dev@gmail.com?subject=WS Email'
      }}>
        <SendOutlined /> <Title level={3} style={{fontSize: '1rem', display: 'inline', color:'#2375ab'}}>sveto.dev@gmail.com</Title>
        
      </Menu.Item>
    </Menu>
  )
  
  const phoneMenu=(
    <Menu style={{textAlign: 'center'}}>
      <Menu.Item key={'phone-menu'} style={{color: '#2375ab'}} onClick={()=>{
        const number = '(387)63/791-630'
        navigator.clipboard
        .writeText(number)
        .then(()=>{
          isAlert(!alert)
          
        }).catch(()=>{
          alert('Something went wrong!')
        }
        )}}>
      <CopyOutlined /> <Title level={3} style={{fontSize: '1rem', display: 'inline', color:'#2375ab'}}>(387)63/791-630</Title>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="pocetna">
      {alert ? <SucAlert alert={alert} isAlert={isAlert}/> : null}
      <Layout className='layout-homepage'>
    <Sider className='sidebar' >
      
        <div className='header-homepage'>
          
          <div className='logo'></div>
          <Title level={2} style={{margin: 0}}>Front-end Dev</Title>
          <Title level={3} style={{margin: 0}}>Javascript/React</Title>
        </div>
        <div className='links-menu'>
          <ul>
            <div className='single-link'>
              <HomeFilled className='home-filled'/>
            <Link to='/myapp' className='home-link'>{t('home')}</Link>
            </div>
            <div className='single-link'>
            <FolderOpenFilled className='folder-open'/>
              <Link to='/npm-packages' className='pkg-link'>{t('packages')}</Link>
            </div>
            <div className='single-link'>
            <ToolFilled className='tool-filled'/>
              <Link to='/tools' className='tool-link'>{t('tools')}</Link>
            </div>
            
            
          </ul>
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
        </div>
        
    </Sider>
    <Content className='main-content'>
      <Dropdown overlay={langMenu} placement='bottomCenter' trigger={['click']} className='lang-dropdown'>
        <GlobalOutlined style={{position: 'absolute', fontSize: '3rem', zIndex: 5, top: '2rem', right: '2rem', color: '#2375ab', cursor: 'pointer'}}/>
      </Dropdown>
     <Card title={t('contact_information')} className='content-info' style={{backgroundColor: '#2375ab'}} headStyle={{color: 'white', fontWeight: 'bold',fontSize:'1.4rem'}}>
            <div className='email-container'>
              <div className='email-section'>
                <MailFilled style={{color: '#2375ab'}}/>
                <Title level={4} style={{margin: '0 0 0 0.3rem', padding: 0, fontSize: '1.6rem', color:'#2375ab'}}>{t('my_email')}</Title>
              </div>
               <Dropdown overlay={menu} placement='bottomCenter' className='email-dropdown' arrow>
            
                 <Button style={{color: '#2375ab'} } className='send-btn'>{t('send_email')}!</Button>
              
              </Dropdown>
          </div>
          <div className='phone-container'>
            <div className='phone-section'>
              
              <PhoneFilled style={{color: '#2375ab', fontSize:'1.6rem'}}/>
              <Title evel={4} style={{margin: '0 0 0 0.3rem', padding: 0, fontSize: '1.7rem', color:'#2375ab'}}>{t('my_phone')}</Title>
            </div>
            <Dropdown overlay={phoneMenu} placement='bottomCenter' className='phone-dropdown' arrow>
            
                 <Button style={{color: '#2375ab'} } className='send-btn'>{t('give_a_call')}</Button>
              
              </Dropdown>
          </div>
          <div className='about-container'>
            <div className='about-section'>
              <InfoCircleOutlined style={{color: '#2375ab', fontSize:'1.6rem'}}/>
              <Title level={4} style={{margin: '0 0 0 0.3rem', padding: 0, fontSize: '1.6rem', color:'#2375ab'}}>{t('about_me')}</Title>
            </div>
            <Dropdown overlay={aboutMenu} placement='bottomLeft' className='about-dropdown' arrow>
            
                 <Button style={{color: '#2375ab'} } className='send-btn'>{t('read_more')}</Button>
              
              </Dropdown>
          </div>
          
     </Card>
     
    </Content>
    </Layout>


    </div>
  );
}

export default Pocetna;
