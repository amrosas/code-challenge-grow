import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const Header = () => {

  const location = useLocation();

  const url = location.pathname;

  let extraBreadcrumbitems = []

  if (url !== "/") {
    const splitUrls = url.split('/');
  
    splitUrls.shift();
  
    const urlsArray = splitUrls.map((path, index) => {
      if (index % 2 === 0) 
        return [path, splitUrls[index + 1]]
    }).filter(it => it)
   
    extraBreadcrumbitems = urlsArray.map(urls => {
      const url = `/${urls[0]}/${urls[1]}`
      const breadCrumbName = `${urls[0]} ${urls[1]}`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadCrumbName}</Link>
        </Breadcrumb.Item>
      );
    })

  }
  
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbitems);

  return (
    <Breadcrumb>{breadcrumbItems}</Breadcrumb>
  );
};

export default Header