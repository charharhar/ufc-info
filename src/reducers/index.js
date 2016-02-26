import { combineReducers } from 'redux';
import EventsReducer from './reducers-events';
import FightersReducer from './reducers-fighters';
import NewsReducer from './reducers-news';
import MediaReducer from './reducers-media';

const rootReducer = combineReducers({
  events: EventsReducer,
  fighters: FightersReducer,
  news: NewsReducer,
  media: MediaReducer,
});

export default rootReducer;
