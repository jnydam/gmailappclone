import React from 'react';

import styles from './GoogleSearchBar.module.css';

import searchMailIconGraphic from '../../../../assets/searchmailicon.png';
import filterMailIconGraphic from '../../../../assets/googlefiltericon.png';

const GoogleSearchBar = (props) => {

    return (<div className={styles.googleSearchBarContainer}>
        <div className={styles.searchIconImageContainer}>
            <img style={{height: '2rem', width: '2rem'}} src={searchMailIconGraphic}></img>
        </div>
        <input className={styles.searchMailInputStyle} placeholder='Search mail'></input>
        <div className={styles.filterIconImageContainer}>
            <img style={{height: '1.7rem', width: '1.7rem'}} src={filterMailIconGraphic}></img>
        </div>
    </div>)
}

export default GoogleSearchBar;