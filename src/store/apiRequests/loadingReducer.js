
import { deleteFromStore } from '../../utils/deleteFromStore';

export const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCEED|ERROR|RESET)/.exec(type);
  console.log('>>>', action.type);
  // not a *_REQUEST / *_SUCCEED /  *_ERROR actions, so we ignore them
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  switch (requestState) {
    case 'REQUEST':
      return {
        ...state,
        [requestName]: true,
      };

    case 'SUCCEED':
    case 'ERROR':
    //  debugger;
      return deleteFromStore(state, requestName);

    default:
      return { ...state };
  }

};

