import {authAPI} from '../Api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const LOGOUT_USER = 'auth/LOGOUT_USER';
const SET_LOGIN_ERROR = 'auth/SET_LOGIN_ERROR';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    errorMessage: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }
        case LOGOUT_USER: {
            return {
                ...initialState
            };
        }
        case SET_LOGIN_ERROR: {
            return {
                ...initialState,
                errorMessage: action.errorMessage
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) =>
    ({
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth: true,
            errorMessage: null
        }
    });
export const logoutUser = () =>
    ({
        type: LOGOUT_USER
    });
export const setLoginError = (errorMessage) => ({
    type: SET_LOGIN_ERROR,
    errorMessage

});
export const getAuth = () => {
    return async (dispatch) => {
        let response = await authAPI.getMe();
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setAuthUserData(id, login, email));
        }
    };
};
export const logIn = (data) => {
    return async (dispatch) => {
        let response = await authAPI.logIn(data);
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            dispatch(setLoginError(response.data.messages[0]));
        }

    };
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    response.resultCode === 0 && dispatch(logoutUser());
};

export default authReducer;