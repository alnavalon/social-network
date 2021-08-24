import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg"
                 alt=""/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    );
}
export default Post;