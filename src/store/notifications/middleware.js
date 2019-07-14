export const notificationsMiddleware = (store) => (next) => (action) => {
  console.log("Middleware triggered:", action);
  next(action);
};
