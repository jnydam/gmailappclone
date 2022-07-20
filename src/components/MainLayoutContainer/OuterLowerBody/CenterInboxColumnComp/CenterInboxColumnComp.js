import React from 'react';

import styles from './CenterInboxColumnComp.module.css';

import greySquareGraphic from '../../../../assets/greysquareicon.png';
import simpleDownArrowGraphic from '../../../../assets/simpledownarrowicon.png';
import refreshIconGraphic from '../../../../assets/refreshicon.png';
import threeDotIconGraphic from '../../../../assets/threedoticon.png';


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

            </div>
        </div>
    </div>)
}

export default CenterInboxColumnComp;