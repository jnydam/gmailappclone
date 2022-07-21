import React from 'react';

import styles from './RightMenuColumnComp.module.css';

import blueCheckIconGraphic from '../../../../assets/bluecheckicon.png';
import yellowLightGraphic from '../../../../assets/yellowlighticon.png';
import blueProfileGraphic from '../../../../assets/bluepersonrighticon.png';
import calendarGraphic from '../../../../assets/rightcalendaricon.png';

const RightMenuColumnComp = (props) => {

    return (<div className={styles.rightMenuColumnCompContainer}>
        <div className={styles.rightIconContainer}>
            <img className={styles.rightMenuIconStyle} src={calendarGraphic}>
            </img>
        </div>
        <div className={styles.rightIconContainer}>
            <img className={styles.rightMenuIconStyle} src={yellowLightGraphic}>
            </img>
        </div>
        <div className={styles.rightIconContainer}>
            <img className={styles.rightMenuIconStyle} src={blueCheckIconGraphic}>
            </img>
        </div>
        <div className={styles.rightIconContainer}>
            <img className={styles.rightMenuIconStyle} src={blueProfileGraphic}>
            </img>
        </div>
    </div>)
}

export default RightMenuColumnComp;
