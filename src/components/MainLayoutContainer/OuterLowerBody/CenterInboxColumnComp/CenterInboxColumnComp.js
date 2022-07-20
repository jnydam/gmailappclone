import React from 'react';

import styles from './CenterInboxColumnComp.module.css';

import greySquareGraphic from '../../../../assets/greysquareicon.png';
import simpleDownArrowGraphic from '../../../../assets/simpledownarrowicon.png';
import refreshIconGraphic from '../../../../assets/refreshicon.png';
import threeDotIconGraphic from '../../../../assets/threedoticon.png';

import leftArrowIconGraphic from '../../../../assets/leftarrowpageicon.png';
import rightArrowIconGraphic from '../../../../assets/rightarrowpageicon.png';
import MiddleInboxHorizBarComp from './MiddleInboxHorizBarComp/MiddleInboxHorizBarComp';
import LowerInboxListComp from './LowerInboxListComp/LowerInboxListComp';


const CenterInboxColumnComp = (props) => {

    return (<div className={styles.centerInboxColumnCompContainer}>
        <div className={styles.innerUpperRefreshCenterInboxRowContainer}>
            <div className={styles.leftSideIconContainer}>
                <div style={{marginLeft: '0.3rem'}} className={styles.mainImageContainer}>
                    <img className={styles.largeIconStyle} src={greySquareGraphic}>
                    </img>
                    <img className={styles.smallIconStyle} src={simpleDownArrowGraphic}>
                    </img>
                </div>
                <div className={styles.mainImageContainerModified}>
                    <img className={styles.largeIconStyle} src={refreshIconGraphic}></img>
                </div>
                <div className={styles.mainImageContainer}>
                    <img className={styles.largeIconStyle} src={threeDotIconGraphic}></img>
                </div>
            </div>
            <div className={styles.rightSideIconContainer}>
                <span style={{fontSize: '0.9rem'}}>
                    1-50 of 20,287
                </span>
                <div className={styles.rightSideArrowContainer}>
                    <img className={styles.arrowIconStyle} src={leftArrowIconGraphic}>
                    </img>
                </div>
                <div className={styles.rightSideArrowContainer}>
                    <img style={{height: '1.1rem'}} className={styles.arrowIconStyle} src={rightArrowIconGraphic}>
                    </img>
                </div>
            </div>
        </div>
        <MiddleInboxHorizBarComp></MiddleInboxHorizBarComp>
        <LowerInboxListComp></LowerInboxListComp>
    </div>)
}

export default CenterInboxColumnComp;