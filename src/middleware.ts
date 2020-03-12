import { Dispatch } from 'redux';
import {
  ReducerAction,
  removeCookie,
  updateCookie,
  setCookie,
  REDUX_COOKIES_SET,
  REDUX_COOKIES_REMOVE,
} from './actions';

export function createMiddleware() {
  const actionsMap = {
    [REDUX_COOKIES_SET]: (action: ReturnType<typeof setCookie>) => {
      return updateCookie(action.payload.name, action.payload.value, action.payload.options);
    },
    [REDUX_COOKIES_REMOVE]: (action: ReturnType<typeof removeCookie>) => {
      return updateCookie(action.payload, undefined);
    },
  };

  return () => (next: Dispatch) => (action: ReducerAction) => {
    if (action.type in actionsMap) {
      return actionsMap[action.type](action);
    }

    return next(action);
  };
}
