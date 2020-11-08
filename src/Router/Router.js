import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ROUTES from './routes';

const routePrefix = 'POKEDEX_';
const appRoutes = Object.values(ROUTES);
const Router = () => (
  <Switch>
    {appRoutes.map(({exact, path, component}, index) => (
      <Route
        key={`${routePrefix}${index}`}
        exact={exact}
        path={path}
        component={component}
      />
    ))}
    <Route path={'*'}>
      <Redirect to={ROUTES.POKEMON_LIST.path} />
    </Route>
  </Switch>
);

export default Router;
