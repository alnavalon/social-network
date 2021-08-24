import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import MessageForm from '../../common/Forms/MessageForm';


const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    let onAddPost = (text) => {
        props.addPost(text);
    };

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <MessageForm onClick={onAddPost}
                         buttonName='Add post'/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;