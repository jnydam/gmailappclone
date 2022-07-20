import React from 'react';

import styles from './OuterUpperNav.module.css';

import leftSideMenuGraphic from '../../../assets/upperrightsideicon.png';
import mIconGraphic from '../../../assets/mainmicon.png';
import GoogleSearchBar from './GoogleSearchBar/GoogleSearchBar';

import questionIconGraphic from '../../../assets/questionicon.png';

const OuterUpperNav = (props) => {

    return (<div className={styles.outerUpperNavContainer}>
        <div className={styles.leftDividerContainer}>
            <img className={styles.iconGraphicStyle} src={leftSideMenuGraphic}>
            </img>
            <img className={styles.iconGraphicStyle} src={mIconGraphic}>
            </img>
            <span style={{
                fontSize: '1.6rem',
                marginLeft: '0.8rem'}}>Gmail</span>
            <GoogleSearchBar></GoogleSearchBar>
        </div>
        <div className={styles.rightDividerContainer}>
            <div className={styles.rightSideImageDivider}>
                <img style={{height: '2rem'}} src={questionIconGraphic}>
                </img>
            </div>
            <div className={styles.rightSideImageDivider}>

            </div>
            <div className={styles.rightSideImageDivider}>

            </div>
            <div className={styles.rightSideImageDivider}>

            </div>
        </div>
    </div>)
}

export default OuterUpperNav;