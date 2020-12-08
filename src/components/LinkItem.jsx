import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinkItem = ({item, destination, saveSelectedItemInState, children}) => {
  const location = useLocation();
  const getPlanetIdFromUrl = planetUrl => {
    return planetUrl.replace(/[^0-9]/g, "")
  }

  const currentUrl = location.pathname === "/" ? "" : location.pathname
  return (
    <Link 
      to={`${currentUrl}${destination}${getPlanetIdFromUrl(item.url)}`}
      onClick={() => {
        saveSelectedItemInState(item)
      }}
    >
      {children}
    </Link>
  )
}

export default LinkItem;
