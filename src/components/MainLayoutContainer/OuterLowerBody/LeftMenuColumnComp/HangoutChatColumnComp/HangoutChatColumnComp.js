import React from 'react';

import styles from './HangoutChatColumnComp.module.css';

const HangoutChatColumnComp = (props) => {

    return (<div className={styles.hangoutChatColumnCompContainer}>
        <div className={styles.hangoutTitleRowContainer}>
            <span>Hangouts</span>
        </div>
        <div className={styles.sampleHangoutRowContainer}>

        </div>
    </div>)
}

export default HangoutChatColumnComp;