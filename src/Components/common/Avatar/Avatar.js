import React from 'react';
import unknownAvatar from '../../../Assets/unknownAvatar.png';
import styles from './Avatar.module.css';

let Avatar =(props) => {
    return <img src={!props.link ? unknownAvatar : props.link} alt="" className={styles.avatar}/>
};

export default Avatar;