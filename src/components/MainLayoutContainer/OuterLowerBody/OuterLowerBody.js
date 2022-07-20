import React from 'react';
import CenterInboxColumnComp from './CenterInboxColumnComp/CenterInboxColumnComp';
import LeftMenuColumnComp from './LeftMenuColumnComp/LeftMenuColumnComp';

import styles from './OuterLowerBody.module.css';
import RightMenuColumnComp from './RightMenuColumnComp/RightMenuColumnComp';

const OuterLowerBody = (props) => {

    return (<div className={styles.outerLowerBodyCompContainer}> 
        <LeftMenuColumnComp></LeftMenuColumnComp>
        <CenterInboxColumnComp></CenterInboxColumnComp>
        <RightMenuColumnComp></RightMenuColumnComp>
    </div>)
}

export default OuterLowerBody;