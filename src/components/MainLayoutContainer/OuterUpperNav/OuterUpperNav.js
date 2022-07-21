import React from 'react';

import styles from './OuterUpperNav.module.css';

import leftSideMenuGraphic from '../../../assets/upperrightsideicon.png';
import mIconGraphic from '../../../assets/mainmicon.png';
import GoogleSearchBar from './GoogleSearchBar/GoogleSearchBar';

import questionIconGraphic from '../../../assets/questionicon.png';
import settingIconGraphic from '../../../assets/settingsicon.png';
import nineGridIconGraphic from '../../../assets/ninegridicon.png';
import upperRightProfileGraphic from '../../../assets/upperrightprofilepic.png';

const OuterUpperNav = (props) => {

    return (<div className={styles.outerUpperNavContainer}>
        <div className={styles.leftDividerContainer}>
            <img style={{height: '1.6rem'}} className={styles.iconGraphicStyle} src={leftSideMenuGraphic}>
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
            <img style={{height: '2rem'}} src={settingIconGraphic}>
                </img>
            </div>
            <div className={styles.rightSideImageDivider}>
            <img style={{height: '2rem'}} src={nineGridIconGraphic}>
                </img>
            </div>
            <div style={{marginRight: '0.9rem'}} className={styles.rightSideImageDivider}>
            <img style={{height: '2.8rem'}} src={upperRightProfileGraphic}>
                </img>
            </div>
        </div>
    </div>)
}

export default OuterUpperNav;