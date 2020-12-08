import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { loadPlanetData } from '../actions/filters';
import { getDataFromUrl } from '../services/SWAPI';
import ResidentItem from '../components/ResidentItem';
import './PlanetPage.css';

const PlanetPage = ({planet, onFirstLoad}) => {
  const { planetId } = useParams();
  const [ films, setFilms ] = useState([]);
  const [ residents, setResidents ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (!planet) {
      onFirstLoad(planetId)
    }
  }, [planet, onFirstLoad, planetId]);

  useEffect(() => {
    if (planet) {
      setLoading(true)
      const filmsPromises = planet.films.map(film => getDataFromUrl(film))
      const residentsPromises = planet.residents.map(resident => getDataFromUrl(resident))
      const filmsPromiseAll = Promise.all(filmsPromises).then(res => setFilms(res));
      const residentsPromiseAll = Promise.all(residentsPromises).then(res => setResidents(res));
      Promise.all([filmsPromiseAll, residentsPromiseAll]).then(res => setLoading(false))
    }
  }, [planet]);

  if (!planet || loading) {
    return (
      <div className='loader'>
        <Spin />
      </div>
    )
  }

  return (
    <ul>
      <li>
        climate: {planet.climate}
      </li>
      <li>
        created on: {planet.created}
      </li>
      <li>
        diameter: {planet.diameter}
      </li>
      <li>
        edited: {planet.edited}
      </li>
      <li>
        films: 
        <ul>
          {films.map(film => (
            <li>
              {film.title}
            </li>
          ))}
        </ul>
      </li>
      <li>
        gravity: {planet.gravity}
      </li>
      <li>
        name: {planet.name}
      </li>
      <li>
        orbital period: {planet.orbital_period}
      </li>
      <li>
        population: {planet.population}
      </li>
      <li>
        residents: 
        <ul>
          {residents.map(resident => (
            <li>
              <ResidentItem
                resident={resident}
              />
            </li>
          ))}
        </ul>
      </li>
      <li>
        rotation period: {planet.rotation_peroid}
      </li>
      <li>
        surface water: {planet.surface_water}
      </li>
      <li>
        terrain: {planet.terrain}
      </li>
      <li>
        url: {planet.url}
      </li>

    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onFirstLoad: planet => {
      dispatch(loadPlanetData(planet))
    }
  }
}

const mapStateToprops = state => ({
  planet: state.filters.selectedPlanet
})

export default connect(mapStateToprops, mapDispatchToProps)(PlanetPage)