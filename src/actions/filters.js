import {
  LOAD_PLANETS_PENDING,
  LOAD_PLANETS_SUCCESS,
  LOAD_PLANETS_FAILURE,
  CHANGE_FILTER,
  CLEAR_FILTER,
  SELECT_PLANET,
  SELECT_RESIDENT
} from './types';

import { getAllPlanets, getPlanetData, getResidentData } from '../services/SWAPI';

export const loadPlanets = () => {
  return async dispatch => {
    dispatch(loadPlanetStarted());

    try {
      const planets = await getAllPlanets();
      dispatch(loadPlanetSuccess(planets));
    } catch (error) {
      console.log('there was an error', error)
      dispatch(loadPlanetFailure(error.message));
    }
  };
};

export const changeFilter = planetName => {
  return (dispatch, getState) => {
    const currentPlanets = getState().filters.filteredPlanets;
    const newFilteredPlanets = currentPlanets.filter(planet => planet.name.indexOf(planetName) >= 0);
    dispatch(changeFilteredPlanets(newFilteredPlanets, planetName));
  };
};

export const clearFilters = () => {
  return dispatch => {
    dispatch(clearFilter())
  }
}

export const onSelectPlanet = planet => {
  return dispatch => {
    dispatch(selectPlanet(planet))
  }
}

export const loadPlanetData = (planetId) => {
  return async (dispatch) => {
    const planetData = await getPlanetData(planetId);
    dispatch(selectPlanet(planetData))
  }
}

export const onSelectResident = resident => {
  return dispatch => {
    dispatch(selectResident(resident))
  }
}

export const loadResidentData = (residentId) => {
  return async (dispatch) => {
    debugger;
    const residentData = await getResidentData(residentId);
    dispatch(selectResident(residentData))
  }
}

const loadPlanetSuccess = planets => ({
  type: LOAD_PLANETS_SUCCESS,
  planets
});

const loadPlanetStarted = () => ({
  type: LOAD_PLANETS_PENDING
});

const loadPlanetFailure = error => ({
  type: LOAD_PLANETS_FAILURE,
  error
});

const changeFilteredPlanets = (filteredPlanets, filter) => ({
  type: CHANGE_FILTER,
  filteredPlanets,
  filter
});

const clearFilter = () => ({
  type: CLEAR_FILTER
});

const selectPlanet = (planet) => ({
  type: SELECT_PLANET,
  selectedPlanet: planet
})

const selectResident = (resident) => ({
  type: SELECT_RESIDENT,
  selectedResident: resident
})