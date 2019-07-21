import {deleteFromStore} from '../../utils/deleteFromStore';

export const errorReducer = (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|ERROR|RESET)/.exec(type);
  // not *_REQUEST|*_ERROR actions, so we ignore them
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;

  switch (requestState) {
    case 'REQUEST':
      // When we call api again we need to remove errors from state
      return deleteFromStore(state, requestName);
    case 'ERROR':
      return {
        ...state,
        [requestName]: payload
      };

    case 'RESET':
      return deleteFromStore(state, requestName);

    default:
      return { ...state};
  }
};
