import React from 'react';

import styles from './InboxHorizDetailComp.module.css';

import greySquareGraphic from '../../../../../../assets/greysquare.png';
import greyStarGraphic from '../../../../../../assets/greystar.png';
import yellowPromotionGraphic from '../../../../../../assets/greyyellow.png';

const InboxHorizDetailComp = (props) => {

    return (<div className={styles.inboxHorizDetailCompContainer}>
        <div className={styles.leftDividerContainer}>
            <div style={{marginLeft: '0.83rem'}} className={styles.iconDividerContainer}>
                <img className={styles.leftSideIconStyle} src={greySquareGraphic}>
                </img>
            </div>
            <div className={styles.iconDividerContainer}>
                <img className={styles.leftSideIconStyle} src={greyStarGraphic}>
                </img>
            </div>
            <div className={styles.iconDividerContainer}>
                <img className={styles.leftSideIconStyle} src={yellowPromotionGraphic}>
                </img>
            </div>
            <span style={{
                marginLeft: '0.1rem'
            }}>{props.sender}</span>
        </div>
        <div className={styles.middleDividerContainer}>
            <span>
                {props.subject}
            </span>
            <span>
                -
            </span>
            <span>
                {props.description.substring(0, 100)}
            </span>
        </div>
        <div className={styles.rightDividerContainer}>

        </div>
    </div>)
}

export default InboxHorizDetailComp;