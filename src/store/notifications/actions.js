export const ACTION_TYPES = {
  ADD: '@@NOTIFICATIONS/ADD',
  REMOVE: '@@NOTIFICATIONS/REMOVE'
};
/**
 * @param {Object} payload - The title of the book.
 * @param {String} payload.message - The title of the book.
 * */
export const addNotification = (payload) => ({
  type: ACTION_TYPES.ADD,
  payload
});
