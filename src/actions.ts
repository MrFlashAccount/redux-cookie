import type { CookieSetOptions, Cookie } from 'universal-cookie';

export type ReducerAction = {
  type: typeof REDUX_COOKIES_SET | typeof REDUX_COOKIES_REMOVE;
  payload: any;
};

export const REDUX_COOKIES_UPDATE = Symbol();
export const REDUX_COOKIES_SET = Symbol();
export const REDUX_COOKIES_REMOVE = Symbol();

export function setCookie(name: string, value: Cookie, options: CookieSetOptions = {}) {
  return {
    type: REDUX_COOKIES_SET,
    payload: { name, value, options },
  };
}

export function removeCookie(name: string) {
  return { type: REDUX_COOKIES_REMOVE, payload: name };
}

export function updateCookie(name: string, value: Cookie, options: CookieSetOptions = {}) {
  return {
    type: REDUX_COOKIES_UPDATE,
    payload: { name, value, options },
  }
};
