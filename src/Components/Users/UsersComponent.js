import React from 'react';
import styles from './Users.module.css';
import Pagination from '../common/Pagination/Pagination.jsx';
import User from './User';

let UsersComponent = ({users, currentPage, pageSize, onPageChanged, totalUsersCount, ...props}) => {

    return <div>
        <Pagination currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}/>
        <div className={styles.grid}>
            {
                users.map(item => <User key={item.id}
                                              user={item}
                                              followingInProgress={props.followingInProgress}
                                              follow={props.follow}
                                              unfollow={props.unfollow}
                />)
            }
        </div>
    </div>;


};

export default UsersComponent;
