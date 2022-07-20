import React from 'react';

import styles from './InnerMenuDetailHorizComp.module.css';

const InnerMenuDetailHorizComp = (props) => {

    return (<div className={styles.innerMenuDetailHorizCompContainer}>
        <div className={styles.roundedInnerDataContainer}>
            <div className={styles.iconContainer}>
                <img className={styles.localIconStyle} src={props.iconPic}>
                </img>
            </div>
            <div className={styles.textInfoContainer}>
                <span style={{
                    marginLeft: '0.3rem'
                }}>{props.text}</span>
            </div>
        </div>
    </div>)
}

export default InnerMenuDetailHorizComp;