import React from 'react';

import styles from './MainLayoutContainer.module.css';
import OuterLowerBody from './OuterLowerBody/OuterLowerBody';
import OuterUpperNav from './OuterUpperNav/OuterUpperNav';

const MainLayoutContainer = (props) => {

    return (<div className={styles.mainLayoutContainerComp}>
        <OuterUpperNav></OuterUpperNav>
        <OuterLowerBody></OuterLowerBody>
    </div>)
}

export default MainLayoutContainer;