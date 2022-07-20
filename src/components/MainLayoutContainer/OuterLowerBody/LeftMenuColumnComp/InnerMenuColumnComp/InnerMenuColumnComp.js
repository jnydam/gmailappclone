import React from 'react';

import styles from './InnerMenuColumnComp.module.css';
import InnerMenuDetailHorizComp from './InnerMenuDetailHorizComp/InnerMenuDetailHorizComp';

const InnerMenuColumnComp = (props) => {

    return (<div className={styles.innerMenuColumnComp}>
        <div className={styles.expandableInnerMenuColumnContainer}>
            <InnerMenuDetailHorizComp></InnerMenuDetailHorizComp>
        </div>
    </div>)
}

export default InnerMenuColumnComp;