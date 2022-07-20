import React from 'react';
import MiddleInboxDividerHorizComp from './MiddleInboxDividerHorizComp/MiddleInboxDividerHorizComp';

import styles from './MiddleInboxHorizBarComp.module.css';

import redInboxGraphic from '../../../../../assets/redinboxicon.png';
import socialIconGraphic from '../../../../../assets/socialuppertabicon.png';
import promotionsIconGraphic from '../../../../../assets/promotionuppertabicon.png';

const MiddleInboxHorizBarComp = (props) => {

    return (<div className={styles.middleInboxHorizBarCompContainer}>
        <MiddleInboxDividerHorizComp
            iconImage={redInboxGraphic}
            labelText="Primary"
            mainColor="red"></MiddleInboxDividerHorizComp>
        <MiddleInboxDividerHorizComp
            iconImage={socialIconGraphic}
            labelText="Social"
            mainColor="blue"></MiddleInboxDividerHorizComp>
        <MiddleInboxDividerHorizComp
            iconImage={promotionsIconGraphic}
            labelText="Promotions"
            mainColor="green"></MiddleInboxDividerHorizComp>
    </div>)
}

export default MiddleInboxHorizBarComp;