import React from 'react';
import MeetingHorizDetailSectionComp from './MeetingHorizDetailComp/MeetingHorizDetailComp';

import styles from './MeetSectionColumnComp.module.css';

import cameraGraphic from '../../../../../assets/meetcameraicon.png';
import joinMeetingGraphic from '../../../../../assets/joinmeetingicon.png';

const MeetSectionColumnComp = (props) => {

    const meetingTabData = [
        {
            icon: cameraGraphic,
            text: 'New Meeting'
        },
        {
            icon: joinMeetingGraphic,
            text: 'Join a Meeting'
        }
    ]

    return (<div className={styles.meetSectionColumnCompContainer}>
        <div className={styles.meetTitleRowContainer}>
            <span style={{marginLeft: '1rem'}}>Meet</span>
        </div>
        {meetingTabData.map((meetingEntryData, index) => (
            <MeetingHorizDetailSectionComp
                key={index}
                icon={meetingEntryData.icon}
                text={meetingEntryData.text}></MeetingHorizDetailSectionComp>
        ))}
    </div>)
}

export default MeetSectionColumnComp;