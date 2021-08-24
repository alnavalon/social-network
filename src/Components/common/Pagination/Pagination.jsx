import React from 'react';
import styles from './Pagination.module.css';

let Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let temporaryPages = [];
    let currentPage = props.currentPage;

    for (let i = 1; i <= pagesCount; i++) {
        temporaryPages.push(i);
    }
    let pages = [];
    if (temporaryPages.length > 5) {
        pages.push(temporaryPages[0], temporaryPages[1], temporaryPages[2], temporaryPages[Math.round((temporaryPages.length - 1) / 2)], temporaryPages[temporaryPages.length - 1]);
    } else {
        pages = [...temporaryPages];
    }
    return (
        <div className={styles.pages}>
            {
                pages.map(p => <span id={currentPage}
                                     className={currentPage === p ? styles.selectedPage : ''}
                                     onClick={(e) => {
                                         props.onPageChanged(p);
                                     }}>{p}</span>)
            }
        </div>
    );
};

export default Pagination;
