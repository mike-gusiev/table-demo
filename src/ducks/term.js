/* Types */
export const CHANGE = 'CHANGE';

const initialState = '';

/* Reducers */
export const termReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return state = action.payload;
        default:
            return state;
    }
};

/* Actions */
export const change = (data) => {
    return {
        type: CHANGE,
        payload: data
    }
};
