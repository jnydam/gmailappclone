import React from 'react';

import styles from './HangoutChatColumnComp.module.css';

import hangoutProfileGraphic from '../../../../../assets/profilehangoutpic.png';
import simpleDownArrowGraphic from '../../../../../assets/simpledownarrowicon.png';

const HangoutChatColumnComp = (props) => {

    return (<div className={styles.hangoutChatColumnCompContainer}>
        <div className={styles.hangoutTitleRowContainer}>
            <span style={{marginLeft: '1rem'}}>Hangouts</span>
        </div>
        <div className={styles.sampleHangoutRowContainer}>
            <img style={{height: '2.5rem', marginLeft: '1rem'}} src={hangoutProfileGraphic}>
            </img>
            <span>John</span>
            <img style={{height: '1rem'}} src={simpleDownArrowGraphic}>
            </img>
        </div>
        <div className={styles.bodyHangoutRowContainer}>
            <span>No recent chats</span>
            <span>Start a new one</span>
        </div>
    </div>)
}

export default HangoutChatColumnComp;