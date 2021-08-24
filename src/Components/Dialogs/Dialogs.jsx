import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import MessageForm from '../common/Forms/MessageForm';


const Dialogs = (props) => {
    let state = props.dialogPage;
    let dialogElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id} link={el.link} key={el.id}/>);
    let messageElements = state.messages.map(el => <Message message={el.message} key={el.id}/>);

    let onSendMessageClick = (text) => {
        props.sendMessage(text);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <MessageForm onClick={onSendMessageClick}
                             buttonName='Send message'/>
            </div>
        </div>
    );
};
export default Dialogs;