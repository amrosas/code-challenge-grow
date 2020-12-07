import { connect } from 'react-redux';
import { loadPlanets } from '../actions/filters';
import FilterableGrid from '../components/FilterableGrid';

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(loadPlanets());
    }
  };
};

const mapStateToProps = state => {
  return {
    filteredPlanets: state.filters.filteredPlanets,
    loading: state.filters.loading,
    initialLoad: state.filters.initialLoad
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableGrid);