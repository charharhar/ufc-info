import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/home-page';
import EventsMain from './components/events-main';
import EventShow from './components/event-show';
import FightersMain from './components/fighters-main';
// import FightersShow from './components/fighters-show';
import NewsMain from './components/news-main';
import NewsShow from './components/news-show';
import MediaMain from './components/media-main';
import MediaShow from './components/media-show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="events" component={EventsMain} />
    <Route path="events/:id" component={EventShow} />
    <Route path="fighters" component={FightersMain} />
    <Route path="news" component={NewsMain} />
    <Route path="news/:id" component={NewsShow} />
    <Route path="media" component={MediaMain} />
    <Route path="media/:id" component={MediaShow} />
  </Route>
)
