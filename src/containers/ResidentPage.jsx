import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { loadResidentData } from '../actions/filters';
import { getDataFromUrl } from '../services/SWAPI';

const ResidentPage = ({resident, onFirstLoad}) => {
  const { residentId } = useParams();
  const [ films, setFilms ] = useState([]);
  const [ vehicles, setVehicles ] = useState([]);
  const [ starships, setStarships ] = useState([]);
  const [ species, setSpecies ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (!resident) {
      onFirstLoad(residentId)
    }
  }, [resident, onFirstLoad, residentId]);

  useEffect(() => {
    if (resident) {
      setLoading(true)
      const filmsPromises = resident.films.map(film => getDataFromUrl(film))
      const vehiclesPromises = resident.vehicles.map(vehicle => getDataFromUrl(vehicle))
      const starshipsPromises = resident.starships.map(starship => getDataFromUrl(starship))
      const speciesPromises = resident.species.map(specie => getDataFromUrl(specie))

      const filmsPromiseAll = Promise.all(filmsPromises).then(res => setFilms(res));
      const vehiclesPromiseAll = Promise.all(vehiclesPromises).then(res => setVehicles(res));
      const starshipsPromiseAll = Promise.all(starshipsPromises).then(res => setStarships(res));
      const speciesPromiseAll = Promise.all(speciesPromises).then(res => setSpecies(res));

      Promise.all([filmsPromiseAll, vehiclesPromiseAll, starshipsPromiseAll, speciesPromiseAll]).then(res => setLoading(false))
    }
  }, [resident]);

  if (!resident || loading) {
    return (
      <div className='loader'>
        <Spin />
      </div>
    )
  }

  return (
    <ul>
      <li>
        name: {resident.name}
      </li>
      <li>
        height: {resident.height}
      </li>
      <li>
        mass: {resident.mass}
      </li>
      <li>
        hair color: {resident.hair_color}
      </li>
      <li>
        skin color: {resident.skin_color}
      </li>
      <li>
        eye color: {resident.eye_color}
      </li>
      <li>
        birth year: {resident.birth_year}
      </li>
      <li>
          gender: {resident.gender}
      </li>
      <li>
          homeworld: {resident.homeworld}
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
        species: 
        <ul>
          {species.map(specie => (
            <li>
              {specie.name}
            </li>
          ))}
        </ul>
      </li>
      <li>
        vehicles:
        <ul>
          {vehicles.map(vehicle => (
            <li>
              {vehicle.name}
            </li>
          ))}
        </ul>
      </li>
      <li>
        starships:
        <ul>
          {starships.map(starship => (
            <li>
              {starship.name}
            </li>
          ))}
        </ul>
      </li>
      <li>
        created on: {resident.created}
      </li>
      <li>
        edited on: {resident.edited}
      </li>
      <li>
        url: {resident.url}
      </li>

    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onFirstLoad: resident => {
      dispatch(loadResidentData(resident))
    }
  }
}

const mapStateToprops = state => ({
  resident: state.filters.selectedResident
})

export default connect(mapStateToprops, mapDispatchToProps)(ResidentPage)