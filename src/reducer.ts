import Cookies from 'universal-cookie';
import { updateCookie, REDUX_COOKIES_UPDATE } from './actions';

export function createReducer(cookies: string) {
  const cookieWorker = new Cookies(cookies);

  return function reducer(state = getState(cookieWorker), action: ReturnType<typeof updateCookie>) {
    if (action.type === REDUX_COOKIES_UPDATE) {
      if (action.payload.value === undefined) {
        cookieWorker.remove(action.payload.name);
      } else {
        cookieWorker.set(action.payload.name, action.payload.value, action.payload.options);
      }

      return getState(cookieWorker);
    }

    return state;
  };
}

function getState(cookieWorker: Cookies) {
  return {
    cookieString: cookieWorker.getAll({ doNotParse: true }) as string,
    cookies: {
      ...(cookieWorker.getAll() as Record<string, string>),
    },
  };
}
