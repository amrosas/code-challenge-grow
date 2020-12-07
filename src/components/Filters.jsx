import React from 'react';

import { Input } from 'antd';

const { Search } = Input

const Filters = ({onFilterChange, onClearFilters}) => {

  const onSearch = (searchText) => {
    if (searchText === "") {
      onClearFilters()
    } else {
      onFilterChange(searchText)
    }
  };

  return (
    <>
      <Search
        allowClear
        style={{
          width: 200,
        }}
        onSearch={onSearch}
        placeholder="Search planets"
      />
      <br />
    </>
  );
};

export default Filters