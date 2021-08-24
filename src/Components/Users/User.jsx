import React from 'react';
import styles from './Users.module.css';
import {NavLink} from 'react-router-dom';
import unknownAvatar from '../../Assets/unknownAvatar.png';


const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img
                        src={user.photos.small != null ? user.photos.small : unknownAvatar}
                        alt="User's avatar" className={styles.userAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(userId => userId === user.id)}
                                onClick={() => {
                                    unfollow(user.id);
                                }}>
                            Unfollow
                        </button>
                        : <button disabled={followingInProgress.some(userId => userId === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>
                            follow
                        </button>}
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>

        </div>
    );
};

export default User;
