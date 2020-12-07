import React from 'react';
import { connect } from 'react-redux';
import { onSelectPlanet } from '../actions/filters';
import LinkItem from './LinkItem';

const PlanetItem = ({planet, onSelectPlanet}) => {

  return (
    <LinkItem
      item={planet}
      destination='/planet/'
      saveSelectedItemInState={onSelectPlanet}
    >
      {planet.name}
    </LinkItem>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectPlanet: planet => {
      dispatch(onSelectPlanet(planet))
    }
  }
}

export default connect(null, mapDispatchToProps)(PlanetItem)
