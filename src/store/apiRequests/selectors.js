import _, { get, isArray, some } from 'lodash';
import { ERROR_REDUCER_NAME, LOADING_REDUCER_NAME, ROOT_REDUCER_NAME } from './constants';

export const createErrorMessageSelector = (actions) => (state) => {
  const _actions = !isArray(actions) ? [actions] : actions;
  return _(_actions)
    .map((action) => get(state, `${ ROOT_REDUCER_NAME }.${ ERROR_REDUCER_NAME }.${ action }`))
    .compact()
    .first() || '';
};

export const createLoadingSelector =(actions) => (state) => {
  // returns true only when all actions is not loading
  const _actions = !isArray(actions) ? [actions] : actions;
  console.log(actions);
  const t =  some(_actions, (action) => get(state, `${ ROOT_REDUCER_NAME }.${ LOADING_REDUCER_NAME }.${ action }`));
  console.log(t);
  return t
};


