import {
  CHANGE_FILTER,
  CLEAR_FILTER,
  LOAD_PLANETS_PENDING,
  LOAD_PLANETS_SUCCESS,
  LOAD_PLANETS_FAILURE,
  SELECT_PLANET,
  SELECT_RESIDENT,
} from '../actions/types';

const initialState = {
  loading: false,
  initialLoad: true,
  planets: [],
  filter: null,
  filteredPlanets: [],
  selectedPlanet: null,
  selectedResident: null,
  error: null
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter,
        filteredPlanets: action.filteredPlanets
      };
    
    case CLEAR_FILTER:
      return {
        ...state,
        filteredPlanets: state.planets
      };
    
    case LOAD_PLANETS_PENDING:
      return {
        ...state,
        loading: true
      };
    case LOAD_PLANETS_SUCCESS:
      return {
        ...state,
        loading: false,
        initialLoad: false,
        planets: action.planets,
        filteredPlanets: action.planets
      };
    case LOAD_PLANETS_FAILURE:
      return {
        ...state,
        loading: false,
        initialLoad: false,
        error: action.error
      };
    case SELECT_PLANET:
      return {
        ...state,
        selectedPlanet: action.selectedPlanet
      };
    case SELECT_RESIDENT:
      return {
        ...state,
        selectedResident: action.selectedResident
      }
    default:
      return state;
  }
}