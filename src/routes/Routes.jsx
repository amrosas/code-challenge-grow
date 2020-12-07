import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react'
import PlanetList from '../containers/PlanetList'
import PlanetPage from '../containers/PlanetPage'
import ResidentPage from '../containers/ResidentPage'
// import Header from '../components/Header'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <PlanetList />
        </Route>
        <Route path='/planet/:planetId'>
          <PlanetPage />
        </Route>
        <Route path='/resident/:residentId'>
          <ResidentPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;