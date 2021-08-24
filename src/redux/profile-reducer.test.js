import profileReducer, {addPostCreator, deletePost} from './profile-reducer';
import React from 'react';


test('Length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostCreator("TEST");
    let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post!', likesCount: 124}
        ]
    };
    // 2. Action
    let newTest = profileReducer(initialState, action);

    // 3. Expectation
    expect(newTest.posts.length).toBe(3);
});

test('new post message should be correct', () => {
    // 1. Test data
    let action = addPostCreator("TEST");
    let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post!', likesCount: 124}
        ]
    };
    // 2. Action
    let newTest = profileReducer(initialState, action);

    // 3. Expectation
    expect(newTest.posts[0].message).toBe('TEST');
});

test('Length of posts after deleting should be decremented', () => {
    // 1. Test data
    let action = deletePost(1);
    let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post!', likesCount: 124}
        ]
    };
    // 2. Action
    let newTest = profileReducer(initialState, action);

    // 3. Expectation
    expect(newTest.posts.length).toBe(1);
});