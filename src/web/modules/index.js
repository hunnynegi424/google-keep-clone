import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { KEEP_ROOT_CONTEXT } from '../common';
import GoogleKeep from './GoogleKeep';

const ModuleRoutes = () => {
  return (<Switch>
    <Route
      path={KEEP_ROOT_CONTEXT}
      render={props => <GoogleKeep {...props} />}
    />
  </Switch>);
}

export default ModuleRoutes;
