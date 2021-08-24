import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post!', likesCount: 124}
            ],
            postText: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dimych', link: '\\Avatars\\man.png'},
                {id: 2, name: 'Anton', link: '\\Avatars\\pika.jpg'},
                {id: 3, name: 'Victor', link: '\\Avatars\\woman.png'},
                {id: 4, name: 'Sasha', link: '\\Avatars\\woman2.png'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How\'s going?'},
                {id: 3, message: 'Yo, man'},
                {id: 4, message: 'Hiho, dude'},
            ],
            messageText: ''
        },
        sideBar: [
            {name: 'Dimych', link: '\\Avatars\\man.png'},
            {name: 'Anton', link: '\\Avatars\\pika.jpg'},
            {name: 'Sasha', link: '\\Avatars\\woman.png'},
            {name: 'Masha', link: '\\Avatars\\woman2.png'}
        ]
    },
    _callSubscriber() {
        console.log('render');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // pattern - observer, так же работает AddEventListener
    },
    dispatch(action) {  // { type: 'ADD-POST' }
        //action - обьект
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sideBar =sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
};


export default store;