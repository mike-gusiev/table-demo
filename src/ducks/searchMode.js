/* Types */
export const MODE = 'MODE';

/* Reducers */
export const modeReducer = (state = true, action) => {
    switch (action.type) {
        case MODE:
            return state = !state;
        default:
            return state
    }
};

/* Actions */
export const mode = () => {
    return {
        type: MODE
    }
};