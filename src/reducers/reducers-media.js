import { FETCH_MEDIA_ALL, FETCH_MEDIA } from '../actions';

const INITIAL_STATE = { all: [], media: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MEDIA_ALL:
      return { ...state, all: action.payload.data }
    case FETCH_MEDIA:
      return { ...state, media: action.payload.data }
    default:
      return state;
  }
}
