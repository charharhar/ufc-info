import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENT = 'FETCH_EVENT';

const ROOT_URL = 'http://ufc-data-api.ufc.com/api/v3/iphone';

export function fetchEvents() {
  const request = axios.get(`${ROOT_URL}/events`);

  return {
    type: FETCH_EVENTS,
    payload: request
  }
}

export function fetchEvent(id) {
  const request = axios.get(`${ROOT_URL}/events/${id}/fights`)

  return {
    type: FETCH_EVENT,
    payload: request
  }
}
