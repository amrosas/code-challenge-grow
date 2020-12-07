import React from 'react';
import { Link } from 'react-router-dom';

const LinkItem = ({item, destination, saveSelectedItemInState, children}) => {
  const getPlanetIdFromUrl = planetUrl => {
    debugger;
    return planetUrl.replace(/[^0-9]/g, "")
  }

  return (
    <Link 
      to={`${destination}${getPlanetIdFromUrl(item.url)}`}
      onClick={() => {
        saveSelectedItemInState(item)
      }}
    >
      {children}
    </Link>
  )
}

export default LinkItem;
