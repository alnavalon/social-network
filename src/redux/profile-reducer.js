import {profileAPI} from '../Api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 124}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.text,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts].splice(action.postId, 1)
            };
        }
        default:
            return state;
    }
};
export const addPostCreator = (text) =>
    ({
        type: ADD_POST,
        text
    });

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(response));
    };
};

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId);
        dispatch(setStatus(response));
    };
};

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.resultCode === 0)
            dispatch(setStatus(status));
    };
};

export default profileReducer;