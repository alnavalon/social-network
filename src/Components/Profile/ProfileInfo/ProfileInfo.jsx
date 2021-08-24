import React from 'react';
import styles from './ProfileInfo.module.css';
import Avatar from '../../common/Avatar/Avatar';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile)
        return <Preloader/>;

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <Avatar link={profile.photos.large}/>
                <div className={styles.descriptionBlock__text}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <p>{profile.fullName}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

