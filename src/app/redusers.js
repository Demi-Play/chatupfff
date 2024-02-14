const initialState = {
    users: [],
    activeUser: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };
        case 'SELECT_ACTIVE_USER':
            return {
                ...state,
                activeUser: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
