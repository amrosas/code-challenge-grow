import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const Header = () => {

  const history = useHistory();

  // debugger;
  // const extraBreadcrumbItems = history.location.map((page, index) => {
  //   const url = page.pathname;
  //   const splitUrl = url.split('/');
  //   const breadCrumbName = splitUrl.join(" ");
  //   return (
  //     <Breadcrumb.Item key={url}>
  //       <Link to={url}>{breadCrumbName}</Link>
  //     </Breadcrumb.Item>
  //   );
  // });
  
  console.log(history)
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat([]);

  return (
    <>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </>
  );
};

export default Header