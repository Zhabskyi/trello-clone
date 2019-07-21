export const deleteFromStore = (state, fieldName) => (
    Object.keys(state).reduce((_state, field) => {
        if (field !== fieldName) {
            // @ts-ignore
            _state[field] = state[field];
        }
        return _state;
    }, {})
);
