import React from 'react';
import s from "./Sidebar.module.css";
import Friend from "./Friend/Friend";


const Sidebar = (props) => {

    let dialogElements = props.sideBar.map( el => <Friend key={el.id} name={el.name} link={el.link} />);

    return (
        <div className={s.sideBar}>
            <div className={s.title}>
                Friends
            </div>
            <div className={s.grids}>
                {dialogElements}
            </div>

        </div>
    );
}

export default Sidebar;