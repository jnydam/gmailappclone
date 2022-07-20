import React from 'react';

import styles from './OuterUpperNav.module.css';

import leftSideMenuGraphic from '../../../assets/upperrightsideicon.png';
import mIconGraphic from '../../../assets/mainmicon.png';

const OuterUpperNav = (props) => {

    return (<div className={styles.outerUpperNavContainer}>
        <div className={styles.leftDividerContainer}>
            <img className={styles.iconGraphicStyle} src={leftSideMenuGraphic}>
            </img>
            <img className={styles.iconGraphicStyle} src={mIconGraphic}>
            </img>
            <span style={{fontSize: '2.2rem'}}>Gmail</span>
        </div>
        <div className={styles.rightDividerContainer}>
             
        </div>
    </div>)
}

export default OuterUpperNav;