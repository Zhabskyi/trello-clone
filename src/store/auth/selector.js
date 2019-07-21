export const getToken = (state) => state.auth.token;
export const isAuthenticated = (state) => !!state.auth.token;
