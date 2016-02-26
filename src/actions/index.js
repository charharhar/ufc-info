import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENT = 'FETCH_EVENT';
export const FETCH_FIGHTERS = 'FETCH_FIGHTERS';
export const FETCH_FIGHTER = 'FETCH_FIGHTER';
export const FETCH_NEWS_ALL = 'FETCH_NEWS_ALL';
export const FETCH_NEWS = 'FETCH_NEWS';

const ROOT_URL_EVENTS = 'http://ufc-data-api.ufc.com/api/v3/iphone';
const ROOT_URL_NEWS = 'http://ufc-data-api.ufc.com/api/v1/us';

export function fetchEvents() {
  const request = axios.get(`${ROOT_URL_EVENTS}/events`);

  return {
    type: FETCH_EVENTS,
    payload: request
  }
}

export function fetchEvent(id) {
  const request = axios.get(`${ROOT_URL_EVENTS}/events/${id}/fights`)

  return {
    type: FETCH_EVENT,
    payload: request
  }
}

export function fetchFighers() {
  const request = axios.get(`${ROOT_URL}/fighters`);

  return {
    type: FETCH_FIGHTERS,
    payload: request
  }
}

export function fetchFighter(id) {
  const request = axios.get(`${ROOT_URL}/fighters/${id}`);

  return {
    type: FETCH_FIGHTER,
    payload: request
  }
}

export function fetchNewsAll() {
  const request = axios.get(`${ROOT_URL_NEWS}/news`);

  return {
    type: FETCH_NEWS_ALL,
    payload: request
  }
}

export function fetchNews(id) {
  const request = axios.get(`${ROOT_URL_NEWS}/news/${id}`);

  return {
    type: FETCH_NEWS,
    payload: request
  }
}
