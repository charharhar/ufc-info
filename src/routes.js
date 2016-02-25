import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import FightsIndex from './components/fights-index';
import EventShow from './components/event-show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FightsIndex} />
    <Route path="events/:id" component={EventShow} />
  </Route>
)
