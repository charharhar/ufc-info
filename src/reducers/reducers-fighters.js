import { FETCH_FIGHTERS, FETCH_FIGHTER } from '../actions/index';

const INITIAL_STATE = { all: [], fighter: null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FIGHTERS:
      return { ...state, all: action.payload.data };
    case FETCH_FIGHTER:
      return { ...state, fighter: action.payload.data };
    default:
      return state;
  }
}
