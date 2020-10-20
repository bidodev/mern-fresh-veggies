const INITIAL_STATE = {
    farmerUser: null
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                farmerUser: action.payload
            };
        case 'LOGOUT_USER':
                return {
                    ...state,
                    farmerUser: null
                };
        default:
            return state;
    }

}
export default loginReducer;