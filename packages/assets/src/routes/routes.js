import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '@assets/loadables/Home';
import Settings from '@assets/loadables/Settings';
import NotFound from '@assets/loadables/NotFound';
import FeatureRequest from '@assets/loadables/FeatureRequest';
import MoreApps from '@assets/loadables/MoreApps';
import {routePrefix} from '@assets/config/app';

// eslint-disable-next-line react/prop-types
const Routes = ({prefix = routePrefix}) => (
  <Switch>
    <Route exact path={prefix + '/'} component={Home} />
    <Route exact path={prefix + '/settings'} component={Settings} />
    <Route exact path={prefix + '/feature-request'} component={FeatureRequest} />
    <Route exact path={prefix + '/partners'} component={MoreApps} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
