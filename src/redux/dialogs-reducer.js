const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.text
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (text) => (
    {
        type: SEND_MESSAGE,
        text
    });

export default dialogsReducer;