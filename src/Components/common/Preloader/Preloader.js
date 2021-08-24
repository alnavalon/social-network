import preloader from '../../../Assets/preloader.svg';
import React from 'react';
import styles from './Preloader.module.css';

let Preloader = (props) => {
    return <div className={styles.preloader}>
        <img src={preloader} alt="preloader"/>
    </div>
};

export default Preloader;