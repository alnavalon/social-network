import React from 'react';
import s from "./Friend.module.css";

const Friend = (props) => {
    let link = props.link;
    let name = props.name;
    return (
        <div className={s.friend}>
            <div className={s.avatar}>
                <img src={link} alt=""/>
            </div>
            <div className={s.name}>
                {name}
            </div>
        </div>
    );
}

export default Friend;