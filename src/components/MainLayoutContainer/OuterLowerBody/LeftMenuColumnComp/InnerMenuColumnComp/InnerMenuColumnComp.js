import React from 'react';

import styles from './InnerMenuColumnComp.module.css';
import InnerMenuDetailHorizComp from './InnerMenuDetailHorizComp/InnerMenuDetailHorizComp';

import inboxIconGraphic from '../../../../../assets/redinboxicon.png';
import starredIconGraphic from '../../../../../assets/lefttabstaricon.png';
import snoozedIconGraphic from '../../../../../assets/lefttabsnoozeicon.png';
import importantIconGraphic from '../../../../../assets/lefttabimportanticon.png';
import sentIconGraphic from '../../../../../assets/lefttabsenticon.png';
import draftIconGraphic from '../../../../../assets/lefttabdraftsicon.png';

const InnerMenuColumnComp = (props) => {

    const menuCategoryData = [
        {
            iconPic: inboxIconGraphic,
            text: 'Inbox'
        },
        {
            iconPic: starredIconGraphic,
            text: 'Starred'
        },
        {
            iconPic: snoozedIconGraphic,
            text: 'Snoozed'
        },
        {
            iconPic: importantIconGraphic,
            text: 'Important'
        },
        {
            iconPic: sentIconGraphic,
            text: 'Sent'
        },
        {
            iconPic: draftIconGraphic,
            text: 'Drafts'
        }
    ];


    return (<div className={styles.innerMenuColumnComp}>
        <div className={styles.expandableInnerMenuColumnContainer}>
            {menuCategoryData.map((categoryEntry, index) => (
                <InnerMenuDetailHorizComp
                    key={index}
                    iconPic={categoryEntry.iconPic}
                    text={categoryEntry.text}></InnerMenuDetailHorizComp>
            ))}
        </div>
    </div>)
}

export default InnerMenuColumnComp;