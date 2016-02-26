import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENT = 'FETCH_EVENT';
export const FETCH_FIGHTERS = 'FETCH_FIGHTERS';
export const FETCH_FIGHTER = 'FETCH_FIGHTER';
export const FETCH_NEWS_ALL = 'FETCH_NEWS_ALL';
export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_MEDIA_ALL = 'FETCH_MEDIA_ALL';
export const FETCH_MEDIA = 'FETCH_MEDIA';

const ROOT_URL_1 = 'http://ufc-data-api.ufc.com/api/v3/iphone';
const ROOT_URL_2 = 'http://ufc-data-api.ufc.com/api/v1/us';

export function fetchEvents() {
  const request = axios.get(`${ROOT_URL_1}/events`);

  return {
    type: FETCH_EVENTS,
    payload: request
  }
}

export function fetchEvent(id) {
  const request = axios.get(`${ROOT_URL_1}/events/${id}/fights`)

  return {
    type: FETCH_EVENT,
    payload: request
  }
}

export function fetchFighters() {
  const request = axios.get(`${ROOT_URL_1}/fighters`);

  return {
    type: FETCH_FIGHTERS,
    payload: request
  }
}

export function fetchFighter(id) {
  const request = axios.get(`${ROOT_URL_1}/fighters/${id}`);

  return {
    type: FETCH_FIGHTER,
    payload: request
  }
}

export function fetchNewsAll() {
  const request = axios.get(`${ROOT_URL_2}/news`);

  return {
    type: FETCH_NEWS_ALL,
    payload: request
  }
}

export function fetchNews(id) {
  const request = axios.get(`${ROOT_URL_2}/news/${id}`);

  return {
    type: FETCH_NEWS,
    payload: request
  }
}

export function fetchMediaAll() {
  const request = axios.get(`${ROOT_URL_2}/media`);

  return {
    type: FETCH_MEDIA_ALL,
    payload: request
  }
}

export function fetchMedia(id) {
  const request = axios.get(`${ROOT_URL_2}/media/${id}`);

  return {
    type: FETCH_MEDIA,
    payload: request
  }
}
