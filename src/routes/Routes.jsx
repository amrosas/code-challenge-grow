import { Switch, Route } from 'react-router-dom';
import React from 'react'
import PlanetList from '../containers/PlanetList'
import PlanetPage from '../containers/PlanetPage'
import ResidentPage from '../containers/ResidentPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <PlanetList />
      </Route>
      <Route path='/planet/:planetId'>
        <PlanetPage />
      </Route>
      <Route path='/planet/:planetId/resident/:residentId'>
        <ResidentPage />
      </Route>
    </Switch>
  )
}

export default Routes;