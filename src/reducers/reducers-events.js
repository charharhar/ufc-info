import { FETCH_EVENTS, FETCH_EVENT } from '../actions';

const INITIAL_STATE = { all: [], event: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, all: action.payload.data, event: [] }
    case FETCH_EVENT:
      return { ...state, event: action.payload.data }
    default:
      return state;
  }
}
