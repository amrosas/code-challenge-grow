import React from 'react';
import { connect } from 'react-redux';
import { onSelectResident } from '../actions/filters';
import LinkItem from './LinkItem';

const ResidentItem = ({resident, onSelectResident}) => {

  return (
    <LinkItem
      item={resident}
      destination='/resident/'
      saveSelectedItemInState={onSelectResident}
    >
      {resident.name}
    </LinkItem>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectResident: resident => {
      dispatch(onSelectResident(resident))
    }
  }
}

export default connect(null, mapDispatchToProps)(ResidentItem)
