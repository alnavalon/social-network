import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="/Images/logo.png" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div className={s.userBlock}>
                        <p>{props.login}</p>
                        <button className={s.logout} onClick={props.logout}>Logout</button>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};
export default Header;