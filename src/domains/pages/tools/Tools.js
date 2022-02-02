import React from 'react';
import {Layout, Typography, Card} from 'antd'
import {HomeFilled, FolderOpenFilled, ToolFilled, GithubFilled, InstagramFilled, FacebookFilled, StopOutlined  } from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../../styles/Tools.css'
const {Sider, Footer, Content} = Layout
const {Title} = Typography

function Tools() {
  const {t} = useTranslation();
  return (
    <div className='tools-page'>
    <Layout className='layout-packages'>
    <Sider className='sidebar' >
   
     <div className='header-layout'>
       
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
 <Content className='tools-content'>
    <Card title={t('under_construction')} className='tools-info' style={{backgroundColor: '#2375ab'}} headStyle={{color: 'white', fontWeight: 'bold',fontSize:'1.4rem', }}>
    <StopOutlined style={{fontSize: '4rem', color: 'white'}}/> 
    <Title level={1} style={{color: 'white'}}>{t('site_under_construction')}</Title>
    </Card>
 </Content>
 </Layout>
 </div>
  );
}

export default Tools;
