import {getAuth} from './auth-reducer';

const SET_INITIALIZING = 'SET_INITIALIZING';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZING: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
};

export const initializedSuccess = () =>
    ({
        type: SET_INITIALIZING,
    });

export const initializeApp = () => (dispatch) => {
    let dispatchResult = dispatch(getAuth());
    dispatchResult.then(() => {
        dispatch(initializedSuccess());
    });
};


export default appReducer;