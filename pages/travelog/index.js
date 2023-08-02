import React, { useState } from 'react';
import styles from "../../styles/Home.module.css";
import TravelogPage from "../../src/components/Contents/TravelogPage";
function travelog() {

    return (
        <div className={styles.container}>

            {/** 콘텐츠 부분 **/}
            <TravelogPage />

        </div>
    )
}

export default travelog;