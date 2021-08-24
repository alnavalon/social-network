import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/` + props.id;
    let link = props.link;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            <div className={s.avatar}>
                <img src={link} alt=""/>
            </div>

        </div>
    );
};

export default DialogItem;