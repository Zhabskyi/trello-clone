import { combineReducers } from 'redux';
import { loadingReducer  } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { ERROR_REDUCER_NAME, LOADING_REDUCER_NAME } from './constants';

export default combineReducers({
  [LOADING_REDUCER_NAME]: loadingReducer,
  [ERROR_REDUCER_NAME]: errorReducer
});
