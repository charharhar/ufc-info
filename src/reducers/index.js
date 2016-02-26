import { combineReducers } from 'redux';
import EventsReducer from './reducers-events';
import FightersReducer from './reducers-fighters';
import NewsReducer from './reducers-news';

const rootReducer = combineReducers({
  events: EventsReducer,
  fighters: FightersReducer,
  news: NewsReducer,
});

export default rootReducer;
