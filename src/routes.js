import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppToolBar from './components/AppToolBar';
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <AppToolBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes