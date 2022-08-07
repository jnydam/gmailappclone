import React from 'react';

import styles from './MiddleInboxDividerHorizComp.module.css';

const MiddleInboxDividerHorizComp = (props) => {


    return (<div className={styles.middleInboxDividerHorizCompContainer}>
        <div className={styles.iconImageContainer}>
            <img className={styles.localIconStyle} src={props.iconImage}>
            </img>
        </div>
        <span style={{color: props.mainColor, 
        fontSize: '0.75rem', fontWeight: 'bold'}}>{props.labelText}</span>
        <div 
        style={{
            backgroundColor: props.mainColor
        }}
        className={styles.lowerColorBanner}>

        </div>
    </div>)
}

export default MiddleInboxDividerHorizComp;