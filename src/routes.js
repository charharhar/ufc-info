import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/home-page';
import EventsMain from './components/events-main';
import EventShow from './components/event-show';
import FightersMain from './components/fighters-main';
// import FightersShow from './components/fighters-show';
import NewsMain from './components/news-main';
import MediaMain from './components/media-main';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="events" component={EventsMain} />
    <Route path="events/:id" component={EventShow} />
    <Route path="fighters" component={FightersMain} />
    <Route path="news" component={NewsMain} />
    <Route path="media" component={MediaMain} />
  </Route>
)
