import React from 'react';

import styles from './LeftMenuColumnComp.module.css';

import InnerMenuColumnComp from './InnerMenuColumnComp/InnerMenuColumnComp';
import MeetSectionColumnComp from './MeetSectionColumnComp/MeetSectionColumnComp';
import HangoutChatColumnComp from './HangoutChatColumnComp/HangoutChatColumnComp';
import LowermostButtonRowComp from './LowermostButtonRowComp/LowermostButtonRowComp';

import plusButtonGraphic from '../../../../assets/pluscomposeicon.png';

const LeftMenuColumnComp = (props) => {

    return (<div className={styles.leftMenuColumnCompContainer}>
        <div className={styles.composeButtonRowContainer}>
            <button className={styles.composeButtonStyle}>
                <img 
                    style={{
                        marginRight: '0.5rem',
                        height: '2rem'
                    }}
                    src={plusButtonGraphic}></img>
                <span style={{fontSize: '0.9rem',
            marginRight: '0.4rem',
            fontWeight: '500'}}>Compose</span>
            </button>
        </div>
        <InnerMenuColumnComp></InnerMenuColumnComp>
        <MeetSectionColumnComp></MeetSectionColumnComp>
        <HangoutChatColumnComp></HangoutChatColumnComp>
        <LowermostButtonRowComp></LowermostButtonRowComp>
    </div>)
}

export default LeftMenuColumnComp;