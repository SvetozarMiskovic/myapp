import React from 'react';
import { useState } from 'react';
import '../../../styles/Pocetna.css';
import { Layout,Card, Typography, Menu, Dropdown, Button} from 'antd';
import { Link } from 'react-router-dom';
import {HomeFilled, FolderOpenFilled, ToolFilled, GithubFilled, InstagramFilled, FacebookFilled, MailFilled, SendOutlined, PhoneFilled, CopyOutlined, InfoCircleOutlined } from '@ant-design/icons'
import SucAlert from './SucAlert';

const {Content, Sider, Footer} = Layout
const {Title} = Typography


function Pocetna(props) {
  const [alert, isAlert] = useState(false)

  const aboutMenu=(
    <Menu style={{textAlign: 'center'}}>
      <Menu.Item key={'about-menu'} style={{color: '#2375ab'}}>
        <Title level={5} style={{fontSize: '1rem', display: 'inline', color:'#2375ab'}}>My name is Svetozar Miskovic, I am 24 years old and I work and live in Bosnia and Herzegovina, Banja Luka.<br></br>
        I've been 1y in Software Development and I've gained knowledge of JS, HTML, CSS and React!<br></br>
        For any questions, feel free to reach out to me!</Title>
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
          {/* <Title style={{margin: 0}}>Svetozar Miskovic</Title> */}
          <div className='logo'></div>
          <Title level={2} style={{margin: 0}}>Front-end Dev</Title>
          <Title level={3} style={{margin: 0}}>Javascript/React</Title>
        </div>
        <div className='links-menu'>
          <ul>
            <div className='single-link'>
              <HomeFilled className='home-filled'/>
            <Link to='/myapp' className='home-link'>Home</Link>
            </div>
            <div className='single-link'>
            <FolderOpenFilled className='folder-open'/>
              <Link to='/npm-packages' className='pkg-link'>Packages</Link>
            </div>
            <div className='single-link'>
            <ToolFilled className='tool-filled'/>
              <Link to='/tools' className='tool-link'>Tools</Link>
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
     <Card title={'Contact information!'} className='content-email'  headStyle={{color: 'white', fontWeight: 'bold',fontSize:'1.4rem'}}>
            <div className='email-container'>
              <div className='email-section'>
                <MailFilled style={{color: '#2375ab'}}/>
                <Title level={4} style={{margin: '0 0 0 0.3rem', padding: 0, fontSize: '1.6rem', color:'#2375ab'}}>My email</Title>
              </div>
               <Dropdown overlay={menu} placement='bottomCenter' className='email-dropdown' arrow>
            
                 <Button style={{color: '#2375ab'} } className='send-btn'>Send an email!</Button>
              
              </Dropdown>
          </div>
          <div className='phone-container'>
            <div className='phone-section'>
              
              <PhoneFilled style={{color: '#2375ab', fontSize:'1.6rem'}}/>
              <Title evel={4} style={{margin: '0 0 0 0.3rem', padding: 0, fontSize: '1.7rem', color:'#2375ab'}}>My phone number</Title>
            </div>
            <Dropdown overlay={phoneMenu} placement='bottomCenter' className='phone-dropdown' arrow>
            
                 <Button style={{color: '#2375ab'} } className='send-btn'>Give me a call(Whatsapp/Viber)!</Button>
              
              </Dropdown>
          </div>
          <div className='about-container'>
            <div className='about-section'>
              <InfoCircleOutlined style={{color: '#2375ab', fontSize:'1.6rem'}}/>
              <Title level={4} style={{margin: '0 0 0 0.3rem', padding: 0, fontSize: '1.6rem', color:'#2375ab'}}>About me</Title>
            </div>
            <Dropdown overlay={aboutMenu} placement='bottomCenter' className='about-dropdown' arrow>
            
                 <Button style={{color: '#2375ab'} } className='send-btn'>Read more!</Button>
              
              </Dropdown>
          </div>
          
     </Card>
     
    </Content>
    </Layout>


    </div>
  );
}

export default Pocetna;
