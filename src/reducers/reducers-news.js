import { FETCH_NEWS_ALL, FETCH_NEWS } from '../actions';

const INITIAL_STATE = { all: [], news: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_NEWS_ALL:
      return { ...state, all: action.payload.data }
    case FETCH_NEWS:
      return { ...state, news: action.payload.data }
    default:
      return state;
  }
}
