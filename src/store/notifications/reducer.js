import {ACTION_TYPES} from './actions';

export default function (state = {}, action ) {
  switch(action.type) {
    case ACTION_TYPES.ADD:
      let notificationId = Date.now() + Math.floor(Math.random() * 1000);
      return {...state, [notificationId]: action.payload };
    default:
      return state;
  }
}
