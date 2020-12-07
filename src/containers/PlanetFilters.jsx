import { connect } from 'react-redux';
import { changeFilter, clearFilters } from '../actions/filters';
import Filters from '../components/Filters';

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: filter => {
      dispatch(changeFilter(filter));
    },
    onClearFilters: () => {
      dispatch(clearFilters())
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Filters);