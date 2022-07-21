import React from 'react';

import styles from './MeetingHorizDetailComp.module.css';

const MeetingHorizDetailSectionComp = (props) => {

    return (<div className={styles.meetingHorizontalDetailCompContainer}>
        <div className={styles.imageContainer}>
            <img className={styles.iconStyle} src={props.icon}>
            </img>
        </div>
        <span>
            {props.text}
        </span>
    </div>)
}

export default MeetingHorizDetailSectionComp;