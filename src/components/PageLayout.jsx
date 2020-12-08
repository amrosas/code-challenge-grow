import React from 'react'
import { Layout, Menu } from 'antd';
import './PageLayout.css'
import HeaderBreadCrumb from './HeaderBreadCrumb'

const { Header, Content, Footer } = Layout;

const PageLayout = ({children}) => (
  <Layout className="layout">
    <Header>
      <div className="logo" >
        Grow Code Challenge
      </div>
      <Menu theme="dark" mode="horizontal">
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ margin: '16px 0' }} />
      <div className="site-layout-content">
        <HeaderBreadCrumb className="header-breadcrumb"/>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Created by Agustin Rosas</Footer>
  </Layout>
);

export default PageLayout