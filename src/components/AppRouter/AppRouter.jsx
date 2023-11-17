import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { publicRoute, privateRoute } from '../../router';

const AppRouter = () => {
    const isAuth = useSelector(state => state.auth.auth);

    if (isAuth) {
        return (
            <Switch>
              {privateRoute.map(route =>
                <Route 
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                />
              )}
              <Redirect to='/' />
            </Switch>     
        )
    } else {
        return (
            <Switch>
              {publicRoute.map(route =>
                <Route 
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                />
              )}
              <Redirect to='/' />
            </Switch>     
        )
    }

};

export default AppRouter;
