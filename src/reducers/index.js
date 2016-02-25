import { combineReducers } from 'redux';
import EventsReducer from './reducers-events';

const rootReducer = combineReducers({
  events: EventsReducer,
});

export default rootReducer;
