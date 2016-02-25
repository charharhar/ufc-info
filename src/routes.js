import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import EventsMain from './components/events-main';
import EventShow from './components/event-show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EventsMain} />
    <Route path="events/:id" component={EventShow} />
  </Route>
)
