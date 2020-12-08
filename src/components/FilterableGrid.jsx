import React from 'react';
import { List } from 'antd'
import { Spin } from 'antd';
import Filters from '../containers/PlanetFilters';
import PlanetItem from './PlanetItem';

class FilterableGrid extends React.Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {

    const {filteredPlanets, loading, initialLoad} = this.props;

    if (loading || initialLoad) {
      return (
        <div className='loader'>
          <Spin />
        </div>
    )}

    return (
      <>
        <Filters/>

        <List
          itemLayout='horizontal'
          size='large'
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 10
          }}
          dataSource={filteredPlanets}
          renderItem={(item) => (
            <List.Item
              key={item.name}
            >
              <PlanetItem planet={item}></PlanetItem>
            </List.Item>
          )}
        ></List>
      </>
    )
  }
}

export default FilterableGrid;